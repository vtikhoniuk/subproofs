import { Metric } from "effect";
export declare const HeadBlockNumber: Metric.Metric.Gauge<number>;
export declare const HeadBlockTime: Metric.Metric.Gauge<number>;
export declare const HeadBlockTimeDrift: Metric.Metric.Gauge<number>;
export declare const MessageSizeBytes: Metric.Metric.Counter<number>;
export declare const DataMessageCount: Metric.Metric.Counter<number>;
export declare const DataMessageSizeBytes: Metric.Metric.Counter<number>;
export declare const UndoMessageCount: Metric.Metric.Counter<number>;
export declare const UndoMessageSizeBytes: Metric.Metric.Counter<number>;
export declare const ProgressMessageCount: Metric.Metric.Counter<number>;
export declare const ProgressMessageSizeBytes: Metric.Metric.Counter<number>;
export declare const ProgressMessageLastBlock: Metric.Metric.Gauge<number>;
export declare const ProgressMessageRunningJobs: Metric.Metric.Gauge<number>;
export declare const ProgressMessageLastContiguousBlock: Metric.Metric.Gauge<number>;
export declare const ProgressMessageTotalProcessedBlocks: Metric.Metric.Gauge<number>;
export declare const UnknownMessageCount: Metric.Metric.Counter<number>;
export declare const UnknownMessageSizeBytes: Metric.Metric.Counter<number>;
export declare const SubstreamsErrorCount: Metric.Metric.Counter<number>;
//# sourceMappingURL=metrics.d.ts.map