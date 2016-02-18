/**
 * Created by kongmac on 16/2/18.
 */
var loaderUtils = require("loader-utils");

module.exports = function(content) {
    this.cacheable && this.cacheable();
    if(!this.emitFile) throw new Error("emitFile is required from module system");
    var query = loaderUtils.parseQuery(this.query);
    var url = loaderUtils.interpolateName(this, query.name || "[hash].[ext]", {
        context: query.context || this.options.context,
        content: content,
        regExp: query.regExp
    });
    return "module.exports = __webpack_public_path__ + " + JSON.stringify(url) + ";";
}
module.exports.raw = true;