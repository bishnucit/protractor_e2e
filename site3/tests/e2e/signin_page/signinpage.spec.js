var SignInpage = require('./signinpage.po.js');

describe("Sign in page tests", function(){
    browser.ignoreSynchronization = true;
    var today = new Date().getTime();
    var EC = protractor.ExpectedConditions;
    var signInpage = new SignInpage();

    beforeEach(function(){
        browser.get('http://localhost:4200/login');
    });

    it("Verify all elements of the page", function(){
        browser.wait(EC.presenceOf(signInpage.emailInput), 5000);
        expect(signInpage.emailInput.isDisplayed());
        expect(signInpage.passInput.isDisplayed());
        expect(signInpage.signinButton.isDisplayed());
        expect(signInpage.needaccountLink.isDisplayed());
        browser.sleep(2000);
    });

});
