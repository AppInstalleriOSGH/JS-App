// MARK: UIAction
function UIAction_class_actionWithHandler_(arg1) {
    return arbCall(objc_msgSendAddr, objc_getClass("UIAction"), sel_registerName("actionWithHandler:"), arg1);
}
