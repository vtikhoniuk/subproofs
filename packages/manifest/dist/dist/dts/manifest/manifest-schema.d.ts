import * as Schema from "@effect/schema/Schema";
export declare const BinaryTypeSchema: Schema.Schema<"wasm/rust-v1", "wasm/rust-v1">;
export type BinaryType = Schema.Schema.To<typeof BinaryTypeSchema>;
export declare const ManifestSpecVersionSchema: Schema.Schema<"v0.1.0", "v0.1.0">;
export type ManifestSpecVersion = Schema.Schema.To<typeof ManifestSpecVersionSchema>;
export declare const ProtobufSchema: Schema.Schema<{
    readonly files: readonly string[];
    readonly importPaths: readonly string[];
}, {
    readonly files: readonly string[];
    readonly importPaths: readonly string[];
}>;
export type Protobuf = Schema.Schema.To<typeof ProtobufSchema>;
export declare const PackageSchema: Schema.Schema<{
    readonly name: string;
    readonly version: string;
    readonly url?: string;
    readonly doc?: string;
}, {
    readonly name: string;
    readonly version: string;
    readonly url?: string;
    readonly doc?: string;
}>;
export type Package = Schema.Schema.To<typeof PackageSchema>;
export declare const InputSchema: Schema.Schema<{
    readonly map: string;
} | {
    readonly source: string;
} | {
    readonly params: string;
} | {
    readonly store: string;
    readonly mode?: "get" | "deltas";
}, {
    readonly map: string;
} | {
    readonly source: string;
} | {
    readonly params: string;
} | {
    readonly store: string;
    readonly mode: "get" | "deltas";
}>;
export type Input = Schema.Schema.To<typeof InputSchema>;
export declare const InitialBlockSchema: Schema.Schema<string | number | bigint, bigint>;
export type InitialBlock = Schema.Schema.To<typeof InitialBlockSchema>;
export declare const StoreModuleSchema: Schema.Schema<{
    readonly name: string;
    readonly kind: "store";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode?: "get" | "deltas";
    })[];
    readonly valueType: "string" | "bigint" | "bytes" | "int64" | "float64" | "bigfloat" | "bigdecimal" | `proto:${string}`;
    readonly updatePolicy: "set" | "set_if_not_exists" | "append" | "add" | "min" | "max";
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: string | number | bigint;
}, {
    readonly name: string;
    readonly kind: "store";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode: "get" | "deltas";
    })[];
    readonly valueType: "string" | "bigint" | "bytes" | "int64" | "float64" | "bigfloat" | "bigdecimal" | `proto:${string}`;
    readonly updatePolicy: "set" | "set_if_not_exists" | "append" | "add" | "min" | "max";
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: bigint;
}>;
export type StoreModule = Schema.Schema.To<typeof StoreModuleSchema>;
export declare const MapModuleSchema: Schema.Schema<{
    readonly name: string;
    readonly kind: "map";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode?: "get" | "deltas";
    })[];
    readonly output: {
        readonly type: string;
    };
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: string | number | bigint;
}, {
    readonly name: string;
    readonly kind: "map";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode: "get" | "deltas";
    })[];
    readonly output: {
        readonly type: string;
    };
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: bigint;
}>;
export type MapModule = Schema.Schema.To<typeof MapModuleSchema>;
export declare const ModuleSchema: Schema.Schema<{
    readonly name: string;
    readonly kind: "store";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode?: "get" | "deltas";
    })[];
    readonly valueType: "string" | "bigint" | "bytes" | "int64" | "float64" | "bigfloat" | "bigdecimal" | `proto:${string}`;
    readonly updatePolicy: "set" | "set_if_not_exists" | "append" | "add" | "min" | "max";
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: string | number | bigint;
} | {
    readonly name: string;
    readonly kind: "map";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode?: "get" | "deltas";
    })[];
    readonly output: {
        readonly type: string;
    };
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: string | number | bigint;
}, {
    readonly name: string;
    readonly kind: "store";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode: "get" | "deltas";
    })[];
    readonly valueType: "string" | "bigint" | "bytes" | "int64" | "float64" | "bigfloat" | "bigdecimal" | `proto:${string}`;
    readonly updatePolicy: "set" | "set_if_not_exists" | "append" | "add" | "min" | "max";
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: bigint;
} | {
    readonly name: string;
    readonly kind: "map";
    readonly inputs: readonly ({
        readonly map: string;
    } | {
        readonly source: string;
    } | {
        readonly params: string;
    } | {
        readonly store: string;
        readonly mode: "get" | "deltas";
    })[];
    readonly output: {
        readonly type: string;
    };
    readonly binary?: string;
    readonly doc?: string;
    readonly initialBlock?: bigint;
}>;
export type Module = Schema.Schema.To<typeof ModuleSchema>;
export declare const BinarySchema: Schema.Schema<{
    readonly type: "wasm/rust-v1";
    readonly file: string;
    readonly native?: string;
    readonly content?: Uint8Array;
    readonly entrypoint?: string;
    readonly protoPackageMapping?: {
        readonly [x: string]: string;
    };
}, {
    readonly type: "wasm/rust-v1";
    readonly file: string;
    readonly native?: string;
    readonly content?: Uint8Array;
    readonly entrypoint?: string;
    readonly protoPackageMapping?: {
        readonly [x: string]: string;
    };
}>;
export type Binary = Schema.Schema.To<typeof BinarySchema>;
export declare const SinkSchema: Schema.Schema<{
    readonly type: string;
    readonly module: string;
    readonly config: any;
}, {
    readonly type: string;
    readonly module: string;
    readonly config: any;
}>;
export type Sink = Schema.Schema.To<typeof SinkSchema>;
export declare const ManifestSchema: Schema.Schema<{
    readonly specVersion: "v0.1.0";
    readonly modules: readonly ({
        readonly name: string;
        readonly kind: "store";
        readonly inputs: readonly ({
            readonly map: string;
        } | {
            readonly source: string;
        } | {
            readonly params: string;
        } | {
            readonly store: string;
            readonly mode?: "get" | "deltas";
        })[];
        readonly valueType: "string" | "bigint" | "bytes" | "int64" | "float64" | "bigfloat" | "bigdecimal" | `proto:${string}`;
        readonly updatePolicy: "set" | "set_if_not_exists" | "append" | "add" | "min" | "max";
        readonly binary?: string;
        readonly doc?: string;
        readonly initialBlock?: string | number | bigint;
    } | {
        readonly name: string;
        readonly kind: "map";
        readonly inputs: readonly ({
            readonly map: string;
        } | {
            readonly source: string;
        } | {
            readonly params: string;
        } | {
            readonly store: string;
            readonly mode?: "get" | "deltas";
        })[];
        readonly output: {
            readonly type: string;
        };
        readonly binary?: string;
        readonly doc?: string;
        readonly initialBlock?: string | number | bigint;
    })[];
    readonly package: {
        readonly name: string;
        readonly version: string;
        readonly url?: string;
        readonly doc?: string;
    };
    readonly protobuf: {
        readonly files: readonly string[];
        readonly importPaths: readonly string[];
    };
    readonly params?: {
        readonly [x: string]: string;
    };
    readonly network?: string;
    readonly binaries?: {
        readonly [x: string]: {
            readonly type: "wasm/rust-v1";
            readonly file: string;
            readonly native?: string;
            readonly content?: Uint8Array;
            readonly entrypoint?: string;
            readonly protoPackageMapping?: {
                readonly [x: string]: string;
            };
        };
    };
    readonly imports?: {
        readonly [x: string]: string;
    };
    readonly sink?: {
        readonly type: string;
        readonly module: string;
        readonly config: any;
    };
}, {
    readonly specVersion: "v0.1.0";
    readonly modules: readonly ({
        readonly name: string;
        readonly kind: "store";
        readonly inputs: readonly ({
            readonly map: string;
        } | {
            readonly source: string;
        } | {
            readonly params: string;
        } | {
            readonly store: string;
            readonly mode: "get" | "deltas";
        })[];
        readonly valueType: "string" | "bigint" | "bytes" | "int64" | "float64" | "bigfloat" | "bigdecimal" | `proto:${string}`;
        readonly updatePolicy: "set" | "set_if_not_exists" | "append" | "add" | "min" | "max";
        readonly binary?: string;
        readonly doc?: string;
        readonly initialBlock?: bigint;
    } | {
        readonly name: string;
        readonly kind: "map";
        readonly inputs: readonly ({
            readonly map: string;
        } | {
            readonly source: string;
        } | {
            readonly params: string;
        } | {
            readonly store: string;
            readonly mode: "get" | "deltas";
        })[];
        readonly output: {
            readonly type: string;
        };
        readonly binary?: string;
        readonly doc?: string;
        readonly initialBlock?: bigint;
    })[];
    readonly package: {
        readonly name: string;
        readonly version: string;
        readonly url?: string;
        readonly doc?: string;
    };
    readonly protobuf: {
        readonly files: readonly string[];
        readonly importPaths: readonly string[];
    };
    readonly params?: {
        readonly [x: string]: string;
    };
    readonly network?: string;
    readonly binaries?: {
        readonly [x: string]: {
            readonly type: "wasm/rust-v1";
            readonly file: string;
            readonly native?: string;
            readonly content?: Uint8Array;
            readonly entrypoint?: string;
            readonly protoPackageMapping?: {
                readonly [x: string]: string;
            };
        };
    };
    readonly imports?: {
        readonly [x: string]: string;
    };
    readonly sink?: {
        readonly type: string;
        readonly module: string;
        readonly config: any;
    };
}>;
export type Manifest = Schema.Schema.To<typeof ManifestSchema>;
export declare function parseManifestJson(input: unknown): Manifest;
//# sourceMappingURL=manifest-schema.d.ts.map