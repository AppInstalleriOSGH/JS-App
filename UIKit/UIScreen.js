// MARK: UIScreen
function UIScreen_class_mainScreen() {
    return arbCall(objc_msgSendAddr, objc_getClass("UIScreen"), sel_registerName("mainScreen"));
}
