// MARK: UIButton
function UIButton_class_buttonWithType_(arg1) {
    return arbCall(objc_msgSendAddr, objc_getClass("UIButton"), sel_registerName("buttonWithType:"), arg1);
}

function UIButton_instance_setTitle_forState_(self, arg1, arg2) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setTitle:forState:"), arg1, arg2);
}

function UIButton_instance_setTitleColor_forState_(self, arg1, arg2) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setTitleColor:forState:"), arg1, arg2);
}
