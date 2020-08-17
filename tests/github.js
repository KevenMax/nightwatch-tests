describe('Github Profile', function () {

  it('should search for NodeJS on github', function (browser) {
    browser
      .url('https://github.com')
      .waitForElementVisible('body')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'NodeJS')
      .click('a[data-target-type="Search"]')
      .assert.containsText('div.flex-auto h3.mb-1', 'Node.js')
      .end();
  });

  it('should check if the number of KevenMax followers is visible', function (browser) {
    browser
      .url('https://github.com/KevenMax')
      .waitForElementVisible('body')
      .assert.visible('.h-card div a span.text-gray-dark')
      .end();
  });

});