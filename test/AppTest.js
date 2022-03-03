const assert = require('chai').assert
const register = require('../app').all
const login = require('../app')._router


describe('App',function(){
    it('response',function(){
        assert.notEqual(register,403)
    })
})
