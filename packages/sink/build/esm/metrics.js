import { Metric } from "effect";
export const HeadBlockNumber = /*#__PURE__*/Metric.gauge("substreams_sink_head_block_number", {
  description: "The current block number"
});
export const HeadBlockTime = /*#__PURE__*/Metric.gauge("substreams_sink_head_block_time", {
  description: "The current block time in seconds"
});
export const HeadBlockTimeDrift = /*#__PURE__*/Metric.gauge("substreams_sink_head_block_time_drift", {
  description: "The current head block time drift in seconds"
});
export const MessageSizeBytes = /*#__PURE__*/Metric.counter("substreams_sink_message_size_bytes", {
  description: "The number of total bytes of messages received from the Substreams backend"
});
export const DataMessageCount = /*#__PURE__*/Metric.counter("substreams_sink_data_message", {
  description: "The number of data messages received"
});
export const DataMessageSizeBytes = /*#__PURE__*/Metric.counter("substreams_sink_data_message_size_bytes", {
  description: "The total size of in bytes of all data messages received"
});
export const UndoMessageCount = /*#__PURE__*/Metric.counter("substreams_sink_undo_message", {
  description: "The number of block undo messages received"
});
export const UndoMessageSizeBytes = /*#__PURE__*/Metric.counter("substreams_sink_undo_message_size_bytes", {
  description: "The total size of in bytes of all undo messages received"
});
export const ProgressMessageCount = /*#__PURE__*/Metric.counter("substreams_sink_progress_message", {
  description: "The number of block progress messages received"
});
export const ProgressMessageSizeBytes = /*#__PURE__*/Metric.counter("substreams_sink_progress_message_size_bytes", {
  description: "The total size of in bytes of all progress messages received"
});
export const ProgressMessageLastBlock = /*#__PURE__*/Metric.gauge("substreams_sink_progress_message_last_block", {
  description: "Latest progress reported processed range end block for each stage (not necessarily contiguous)"
});
export const ProgressMessageRunningJobs = /*#__PURE__*/Metric.gauge("substreams_sink_progress_message_running_jobs", {
  description: "Latest reported number of active jobs for each stage"
});
export const ProgressMessageLastContiguousBlock = /*#__PURE__*/Metric.gauge("substreams_sink_progress_message_last_contiguous_block", {
  description: "Latest progress reported processed end block for the first completed (contiguous) range"
});
export const ProgressMessageTotalProcessedBlocks = /*#__PURE__*/Metric.gauge("substreams_sink_progress_message_total_processed_blocks", {
  description: "Latest progress reported total processed blocks (including cached blocks from previous runs)"
});
export const UnknownMessageCount = /*#__PURE__*/Metric.counter("substreams_sink_unknown_message", {
  description: "The number of unknown messages received"
});
export const UnknownMessageSizeBytes = /*#__PURE__*/Metric.counter("substreams_sink_unknown_message_size_bytes", {
  description: "The total size of in bytes of all unknown messages received"
});
export const SubstreamsErrorCount = /*#__PURE__*/Metric.counter("substreams_sink_error", {
  description: "The error count we encountered when interacting with Substreams for which we had to restart the connection loop"
});
//# sourceMappingURL=metrics.js.map