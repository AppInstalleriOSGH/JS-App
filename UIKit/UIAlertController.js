// MARK: UIAlertController
function UIAlertController_class_alertControllerWithTitle_message_preferredStyle_(arg1, arg2, arg3) {
    return arbCall(objc_msgSendAddr, objc_getClass("UIAlertController"), sel_registerName("alertControllerWithTitle:message:preferredStyle:"), arg1, arg2, arg3);
}

function UIAlertController_instance_addAction_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("addAction:"), arg1);
}
