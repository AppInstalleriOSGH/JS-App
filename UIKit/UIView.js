// MARK: UIView
function UIView_class_alloc() {
    return arbCall(objc_msgSendAddr, objc_getClass("UIView"), sel_registerName("alloc"));
}

function UIView_class_animateWithDuration_delay_options_animations_completion_(arg1, arg2, arg3, arg4, arg5) {
    advanced_arbCall(objc_msgSendAddr, {x0: objc_getClass("UIView"), x1: sel_registerName("animateWithDuration:delay:options:animations:completion:"), x2: arg3, x3: arg4, x4: arg5, d0: arg1, d1: arg2})
}

function UIView_instance_initWithFrame_(self, arg1 = {}) {
    let rect = {
        x: 0, y: 0, width: 0, height: 0,
        ...arg1
    };
    return advanced_arbCall(objc_msgSendAddr, {x0: self, x1: sel_registerName("initWithFrame:"), d0: rect.x, d1: rect.y, d2: rect.width, d3: rect.height}).x0;
}

function UIView_instance_setBackgroundColor_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setBackgroundColor:"), arg1);
}

function UIView_instance_frame(self) {
    let ret = advanced_arbCall(objc_msgSendAddr, {x0: self, x1: sel_registerName("frame")});
    return {x: ret.d0, y: ret.d1, width: ret.d2, height: ret.d3};
}

function UIView_instance_bounds(self) {
    let ret = advanced_arbCall(objc_msgSendAddr, {x0: self, x1: sel_registerName("bounds")});
    return {x: ret.d0, y: ret.d1, width: ret.d2, height: ret.d3};
}

function UIView_instance_addSubview_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("addSubview:"), arg1);
}

function UIView_instance_setCenter_(self, arg1 = {}) {
    let point = {
        x: 0, y: 0,
        ...arg1
    };
    advanced_arbCall(objc_msgSendAddr, {x0: self, x1: sel_registerName("setCenter:"), d0: point.x, d1: point.y});
}

function UIView_instance_setTranslatesAutoresizingMaskIntoConstraints_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setTranslatesAutoresizingMaskIntoConstraints:"), arg1);
}

function UIView_instance_centerXAnchor(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("centerXAnchor"));
}

function UIView_instance_centerYAnchor(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("centerYAnchor"));
}

function UIView_instance_setFrame_(self, arg1 = {}) {
    let rect = {
        x: 0, y: 0, width: 0, height: 0,
        ...arg1
    };
    return advanced_arbCall(objc_msgSendAddr, {x0: self, x1: sel_registerName("setFrame:"), d0: rect.x, d1: rect.y, d2: rect.width, d3: rect.height}).x0;
}
