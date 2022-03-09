const debug = require("debug")("typing-app:middleCollectionPopulate");
const User = require("../../../database/models/User");

const collectionUserSnippetsController = async (req, res, next) => {
  try {
    debug(req.query.id);
    const ourUser = await User.findById(req.query.id);
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
