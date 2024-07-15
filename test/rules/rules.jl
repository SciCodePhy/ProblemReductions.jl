using Test

@testset "spinglass_sat" begin
    include("spinglass_sat.jl")
end

@testset "rules" begin
    circuit = CircuitSAT(@circuit begin
        x = a ∨ ¬b
        y = ¬c ∨ b
        z = x ∧ y ∧ a
    end)

    for (source, target_type) in [
            # please add more tests here
            circuit => SpinGlass
        ]
        # directly solve
        best_source = findbest(source, BruteForce())

        # reduce and solve
        result = reduceto(target_type, source)
        target = target_problem(result)
        best_target = findbest(target, BruteForce())

        # extract the solution
        best_source_extracted = extract_solution.(Ref(result), best_target)

        # check if the solutions are the same
        @test sort(best_source) == sort(best_source_extracted)
    end
end