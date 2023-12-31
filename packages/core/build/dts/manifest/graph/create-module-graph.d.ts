import { Module } from "../../proto.js";
export declare const INITIAL_BLOCK_UNSET: bigint;
export declare class ModuleGraph {
    protected readonly modules: Module[];
    protected readonly nodes: Map<Module, Set<Module>>;
    /**
     * A cache of shortest paths between modules.
     */
    private readonly distances;
    /**
     * A cache of topologically sorted modules.
     */
    private readonly sorted;
    constructor(modules: Module[]);
    protected getModule(name: string): Module;
    protected getModule(module: Module): Module;
    protected getModule(nameOrModule: string | Module): Module;
    protected shortesPaths(name: string): Map<Module, number>;
    protected shortesPaths(module: Module): Map<Module, number>;
    protected shortesPaths(nameOrModule: string | Module): Map<Module, number>;
    protected topologicalSort(name?: string): Set<Module>;
    protected topologicalSort(module?: Module): Set<Module>;
    protected topologicalSort(nameOrModule?: string | Module): Set<Module>;
    ancestorsOf(name: string): Module[];
    ancestorsOf(module: Module): Module[];
    ancestorsOf(nameOrModule: string | Module): Module[];
    parentsOf(name: string): Module[];
    parentsOf(module: Module): Module[];
    parentsOf(nameOrModule: string | Module): Module[];
    childrenOf(name: string): Module[];
    childrenOf(module: Module): Module[];
    childrenOf(nameOrModule: string | Module): Module[];
    sortedByGraphTopology(): Module[];
    startBlockFor(name: string): bigint;
    startBlockFor(module: Module): bigint;
    startBlockFor(nameOrModule: string | Module): bigint;
}
export declare function createModuleNodes(modules: Module[]): Map<Module, Set<Module>>;
export declare function createModuleGraph(modules: Module[]): ModuleGraph;
//# sourceMappingURL=create-module-graph.d.ts.map