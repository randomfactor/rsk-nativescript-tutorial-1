var frameModule = require("ui/frame");
function buttonForwardTap(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("page2");
}
exports.buttonForwardTap = buttonForwardTap;
function buttonBackTap(args) {
    var topmost = frameModule.topmost();
    topmost.goBack();
}
exports.buttonBackTap = buttonBackTap;