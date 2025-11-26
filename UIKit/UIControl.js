// MARK: UIControl
function UIControl_instance_addAction_forControlEvents_(self, arg1, arg2) {
    arbCall(objc_msgSendAddr, self, sel_registerName("addAction:forControlEvents:"), arg1, arg2);
}
