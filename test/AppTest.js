const assert = require('chai').assert
const app = require('../app')


describe('App',function(){
    it('response',function(){
        assert.notEqual(app(),403)
    })
})