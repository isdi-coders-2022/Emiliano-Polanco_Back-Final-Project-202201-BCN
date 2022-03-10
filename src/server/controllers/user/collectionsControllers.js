const User = require("../../../database/models/User");

const collectionUserSnippetsController = async (req, res, next) => {
  try {
    const ourUser = await User.findById(req.userId);
    let userSnippetCollection = [];
    const { snippetsJavaScript } = await ourUser.populate("snippetsJavaScript");
    const { snippetsTypeScript } = await ourUser.populate("snippetsTypeScript");
    userSnippetCollection = [...snippetsJavaScript, ...snippetsTypeScript];
    res.status(200).json(userSnippetCollection);
  } catch (error) {
    error.status = 404;
    next(error);
  }
};

module.exports = { collectionUserSnippetsController };
