const SnippetJavaScript = require("../../../database/models/SnippetJavaScript");

const loadRandomJavaScriptSnippetController = async (req, res) => {
  const randomJsSnippet = await SnippetJavaScript.aggregate([
    {
      $sample: { size: 1 },
    },
  ]);
  res.status(200).json(randomJsSnippet[0]);
};

const createJavaScriptSnippetController = async (req, res, next) => {
  try {
    const snippetCreation = await SnippetJavaScript.create(req.body);
    res.status(201).json(snippetCreation);
  } catch (error) {
    error.status = 400;
    error.message = "You did a bad request, JavaScript snippet not created";
    next(error);
  }
};

module.exports = {
  loadRandomJavaScriptSnippetController,
  createJavaScriptSnippetController,
};
