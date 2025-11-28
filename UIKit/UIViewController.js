// MARK: UIViewController
function UIViewController_class_new() {
    return arbCall(objc_msgSendAddr, objc_getClass("UIViewController"), sel_registerName("new"));
}

function UIViewController_instance_view(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("view"));
}

function UIViewController_instance_presentViewController_animated_completion_(self, arg1, arg2, arg3) {
    arbCall(objc_msgSendAddr, self, sel_registerName("presentViewController:animated:completion:"), arg1, arg2, arg3);
}

function UIViewController_instance_dismissViewControllerAnimated_completion_(self, arg1, arg2) {
    arbCall(objc_msgSendAddr, self, sel_registerName("dismissViewControllerAnimated:completion:"), arg1, arg2);
}

function UIViewController_instance_presentingViewController(self) {
    return arbCall(objc_msgSendAddr, self, sel_registerName("presentingViewController"));
}
