module.exports = { 
    'tags' : ['testcase9'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://kaspi.kz/') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .click('#headerRegionConfirm__ConfirmButton') 
    .click('#footerSocials > div > a.footerSocials__item.footerSocials__item--insta')
    .assert.title('Kaspi.kz – Магазин, Платежи, Мой Банк, Переводы, Red, Бонусы, Гид') 
    .click('#footerSocials > div > a.footerSocials__item.footerSocials__item--vk') 
    .click('#footerSocials > div > a.footerSocials__item.footerSocials__item--fb') 
    .pause(1000) 
    .end(); 
    } 
    };

    

    