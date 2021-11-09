//https://www.protractortest.org/#/api?

describe("Verify everything", function(){
    browser.ignoreSynchronization = true;
    var today = new Date().getTime();

    beforeEach(function(){
        browser.get('http://localhost:4200/');
        browser.manage().window().maximize();
        browser.sleep(2000);

    });

    it("TC001 - Register a user", function(){
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
    });
});
