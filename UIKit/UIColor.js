// MARK: UIColor
function UIColor_class_greenColor() {
    return arbCall(objc_msgSendAddr, objc_getClass("UIColor"), sel_registerName("greenColor"));
}

function UIColor_class_labelColor() {
    return arbCall(objc_msgSendAddr, objc_getClass("UIColor"), sel_registerName("labelColor"));
}

function UIColor_class_colorWithRed_green_blue_alpha_(red, green, blue, alpha) {
    return advanced_arbCall(objc_msgSendAddr, {x0: objc_getClass("UIColor"), x1: sel_registerName("colorWithRed:green:blue:alpha:"), d0: red, d1: green, d2: blue, d3: alpha}).x0;
}
