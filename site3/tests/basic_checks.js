//https://www.protractortest.org/#/api?

describe("Verify everything", function(){
    browser.ignoreSynchronization = true;
    var today = new Date().getTime();

    beforeEach(function(){
        browser.get('http://localhost:4200/');
        browser.manage().window().maximize();
        browser.sleep(2000);
    });

    it("TC001 - Register a new user", function(){
        element(by.partialLinkText('Sign up')).click();
        browser.sleep(1000);
        element(by.xpath('/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[1]/input')).sendKeys('tester1' + today);
        element(by.xpath('/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input')).sendKeys('tester1_'+ today + '@mailinator.com');
        element(by.xpath('/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input')).sendKeys('Passw0rd123');
        browser.sleep(1000).then(function(){
            signup_button = element(by.buttonText('Sign up'))
            expect(signup_button.isEnabled());
            signup_button.click();
            browser.sleep(2000);
            expect(element(by.className('user-pic')).isDisplayed());
        });
        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(3000);
        element(by.css('.btn.btn-outline-danger')).click();
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).isDisplayed());
    });

    it("TC002 - Login with the registered user", function(){
        element(by.partialLinkText('Sign in')).click();
        browser.sleep(1000);
        element(by.xpath('/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[2]/input')).sendKeys('tester1_'+ today + '@mailinator.com');
        element(by.xpath('/html/body/app-root/app-auth-page/div/div/div/div/form/fieldset/fieldset[3]/input')).sendKeys('Passw0rd123');
        browser.sleep(1000).then(function(){
            signin_button = element(by.buttonText('Sign in'))
            expect(signin_button.isEnabled());
            signin_button.click();
            browser.sleep(2000);
            expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[2]/a')).isDisplayed());
        });
        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(3000);
        element(by.css('.btn.btn-outline-danger')).click();
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).isDisplayed());
    });
});
