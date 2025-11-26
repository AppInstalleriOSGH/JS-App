// MARK: NSLayoutConstraint
function NSLayoutConstraint_class_activateConstraints_(arg1) {
    arbCall(objc_msgSendAddr, objc_getClass("NSLayoutConstraint"), sel_registerName("activateConstraints:"), arg1);
}
