// MARK: UILabel
function UILabel_class_alloc() {
    return arbCall(objc_msgSendAddr, objc_getClass("UILabel"), sel_registerName("alloc"));
}

function UILabel_instance_setText_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setText:"), arg1);
}

function UILabel_instance_setTextAlignment_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setTextAlignment:"), arg1);
}

function UILabel_instance_setTextColor_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setTextColor:"), arg1);
}
