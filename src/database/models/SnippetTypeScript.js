const { model } = require("mongoose");
const SnippetSchema = require("./SnippetSchema");

const SnippetTypeSript = model(
  "SnippetTypeScript",
  SnippetSchema,
  "SnippetsJavaScript"
);

module.exports = SnippetTypeSript;
