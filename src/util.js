const constants = require('./constants')

exports.isVaildDvaModel = function(node, types) {
  if (!node) {
    return false;
  }
  if (!node.properties || !node.properties.length) {
    return false;
  }
  return node.properties.every(
    property =>
    types.isIdentifier(property.key) && constants.tables.indexOf(property.key.name) != -1
  );
};

exports.getObjectExpressionReference = function(path, types) {
  if (types.isIdentifier(path.node.declaration)) {
    const exportVariableName = path.node.declaration.name;
    const bindings = path.scope.bindings;
    const reference = bindings[exportVariableName].path.node.init;
    if (types.isObjectExpression(reference)) {
      return reference;
    }
    return null;
  }
  if (types.isObjectExpression(path.node.declaration)) {
    return path.node.declaration;
  }
};
