module.exports = { 
    'tags' : ['testcase10'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/') // Go to a url 
    .waitForElementVisible('body', 10000) // wait till page loads 
    .click('#logo_holder > a > img') 
    .click('#genre_tab > span') 
    .assert.visible('#genre_tab > span')
    .click('#software_tab > span') 
    .assert.visible('#software_tab > span')
    .click('#hardware_tab > span') 
    .assert.visible('#hardware_tab > span')
    .click('#foryou_tab > span') 
    .assert.visible('#foryou_tab > span')
    .pause(1000) 
    .end(); 
    } 
    };
    

    

    


    