import { Module } from "@substreams/core/proto";
export const STANDARD_TEST_MODULES = [/*#__PURE__*/new Module({
  name: "As",
  initialBlock: 0n,
  kind: {
    case: "kindStore",
    value: {}
  }
}), /*#__PURE__*/new Module({
  name: "Am",
  initialBlock: 0n,
  kind: {
    case: "kindMap",
    value: {}
  }
}), /*#__PURE__*/new Module({
  name: "B",
  initialBlock: 10n,
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "map",
      value: {
        moduleName: "Am"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "C",
  initialBlock: 0n,
  kind: {
    case: "kindMap",
    value: {}
  },
  inputs: [{
    input: {
      case: "store",
      value: {
        moduleName: "As"
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
  }]
}), /*#__PURE__*/new Module({
  name: "E",
  initialBlock: 5n,
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "map",
      value: {
        moduleName: "C"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "F",
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "store",
      value: {
        moduleName: "C"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "G",
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
  }, {
    input: {
      case: "store",
      value: {
        moduleName: "E"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "K",
  kind: {
    case: "kindStore",
    value: {}
  },
  inputs: [{
    input: {
      case: "store",
      value: {
        moduleName: "G"
      }
    }
  }]
}), /*#__PURE__*/new Module({
  name: "H",
  kind: {
    case: "kindMap",
    value: {}
  }
}), /*#__PURE__*/new Module({
  name: "SimpleStore",
  kind: {
    case: "kindStore",
    value: {}
  }
}), /*#__PURE__*/new Module({
  name: "MapDependsOnStore",
  kind: {
    case: "kindMap",
    value: {}
  },
  inputs: [{
    input: {
      case: "store",
      value: {
        moduleName: "SimpleStore"
      }
    }
  }]
})];
//# sourceMappingURL=standard-test-module.js.map