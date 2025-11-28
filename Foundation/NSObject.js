// MARK: NSObject
function NSObject_instance_description(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("description"));
}

function NSObject_instance_init(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("init"));
}

function NSObject_instance_release(self) {
    arbCall(objc_msgSendAddr, self, sel_registerName("release"));
}
