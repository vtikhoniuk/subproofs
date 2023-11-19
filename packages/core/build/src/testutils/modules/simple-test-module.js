import { Module } from "@substreams/core/proto";
export const SIMPLE_TEST_MODULES = [/*#__PURE__*/new Module({
  name: "A",
  initialBlock: 0n,
  kind: {
    case: "kindMap",
    value: {}
  }
}), /*#__PURE__*/new Module({
  name: "B",
  initialBlock: 0n,
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "map",
      value: {
        moduleName: "A"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "C",
  initialBlock: 0n,
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "map",
      value: {
        moduleName: "A"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "D",
  initialBlock: 0n,
  kind: {
    case: "kindMap",
    value: {}
  },
  inputs: [{
    input: {
      case: "store",
      value: {
        moduleName: "B"
      }
    }
  }, {
    input: {
      case: "store",
      value: {
        moduleName: "C"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "E",
  initialBlock: 0n,
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "store",
      value: {
        moduleName: "B"
      }
    }
  }, {
    input: {
      case: "map",
      value: {
        moduleName: "D"
      }
    }
  }, {
    input: {
      case: "map",
      value: {
        moduleName: "X"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "F",
  initialBlock: 0n,
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "map",
      value: {
        moduleName: "D"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "X",
  kind: {
    case: "kindMap",
    value: {}
  }
})];
//# sourceMappingURL=simple-test-module.js.map