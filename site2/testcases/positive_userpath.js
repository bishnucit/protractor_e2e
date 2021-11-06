describe("created users should display and logout option should be there", function(){

    var today = new Date().getTime();

    it("TC001 - Register a user A", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a')).click();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input'))
        .clear()
        .sendKeys('test_user_A');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input'))
        .clear()
        .sendKeys('test_user_A');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input'))
        .clear()
        .sendKeys('test_user_A_' + today);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input'))
        .clear()
        .sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Register'))
        .click()
        .then(function() {
            var success_message = element(by.css('.alert.alert-success'))
            expect(success_message.isDisplayed());
        });
    });

    it("TC002 - Register a user B", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a')).click();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input'))
        .clear()
        .sendKeys('test_user_B');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input'))
        .clear()
        .sendKeys('test_user_B');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input'))
        .clear()
        .sendKeys('test_user_B_' + today);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input'))
        .clear()
        .sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Register'))
        .click()
        .then(function() {
            var success_message = element(by.css('.alert.alert-success'))
            expect(success_message.isDisplayed());
        });
    });

    it("TC003 - Login user A and Logout", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input')).clear().sendKeys('test_user_A_' + today);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input')).clear().sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Login'))
        .click()
        .then(function() {
            var welcome_message = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/h1'));
            expect(welcome_message.isDisplayed());
            expect(element(by.xpath('/html/body/app/nav/div/a[1]')).isDisplayed()); //home
            expect(element(by.xpath('/html/body/app/nav/div/a[2]')).isDisplayed()); //logout
            expect(element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/ul/li[1]/a')).isDisplayed()); //delete
        });
        browser.sleep(1000);
        element(by.xpath('/html/body/app/nav/div/a[2]'))
        .click()
        .then(function() {
            var login_page = element(by.buttonText('Login'))
            expect(login_page.isDisplayed());
        });
    });

    it("TC004 - Login user B and Logout", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input')).clear().sendKeys('test_user_B_' + today);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input')).clear().sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Login'))
        .click()
        .then(function() {
            var welcome_message = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/h1'));
            expect(welcome_message.isDisplayed());
            expect(element(by.xpath('/html/body/app/nav/div/a[1]')).isDisplayed()); //home
            expect(element(by.xpath('/html/body/app/nav/div/a[2]')).isDisplayed()); //logout
            expect(element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/ul/li[1]/a')).isDisplayed()); //delete
        });
        browser.sleep(1000);
        element(by.xpath('/html/body/app/nav/div/a[2]'))
        .click()
        .then(function() {
            var login_page = element(by.buttonText('Login'))
            expect(login_page.isDisplayed());
        });
    });

});
