// MARK: UIWindow
function UIWindow_class_alloc() {
    return arbCall(objc_msgSendAddr, objc_getClass("UIWindow"), sel_registerName("alloc"));
}

function UIWindow_instance_rootViewController(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("rootViewController"));
}

function UIWindow_instance_setRootViewController_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setRootViewController:"), arg1);
}

function UIWindow_instance_makeKeyAndVisible(self) {
    arbCall(objc_msgSendAddr, self, sel_registerName("makeKeyAndVisible"));
}
