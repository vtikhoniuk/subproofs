"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnknownMessageSizeBytes = exports.UnknownMessageCount = exports.UndoMessageSizeBytes = exports.UndoMessageCount = exports.SubstreamsErrorCount = exports.ProgressMessageTotalProcessedBlocks = exports.ProgressMessageSizeBytes = exports.ProgressMessageRunningJobs = exports.ProgressMessageLastContiguousBlock = exports.ProgressMessageLastBlock = exports.ProgressMessageCount = exports.MessageSizeBytes = exports.HeadBlockTimeDrift = exports.HeadBlockTime = exports.HeadBlockNumber = exports.DataMessageSizeBytes = exports.DataMessageCount = void 0;
var _effect = /*#__PURE__*/require("effect");
const HeadBlockNumber = exports.HeadBlockNumber = /*#__PURE__*/_effect.Metric.gauge("substreams_sink_head_block_number", {
  description: "The current block number"
});
const HeadBlockTime = exports.HeadBlockTime = /*#__PURE__*/_effect.Metric.gauge("substreams_sink_head_block_time", {
  description: "The current block time in seconds"
});
const HeadBlockTimeDrift = exports.HeadBlockTimeDrift = /*#__PURE__*/_effect.Metric.gauge("substreams_sink_head_block_time_drift", {
  description: "The current head block time drift in seconds"
});
const MessageSizeBytes = exports.MessageSizeBytes = /*#__PURE__*/_effect.Metric.counter("substreams_sink_message_size_bytes", {
  description: "The number of total bytes of messages received from the Substreams backend"
});
const DataMessageCount = exports.DataMessageCount = /*#__PURE__*/_effect.Metric.counter("substreams_sink_data_message", {
  description: "The number of data messages received"
});
const DataMessageSizeBytes = exports.DataMessageSizeBytes = /*#__PURE__*/_effect.Metric.counter("substreams_sink_data_message_size_bytes", {
  description: "The total size of in bytes of all data messages received"
});
const UndoMessageCount = exports.UndoMessageCount = /*#__PURE__*/_effect.Metric.counter("substreams_sink_undo_message", {
  description: "The number of block undo messages received"
});
const UndoMessageSizeBytes = exports.UndoMessageSizeBytes = /*#__PURE__*/_effect.Metric.counter("substreams_sink_undo_message_size_bytes", {
  description: "The total size of in bytes of all undo messages received"
});
const ProgressMessageCount = exports.ProgressMessageCount = /*#__PURE__*/_effect.Metric.counter("substreams_sink_progress_message", {
  description: "The number of block progress messages received"
});
const ProgressMessageSizeBytes = exports.ProgressMessageSizeBytes = /*#__PURE__*/_effect.Metric.counter("substreams_sink_progress_message_size_bytes", {
  description: "The total size of in bytes of all progress messages received"
});
const ProgressMessageLastBlock = exports.ProgressMessageLastBlock = /*#__PURE__*/_effect.Metric.gauge("substreams_sink_progress_message_last_block", {
  description: "Latest progress reported processed range end block for each stage (not necessarily contiguous)"
});
const ProgressMessageRunningJobs = exports.ProgressMessageRunningJobs = /*#__PURE__*/_effect.Metric.gauge("substreams_sink_progress_message_running_jobs", {
  description: "Latest reported number of active jobs for each stage"
});
const ProgressMessageLastContiguousBlock = exports.ProgressMessageLastContiguousBlock = /*#__PURE__*/_effect.Metric.gauge("substreams_sink_progress_message_last_contiguous_block", {
  description: "Latest progress reported processed end block for the first completed (contiguous) range"
});
const ProgressMessageTotalProcessedBlocks = exports.ProgressMessageTotalProcessedBlocks = /*#__PURE__*/_effect.Metric.gauge("substreams_sink_progress_message_total_processed_blocks", {
  description: "Latest progress reported total processed blocks (including cached blocks from previous runs)"
});
const UnknownMessageCount = exports.UnknownMessageCount = /*#__PURE__*/_effect.Metric.counter("substreams_sink_unknown_message", {
  description: "The number of unknown messages received"
});
const UnknownMessageSizeBytes = exports.UnknownMessageSizeBytes = /*#__PURE__*/_effect.Metric.counter("substreams_sink_unknown_message_size_bytes", {
  description: "The total size of in bytes of all unknown messages received"
});
const SubstreamsErrorCount = exports.SubstreamsErrorCount = /*#__PURE__*/_effect.Metric.counter("substreams_sink_error", {
  description: "The error count we encountered when interacting with Substreams for which we had to restart the connection loop"
});
//# sourceMappingURL=metrics.js.map