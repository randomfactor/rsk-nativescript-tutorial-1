var frameModule = require("ui/frame");
function buttonForwardTap(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("page1");
}
exports.buttonForwardTap = buttonForwardTap;
