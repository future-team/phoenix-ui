/**
 * Created by mac on 16/11/28.
 */

let Tool = {
    closest: (el, selector)=>{
        var matchesFn;

        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        });

        var parent;

        // traverse parents
        while (el) {
            if (el[matchesFn](selector)) return el;

            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) return parent;

            el = parent;
        }

        return null;
    },

    setPhoenixPrefix: (val)=>{
        return 'ph-' + val;
    }
}

export default Tool;