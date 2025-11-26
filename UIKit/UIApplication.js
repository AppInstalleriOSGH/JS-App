// MARK: UIApplication
function UIApplication_class_sharedApplication() {
    return arbCall(objc_msgSendAddr, objc_getClass("UIApplication"), sel_registerName("sharedApplication"));
}

function UIApplication_instance_keyWindow(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("keyWindow"));
}
