// MARK: UIAlertAction
function UIAlertAction_class_actionWithTitle_style_handler_(arg1, arg2, arg3) {
    return arbCall(objc_msgSendAddr, objc_getClass("UIAlertAction"), sel_registerName("actionWithTitle:style:handler:"), arg1, arg2, arg3);
}
