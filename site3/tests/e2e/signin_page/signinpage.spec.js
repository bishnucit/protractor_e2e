var SignInpage = require('./signinpage.po.js');
var SignUppage = require('../signup_page/signuppage.po');
var Homepage = require('../home_page/homepage.po.js');
var SettingsPage = require('../settings_page/settingspage.po.js');

describe("Sign in page tests", function(){
    browser.ignoreSynchronization = true;
    var EC = protractor.ExpectedConditions;
    var signInpage = new SignInpage();
    var signUppage = new SignUppage();
    var homepage = new Homepage();
    var settingspage = new SettingsPage();
    //calling global variable declared in config file
    var username = browser.params.username;
    var email = username+'@mailinator.com';
    var password = email;
    var registerURL = 'http://localhost:4200/register';
    var homeURL = 'http://localhost:4200/';
    var loginURL = 'http://localhost:4200/login';
    var settingsURL = 'http://localhost:4200/settings';


    beforeEach(function(){
        browser.get('http://localhost:4200/login');
    });

    it("Verify all elements of the page", function(){
        //verify all elements of sign in page
        browser.wait(EC.presenceOf(signInpage.emailInput), 5000);
        expect(signInpage.emailInput.isDisplayed());
        expect(signInpage.passInput.isDisplayed());
        expect(signInpage.signinButton.isDisplayed());
        expect(signInpage.needaccountLink.isDisplayed());
        browser.sleep(2000);
    });

    it("Redirection verification", function(){
        //click on each link on page and verify the URLs
        signInpage.conduitLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(homepage.sidebarLink), 5000);
            expect(browser.getCurrentUrl()).toEqual(homeURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.wait(EC.presenceOf(signInpage.emailInput), 5000);
        browser.sleep(2000);
        signInpage.signinLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(signInpage.signinButton), 5000);
            expect(browser.getCurrentUrl()).toEqual(loginURL);
        });
        browser.sleep(2000);
        signInpage.signupLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(signUppage.signupButton), 5000);
            expect(browser.getCurrentUrl()).toEqual(registerURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.sleep(2000);
        signInpage.needaccountLink.click()
        .then(function(){
            browser.sleep(2000);
            browser.wait(EC.presenceOf(signUppage.signupButton), 5000);
            expect(browser.getCurrentUrl()).toEqual(registerURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.sleep(2000);
    });


    it("sign in with a registered user", function(){
        //sign in with a registered user and then logout
        browser.wait(EC.presenceOf(signInpage.emailInput), 5000);
        signInpage.emailInput.sendKeys(email);
        signInpage.passInput.sendKeys(password);
        signInpage.signinButton.click()
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


    it("sign in with a invalid user", function(){
        //sign in with a invalid user
        browser.wait(EC.presenceOf(signInpage.emailInput), 5000);
        signInpage.emailInput.sendKeys("email");
        signInpage.passInput.sendKeys("password");
        signInpage.signinButton.click()
        .then(function(){
            browser.wait(EC.presenceOf(signInpage.errorMessage), 5000);
            expect(signInpage.errorMessage.isDisplayed());
            browser.sleep(4000);
        });
    });
});
