// MARK: NSArray
function NSArray_class_alloc() {
    return arbCall(objc_msgSendAddr, objc_getClass("NSArray"), sel_registerName("alloc"));
}

function NSArray_instance_initWithObjects_count_(self, arg1, arg2) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("initWithObjects:count:"), arg1, arg2);
}
