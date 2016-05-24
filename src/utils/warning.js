export default function(format){
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    if (format === undefined) {
        throw new Error('`warning(format, ...args)` requires a warning ' + 'message argument');
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
        });
    if (typeof console !== 'undefined') {
        console.warn(message);
    }
    try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
    } catch (x) {}
};
