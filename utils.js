// MARK: Utilities
function UTF8String(string) {
    let cString = NSString_instance_UTF8String(string);
    if (cString == 0) return;
    return cStringToString(cString);
}

function NSString(string) {
    let cString = stringToCString(string);
    if (cString == 0) return;
    let nsString = NSString_class_stringWithCString_(cString);
    free(cString);
    return nsString;
}

function NSArray(jsArr) {
    let buffer = new ArrayBuffer(jsArr.length * 8);
    let arr = new BigUint64Array(buffer);
    for (let i = 0; i < jsArr.length; i++) arr[i] = BigInt(jsArr[i]);
    let bytes = arrayBufferToBytes(buffer);
    if (bytes == 0) return 0;
    return NSArray_instance_initWithObjects_count_(NSArray_class_alloc(), bytes, jsArr.length);;
}

function getObjectDescription(object) {
    return UTF8String(NSObject_instance_description(object))
}

function log_object(label, object) {
    log(`${label}: 0x${object.toString(16)} ${getObjectDescription(object)}`);
}

function getRegisters(view) {
    return {
        x0: view.getBigUint64(8, true),
        x1: view.getBigUint64(16, true),
        x2: view.getBigUint64(24, true),
        x3: view.getBigUint64(32, true),
        x4: view.getBigUint64(40, true),
        x5: view.getBigUint64(48, true),
        x6: view.getBigUint64(56, true),
        x7: view.getBigUint64(64, true),
        
        d0: view.getFloat64(72, true),
        d1: view.getFloat64(80, true),
        d2: view.getFloat64(88, true),
        d3: view.getFloat64(96, true),
        d4: view.getFloat64(104, true),
        d5: view.getFloat64(112, true),
        d6: view.getFloat64(120, true),
        d7: view.getFloat64(128, true),
    };
}

function setRegisters(view, regs = {}) {
    view.setBigUint64(8, BigInt(regs.x0), true);
    view.setBigUint64(16, BigInt(regs.x1), true);
    view.setBigUint64(24, BigInt(regs.x2), true);
    view.setBigUint64(32, BigInt(regs.x3), true);
    view.setBigUint64(40, BigInt(regs.x4), true);
    view.setBigUint64(48, BigInt(regs.x5), true);
    view.setBigUint64(56, BigInt(regs.x6), true);
    view.setBigUint64(64, BigInt(regs.x7), true);
    
    view.setFloat64(72, regs.d0, true);
    view.setFloat64(80, regs.d1, true);
    view.setFloat64(88, regs.d2, true);
    view.setFloat64(96, regs.d3, true);
    view.setFloat64(104, regs.d4, true);
    view.setFloat64(112, regs.d5, true);
    view.setFloat64(120, regs.d6, true);
    view.setFloat64(128, regs.d7, true);
}

function prepareRegisters(context = {}) {
    return {
        x0: 0n, x1: 0n, x2: 0n, x3: 0n, x4: 0n, x5: 0n, x6: 0n, x7: 0n,
        d0: 0,  d1: 0,  d2: 0,  d3: 0,  d4: 0,  d5: 0,  d6: 0,  d7: 0,
        ...context
    };
}

// MARK: blocks
function genericBlockHandler(buffer, targetFunction) {
    let view = new DataView(buffer);
    setRegisters(view, prepareRegisters(targetFunction(getRegisters(view))));
}

function makeBlock(targetFunction) {
    return makeBlock_internal(genericBlockHandler, targetFunction);
}
