var assert = require('assert');

describe('homepage', function() {
    it('should have the right title', function () {
        browser.url('http://localhost:3000');
        var title = browser.getTitle();
        assert.equal(title, 'Sort-and-Peace');
    });
});
