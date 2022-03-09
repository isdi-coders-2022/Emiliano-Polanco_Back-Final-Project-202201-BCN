const User = require("../../../database/models/User");

const loadRandomSnippetController =
  (programingLanguageModel) => async (req, res) => {
    const randomJsSnippet = await programingLanguageModel.aggregate([
      {
        $sample: { size: 1 },
      },
    ]);
    res.status(200).json(randomJsSnippet[0]);
  };

const createSnippetController =
  (programingLanguageModel) => async (req, res, next) => {
    try {
      const snippetCreation = await programingLanguageModel.create(req.body);
      res.status(201).json(snippetCreation);
    } catch (error) {
      error.status = 400;
      error.message = "You did a bad request, snippet not created";
      next(error);
    }
  };

const editSnippetController =
  (programingLanguageModel) => async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedSnippet = await programingLanguageModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedSnippet);
    } catch (error) {
      error.status = 404;
      next(error);
    }
  };

const deleteSnippetFromUserCollection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    error.status = 404;
    next(error);
  }
};

module.exports = {
  loadRandomSnippetController,
  createSnippetController,
  editSnippetController,
  deleteSnippetFromUserCollection,
};
