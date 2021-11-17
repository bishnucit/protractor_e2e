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
        //element(by.partialLinkText('Sign up')).click();
        element(by.css('a[href="/register"]')).click();
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

    it("TC003 - Login with the registered user and create a new article", function(){
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
        //add new article
        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[2]/a')).click();
        expect(element(by.buttonText('Publish Article')).isDisplayed());

        element(by.xpath('/html/body/app-root/app-editor-page/div/div/div/div/form/fieldset/fieldset[1]/input')).sendKeys('article_title_' + today);
        element(by.xpath('/html/body/app-root/app-editor-page/div/div/div/div/form/fieldset/fieldset[2]/input')).sendKeys('test1');
        element(by.xpath('/html/body/app-root/app-editor-page/div/div/div/div/form/fieldset/fieldset[3]/textarea')).sendKeys('article_description_sample_text');
        element(by.xpath('/html/body/app-root/app-editor-page/div/div/div/div/form/fieldset/fieldset[4]/input')).sendKeys('#protractor');
        browser.sleep(1000);
        element(by.xpath('/html/body/app-root/app-editor-page/div/div/div/div/form/fieldset/fieldset[4]/input')).click();
        browser.sleep(1000);
        element(by.xpath('/html/body/app-root/app-editor-page/div/div/div/div/form/fieldset/fieldset[4]/input')).sendKeys(protractor.Key.ENTER);


        browser.sleep(1000);
        element(by.buttonText('Publish Article')).click();
        browser.sleep(5000);
        expect(element(by.css('.btn-outline-danger')).isDisplayed());

        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(3000);
        element(by.css('.btn.btn-outline-danger')).click();
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).isDisplayed());
    });

    it("TC004 - Login with the registered user and update your settings", function(){
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
        //update profile
        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(2000);
        expect(element(by.buttonText('Update Settings')).isDisplayed());

        element(by.xpath('/html/body/app-root/app-settings-page/div/div/div/div/form/fieldset/fieldset[2]/input')).clear().sendKeys('username1_' + today);
        element(by.xpath('/html/body/app-root/app-settings-page/div/div/div/div/form/fieldset/fieldset[3]/textarea')).clear().sendKeys('my bio here');
        //element(by.xpath('/html/body/app-root/app-settings-page/div/div/div/div/form/fieldset/fieldset[5]/input')).clear().sendKeys('Passw0rd123');
        browser.sleep(2000);
        expect(element(by.buttonText('Update Settings')).click());
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[2]/a')).isDisplayed());
        element(by.css('a[href="/"')).click();
        browser.sleep(2000);

        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(3000);
        element(by.css('.btn.btn-outline-danger')).click();
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).isDisplayed());

    });

    it("TC005 - Verify the created article is visible under global feed and click on profile to check the profile", function(){
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

        var username = "/profile/username1_"+today;
        element(by.xpath('/html/body/app-root/app-home-page/div/div/div/div[1]/div/ul/li[2]/a')).click();
        browser.sleep(3000);
        expect(element(by.css('a[href="'+ username +'"]')).isDisplayed());
        element(by.css('a[href="'+ username +'"]')).click();
        browser.sleep(2000);

        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(3000);
        element(by.css('.btn.btn-outline-danger')).click();
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).isDisplayed());
    });

    it("TC006 - Verify the created article is visible under global feed and click on article and comment on it and then delete it", function(){
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

        var username = "/profile/username1_"+today;
        //var article = "/article/article_title_"+today+"-258";
        element(by.xpath('/html/body/app-root/app-home-page/div/div/div/div[1]/div/ul/li[2]/a')).click();
        browser.sleep(5000);
        expect(element(by.css('a[href="'+ username +'"]')).isDisplayed());
        element(by.css('.preview-link')).click();
        browser.sleep(5000);
        element(by.xpath('/html/body/app-root/app-article-page/div/div[2]/div[3]/div/div/form/fieldset/div[1]/textarea')).sendKeys('comment1');
        element(by.css('.btn-primary')).click();
        browser.sleep(3000);
        expect(element(by.css('.ion-trash-a')).isDisplayed());
        element(by.css('.mod-options>.ion-trash-a')).click();
        browser.sleep(2000);
        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(3000);
        element(by.css('.btn.btn-outline-danger')).click();
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).isDisplayed());
    });

    it("TC007 - Verify the created article is visible under global feed and click on article and delete it", function(){
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

        var username = "/profile/username1_"+today;
        //var article = "/article/article_title_"+today+"-258";
        element(by.xpath('/html/body/app-root/app-home-page/div/div/div/div[1]/div/ul/li[2]/a')).click();
        browser.sleep(5000);
        expect(element(by.css('a[href="'+ username +'"]')).isDisplayed());
        element(by.css('.preview-link')).click();
        browser.sleep(5000);
        element(by.css('.btn-outline-danger')).click();
        browser.sleep(3000);

        element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).click();
        browser.sleep(3000);
        element(by.css('.btn.btn-outline-danger')).click();
        browser.sleep(2000);
        expect(element(by.xpath('/html/body/app-root/app-layout-header/nav/div/ul/li[3]/a')).isDisplayed());
    });
});
