// Arbitrary calls
function advanced_arbCall(func, context = {}) {
    let buffer = new ArrayBuffer(136);
    let view = new DataView(buffer);
    view.setBigUint64(0, BigInt(func), true);
    setRegisters(view, prepareRegisters(context));
    advanced_arbCall_internal(buffer);
    return getRegisters(view);
}

function arbCall(func, ...args) {
    let buffer = new ArrayBuffer(136);
    let view = new DataView(buffer);
    view.setBigUint64(0, BigInt(func), true);
    if (args.length > 0) view.setBigUint64(8, BigInt(args[0]), true);
    if (args.length > 1) view.setBigUint64(16, BigInt(args[1]), true);
    if (args.length > 2) view.setBigUint64(24, BigInt(args[2]), true);
    if (args.length > 3) view.setBigUint64(32, BigInt(args[3]), true);
    if (args.length > 4) view.setBigUint64(40, BigInt(args[4]), true);
    if (args.length > 5) view.setBigUint64(48, BigInt(args[5]), true);
    if (args.length > 6) view.setBigUint64(56, BigInt(args[6]), true);
    if (args.length > 7) view.setBigUint64(64, BigInt(args[7]), true);
    advanced_arbCall_internal(buffer);
    return view.getBigUint64(8, true);
}
