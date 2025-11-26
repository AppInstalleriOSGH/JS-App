// MARK: NSLayoutAnchor
function NSLayoutAnchor_instance_constraintEqualToAnchor_(self, arg1) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("constraintEqualToAnchor:"), arg1);
}

function NSLayoutAnchor_instance_constraintEqualToAnchor_constant_(self, arg1, arg2) {
    return advanced_arbCall(objc_msgSendAddr, {x0: self, x1: sel_registerName("constraintEqualToAnchor:constant:"), x2: arg1, d0: arg2}).x0;
}
