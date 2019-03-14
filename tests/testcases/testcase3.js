module.exports = { 
    'tags' : ['testcase3'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/login/?redir=%3Fl%3Drussian&redir_ssl=1') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .setValue('#input_username', 'bigsamsa3') 
    .setValue('#input_password', '123123') 
    .click('#login_btn_signin > button > span') 
    .pause(1000) 
    .end(); 
    } 
    };
    