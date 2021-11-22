var SignUppage = require('./signuppage.po.js');
var Homepage = require('../home_page/homepage.po.js');
var SignInpage = require('../signin_page/signinpage.po.js');

describe("Sign up page tests", function(){
    browser.ignoreSynchronization = true;
    var today = new Date().getTime();
    var EC = protractor.ExpectedConditions;
    var signUppage = new SignUppage();
    var homepage = new Homepage();
    var signInpage = new SignInpage();
    var registerURL = 'http://localhost:4200/register';
    var homeURL = 'http://localhost:4200/';
    var loginURL = 'http://localhost:4200/login';

    beforeAll(function(){
        browser.get(registerURL);
    });

    it("Verify all elements of the page", function(){
        //verify all elements are visible
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

    it("Redirection verification", function(){
        //click on each link on page and verify the URLs
        signUppage.conduitLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(homepage.sidebarLink), 5000);
            expect(browser.getCurrentUrl()).toEqual(homeURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.wait(EC.presenceOf(signUppage.emailInput), 5000);
        browser.sleep(2000);
        signUppage.signinLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(signInpage.signinButton), 5000);
            expect(browser.getCurrentUrl()).toEqual(loginURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.sleep(2000);
        signUppage.signupLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(signUppage.emailInput), 5000);
            expect(browser.getCurrentUrl()).toEqual(registerURL);
        });
        browser.sleep(2000);
        signUppage.needaccountLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(signInpage.signinButton), 5000);
            expect(browser.getCurrentUrl()).toEqual(loginURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.sleep(2000);
    })

});
