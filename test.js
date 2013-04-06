var assert = require('assert'),
    f = require('./functional')

describe('functional-js', function () {
    'use strict'

    // 'a' -> 'b' -> nil
    var a = f.prepend('a', f.prepend('b', f.nil))

    it('should provide working prepend()', function () {
        assert(f.head(a) === 'a')
        assert(f.head(f.tail(a)) === 'b')
        assert(f.head(f.tail(f.tail(a))) === f.nil)
    })

    it('should provide is_nil() predicate', function () {
        assert(f.is_nil(a) === false)
        assert(f.is_nil(f.tail(a)) === false)
        assert(f.is_nil(f.tail(f.tail(a))) === true)
    })

    it('should provide length() function', function () {
        assert(f.length(a) === 2)
        assert(f.length(f.tail(a)) === 1)
        assert(f.length(f.tail(f.tail(a))) === 0)
    })

    it('should provide map() functional form', function () {
        function uc(str) { return str.toUpperCase() }

        var b = f.map(uc, a)

        assert(f.head(b) === 'A')
        assert(f.head(f.tail(b)) === 'B')
        assert(f.head(f.tail(f.tail(b))) === f.nil)
    })

    it('should provide to_str() function', function () {
        assert(f.to_str(a) === 'a -> b -> nil')
        assert(f.to_str(f.tail(a)) === 'b -> nil')
        assert(f.to_str(f.tail(f.tail(a))) === 'nil')
    })
})
