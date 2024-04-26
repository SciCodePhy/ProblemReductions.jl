var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ProblemReductions","category":"page"},{"location":"#ProblemReductions","page":"Home","title":"ProblemReductions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ProblemReductions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ProblemReductions]","category":"page"},{"location":"#ProblemReductions.StaticBitVector","page":"Home","title":"ProblemReductions.StaticBitVector","text":"StaticBitVector{N,C} = StaticElementVector{N,1,C}\nStaticBitVector(x::AbstractVector)\n\nExamples\n\njulia> sb = StaticBitVector([1,0,0,1,1])\n10011\n\njulia> sb[3]\n0x0000000000000000\n\njulia> collect(Int, sb)\n5-element Vector{Int64}:\n 1\n 0\n 0\n 1\n 1\n\n\n\n\n\n","category":"type"},{"location":"#ProblemReductions.StaticElementVector","page":"Home","title":"ProblemReductions.StaticElementVector","text":"StaticElementVector{N,S,C}\nStaticElementVector(nflavor::Int, x::AbstractVector)\n\nN is the length of vector, C is the size of storage in unit of UInt64, S is the stride defined as the log2(# of flavors). When the number of flavors is 2, it is a StaticBitVector.\n\nFields\n\ndata is a tuple of UInt64 for storing the configuration of static elements.\n\nExamples\n\njulia> ev = StaticElementVector(3, [1,2,0,1,2])\n12012\n\njulia> ev[2]\n0x0000000000000002\n\njulia> collect(Int, ev)\n5-element Vector{Int64}:\n 1\n 2\n 0\n 1\n 2\n\n\n\n\n\n","category":"type"},{"location":"#ProblemReductions.extract_solution","page":"Home","title":"ProblemReductions.extract_solution","text":"extract_solution(::Type{TA}, x::AbstractProblem, sol)\n\nExtract the solution sol of the target problem of type TA to the original problem x.\n\n\n\n\n\n","category":"function"},{"location":"#ProblemReductions.onehotv-Union{Tuple{C}, Tuple{S}, Tuple{N}, Tuple{Type{StaticElementVector{N, S, C}}, Any, Any}} where {N, S, C}","page":"Home","title":"ProblemReductions.onehotv","text":"onehotv(::Type{<:StaticElementVector}, i, v)\nonehotv(::Type{<:StaticBitVector, i)\n\nReturns a static element vector, with the value at location i being v (1 if not specified).\n\n\n\n\n\n","category":"method"},{"location":"#ProblemReductions.reduceto","page":"Home","title":"ProblemReductions.reduceto","text":"reduceto(::Type{TA}, x::AbstractProblem)\n\nReduce the problem x to a target problem of type TA.\n\n\n\n\n\n","category":"function"},{"location":"#ProblemReductions.@bv_str-Tuple{Any}","page":"Home","title":"ProblemReductions.@bv_str","text":"Constructing a static bit vector.\n\n\n\n\n\n","category":"macro"}]
}
