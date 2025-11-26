// MARK: NSString
function NSString_class_stringWithCString_(arg1) {
    return arbCall(objc_msgSendAddr, objc_getClass("NSString"), sel_registerName("stringWithCString:"), arg1);
}

function NSString_instance_UTF8String(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("UTF8String"));
}
