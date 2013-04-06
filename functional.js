(function (f) {
    'use strict'

    function nil() { return nil }

    function select_head(x, xs) { return x }
    function select_tail(x, xs) { return xs }

    function head(a) { return a(select_head) }
    function tail(a) { return a(select_tail) }

    function prepend(x, xs) {
        return function (select) {
            return select(x, xs)
        }
    }

    function is_nil(a) { return a === nil }

    function inc(x) { return ++x }
    function dec(x) { return --x }

    function length(a) {
        if (is_nil(a)) return 0
        return inc(length(tail(a)))
    }

    function map(fn, a) {
        if (is_nil(a)) return nil
        return prepend(fn(head(a)), map(fn, tail(a)))
    }

    function to_str(a) {
        if (is_nil(a)) return 'nil'
        return head(a).toString() + ' -> ' + to_str(tail(a))
    }

    f.nil = nil
    f.head = head
    f.tail = tail
    f.prepend = prepend
    f.is_nil = is_nil
    f.length = length
    f.map = map
    f.to_str = to_str
})(this)
