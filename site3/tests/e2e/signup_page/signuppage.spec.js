var SignUppage = require('./signuppage.po.js');

describe("Sign up page tests", function(){
    browser.ignoreSynchronization = true;
    var today = new Date().getTime();
    var EC = protractor.ExpectedConditions;
    var signUppage = new SignUppage();

    beforeAll(function(){
        browser.get('http://localhost:4200/register');
    });

    it("Verify all elements of the page", function(){
        browser.wait(EC.presenceOf(signUppage.emailInput), 5000);
        expect(signUppage.conduitLink.isDisplayed());
        expect(signUppage.homeLink.isDisplayed());
        expect(signUppage.signinLink.isDisplayed());
        expect(signUppage.signupLink.isDisplayed());
        expect(signUppage.usernameInput.isDisplayed());
        expect(signUppage.emailInput.isDisplayed());
        expect(signUppage.passInput.isDisplayed());
        expect(signUppage.signinButton.isDisplayed());
        expect(signUppage.needaccountLink.isDisplayed());
        browser.sleep(2000);
    });

});
