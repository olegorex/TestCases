module.exports = { 
    'tags' : ['testcase8'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://kaspi.kz/') // Go to a url 
    .waitForElementVisible('body', 10000) // wait till page loads 
    .click('#headerRegionConfirm__ConfirmButton') 
    .assert.visible('#headerRegionSelection > span') 
    .pause(1000) 
    .end(); 
    } 
    };