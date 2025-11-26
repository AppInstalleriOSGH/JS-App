importJS("Foundation/Foundation")
importJS("UIKit/UIKit")

// MARK: AppDelegate
function AppDelegate_instance_setWindow_(self, arg1) {
    arbCall(objc_msgSendAddr, self, sel_registerName("setWindow:"), arg1);
}

function centerView(subview, superview, spacing = 0) {
    UIView_instance_setTranslatesAutoresizingMaskIntoConstraints_(subview, 0);
    let XAnchor = UIView_instance_centerXAnchor(subview);
    let YAnchor = UIView_instance_centerYAnchor(subview);
//    log_object("XAnchor", XAnchor);
//    log_object("YAnchor", YAnchor);
    let superXAnchor = UIView_instance_centerXAnchor(superview);
    let superYAnchor = UIView_instance_centerYAnchor(superview);
//    log_object("superXAnchor", superXAnchor);
//    log_object("superYAnchor", superYAnchor);
    let constraints = NSArray([NSLayoutAnchor_instance_constraintEqualToAnchor_(XAnchor, superXAnchor), NSLayoutAnchor_instance_constraintEqualToAnchor_constant_(YAnchor, superYAnchor, spacing)]);
    NSLayoutConstraint_class_activateConstraints_(constraints);
//    log_object("constraints", constraints);
}

function UIColor(red, green, blue, alpha = 255) {
    return UIColor_class_colorWithRed_green_blue_alpha_(red / 255, green / 255, blue / 255, alpha / 255);
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return UIColor(red, green, blue);
}

function main(self) {
    log_object("self", self);
    
    let mainScreenBounds = UIView_instance_bounds(UIScreen_class_mainScreen());
    log(`width: ${mainScreenBounds.width.toFixed(2)}`);
    log(`height: ${mainScreenBounds.height.toFixed(2)}`);
    
    let rootViewController = NSObject_instance_init(UIViewController_class_new());
    log_object("rootViewController", rootViewController);
    
    let view = UIViewController_instance_view(rootViewController);
    log_object("view", view);
    
    let nsString = NSString("Hello, World!");
    log_object("nsString", nsString);
    
    let label = UIView_instance_initWithFrame_(UILabel_class_alloc(), CGRectMake(0.0, 0.0, 150.0, 40.0));
    UILabel_instance_setText_(label, nsString);
    UILabel_instance_setTextAlignment_(label, 1);
    UIView_instance_addSubview_(view, label);
    centerView(label, view);
    log_object("label", label);
    
    let animationBlock = makeBlock(function() {
        log(`Hello from animationBlock!!`);
        UIView_instance_setBackgroundColor_(view, randomColor());
    });
    log_object("animationBlock", animationBlock);

    let buttonBlock = makeBlock(function() {
        let doneAction = UIAlertAction_class_actionWithTitle_style_handler_(NSString("Done"), 1, 0);
        log_object("doneAction", doneAction);

        let alert = UIAlertController_class_alertControllerWithTitle_message_preferredStyle_(NSString("TITLE"), NSString("MESSAGE"), 1);
        UIAlertController_instance_addAction_(alert, doneAction);
        log_object("alert", alert);
        
        UIViewController_instance_presentViewController_animated_completion_(rootViewController, alert, 1, 0);
        
        //UIView_class_animateWithDuration_delay_options_animations_completion_(5, 0, 0 << 16, animationBlock, 0);
    });
    log_object("buttonBlock", buttonBlock);
    
    let action = UIAction_class_actionWithHandler_(buttonBlock);
    log_object("action", action);

    let button = UIButton_class_buttonWithType_(1);
    UIView_instance_setFrame_(button, CGRectMake(0.0, 0.0, 85.0, 40.0));
    UIButton_instance_setTitle_forState_(button, NSString("Tap Me"), 0);
    UIButton_instance_setTitleColor_forState_(button, UIColor_class_labelColor(), 0);
    UIControl_instance_addAction_forControlEvents_(button, action, 1 << 6);
    UIView_instance_addSubview_(view, button);
    centerView(button, view, 20);
    log_object("button", button);
    
    //let color = randomColor();
    let color = UIColor(71, 94, 173);
    log_object("color", color);
    
    UIView_instance_setBackgroundColor_(view, color);
    
    let window = UIView_instance_initWithFrame_(UIWindow_class_alloc(), mainScreenBounds);
    log_object("window", window);

    UIWindow_instance_setRootViewController_(window, rootViewController);
    UIWindow_instance_makeKeyAndVisible(window);
    AppDelegate_instance_setWindow_(self, window);
}
