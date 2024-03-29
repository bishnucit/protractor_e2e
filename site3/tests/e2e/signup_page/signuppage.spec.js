var SignUppage = require('./signuppage.po.js');
var Homepage = require('../home_page/homepage.po.js');
var SignInpage = require('../signin_page/signinpage.po.js');
var SettingsPage = require('../settings_page/settingspage.po.js');

describe("Sign up page tests", function(){
    browser.ignoreSynchronization = true;
    var EC = protractor.ExpectedConditions;
    var signUppage = new SignUppage();
    var homepage = new Homepage();
    var signInpage = new SignInpage();
    var settingspage = new SettingsPage();
    var registerURL = 'http://localhost:4200/register';
    var homeURL = 'http://localhost:4200/';
    var loginURL = 'http://localhost:4200/login';
    var settingsURL = 'http://localhost:4200/settings';
    //calling global variable declared in config file
    var username = browser.params.username;
    var email = username+'@mailinator.com';
    var password = email;

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
        expect(signUppage.signupButton.isDisplayed());
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
    });

    /* it("Register an invalid user", function(){
        //Register an invalid user
        signUppage.usernameInput.sendKeys("a");
        signUppage.emailInput.sendKeys("a");
        signUppage.passInput.sendKeys("a");
        signUppage.signupButton.click()
        .then(function(){
            browser.wait(EC.presenceOf(signUppage.signupButton), 5000);
            browser.sleep(7000);
            expect(signUppage.errorMessage1.isDisplayed());
            expect(signUppage.errorMessage2.isDisplayed());
        });
    }); */

    it("Register a new user", function(){
        //Register a new user and logout after registered successfully
        signUppage.usernameInput.sendKeys(username);
        signUppage.emailInput.sendKeys(email);
        signUppage.passInput.sendKeys(password);
        signUppage.signupButton.click()
        .then(function(){
            browser.wait(EC.presenceOf(homepage.sidebarLink), 5000);
            expect(browser.getCurrentUrl()).toEqual(homeURL);
        });
        browser.sleep(2000);
        homepage.settingspageLink.click()
        .then(function(){
            expect(browser.getCurrentUrl()).toEqual(settingsURL);
            browser.sleep(2000);
        });

        settingspage.logoutButton.click()
        .then(function(){
            expect(browser.getCurrentUrl()).toEqual(homeURL);
            browser.sleep(2000);
        });
    });

});
