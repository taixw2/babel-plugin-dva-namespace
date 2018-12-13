const utils = require("./util");
const compileNamespace = require("./compile/namespace");

function compileDvaModel(node, t, state) {
  if (!utils.isVaildDvaModel(node, t)) {
    return;
  }
  compileNamespace(node, t, state);
  // 运行时可以处理的事情无需在 babel 中处理
}

module.exports = function({ types: t }) {
  return {
    visitor: {
      ExportDefaultDeclaration: {
        enter(path, state) {
          const reference = utils.getObjectExpressionReference(path, t);
          compileDvaModel(reference, t, state);
        },
      },
    },
  };
};
