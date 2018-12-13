const constants = require("../constants");

module.exports = function insertNamespace(node, t, state) {
  const namespaceProperty = node.properties.filter(property =>
    t.isIdentifier(property.key, { name: constants.NAMESPACE_KEY })
  )[0];
  const value = t.stringLiteral(state.file.opts.basename);
  if (!namespaceProperty) {
    node.properties.unshift(
      t.objectProperty(t.identifier(constants.NAMESPACE_KEY), value)
    );
    return;
  }

  if (t.isStringLiteral(namespaceProperty.value, { value: "" })) {
    namespaceProperty.value = value;
    return;
  }
};
