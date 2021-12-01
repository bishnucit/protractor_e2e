var SignInpage = require('../signin_page/signinpage.po.js');
var SignUppage = require('../signup_page/signuppage.po.js');
var Homepage = require('../home_page/homepage.po.js');
var Articlepage = require('../article_page/articlepage.po.js');
var SettingsPage = require('./settingspage.po.js');

describe("Settings page tests", function(){
    browser.ignoreSynchronization = true;
    var EC = protractor.ExpectedConditions;
    var signInpage = new SignInpage();
    var signUppage = new SignUppage();
    var homepage = new Homepage();
    var settingspage = new SettingsPage();
    var articlepage = new Articlepage();
    //calling global variable declared in config file
    var username = browser.params.username;
    var email = username+'@mailinator.com';
    var password = email;
    var registerURL = 'http://localhost:4200/register';
    var homeURL = 'http://localhost:4200/';
    var loginURL = 'http://localhost:4200/login';
    var settingsURL = 'http://localhost:4200/settings';
    var editorURL = 'http://localhost:4200/editor';


    beforeAll(function(){
        browser.get('http://localhost:4200/login');
        //sign in with existing user
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
    });

    it("Verify all elements of the page", function(){
        //verify all elements of settings page
        browser.wait(EC.presenceOf(settingspage.logoutButton), 5000);
        expect(settingspage.imageURLTextBox.isDisplayed());
        expect(settingspage.usernameTextBox.isDisplayed());
        expect(settingspage.bioTextBox.isDisplayed());
        expect(settingspage.usernameTextBox.isDisplayed());
        expect(settingspage.passTextBox.isDisplayed());
        expect(settingspage.updateButton.isDisplayed());
        expect(settingspage.logoutButton.isDisplayed());
        browser.sleep(2000);
    });

    it("Redirection verification", function(){
        settingspage.conduitLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(homepage.sidebarLink), 5000);
            expect(browser.getCurrentUrl()).toEqual(homeURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.wait(EC.presenceOf(settingspage.logoutButton), 5000);
        browser.sleep(2000);

        settingspage.homeLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(homepage.sidebarLink), 5000);
            expect(browser.getCurrentUrl()).toEqual(homeURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.wait(EC.presenceOf(settingspage.logoutButton), 5000);
        browser.sleep(2000);

        settingspage.newarticleLink.click()
        .then(function(){
            browser.wait(EC.presenceOf(articlepage.publisharticleButton), 5000);
            expect(browser.getCurrentUrl()).toEqual(editorURL);
        })
        .then(()=>(browser.navigate().back()));
        browser.wait(EC.presenceOf(settingspage.logoutButton), 5000);
        browser.sleep(2000);
    });



});
