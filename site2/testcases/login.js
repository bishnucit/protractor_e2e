describe("logins the registered user", function(){

    it("TC001 - Login with the registered user", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input')).clear().sendKeys('tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input')).clear().sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Login'))
        .click()
        .then(function() {
            var loggedin_message = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/p'))
            expect(loggedin_message.isDisplayed());
        })
        .catch(function(err){
            console.error("Register button element is not found! ", err);
        });

        element(by.xpath('/html/body/app/nav/div/a[2]'))
        .click()
        .then(function() {
            var login_page = element(by.buttonText('Login'))
            expect(login_page.isDisplayed());
        })
        .catch(function(err){
            console.error("Logout element is not found! ", err);
        });
    });

    it("TC002 - Logout the user and relogin the same user", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input')).clear().sendKeys('tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input')).clear().sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Login'))
        .click()
        .then(function() {
            var loggedin_message = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/p'))
            expect(loggedin_message.isDisplayed());
        })
        .catch(function(err){
            console.error("Register button element is not found! ", err);
        });

        element(by.xpath('/html/body/app/nav/div/a[2]'))
        .click()
        .then(function() {
            var login_page = element(by.buttonText('Login'))
            expect(login_page.isDisplayed());
        })
        .catch(function(err){
            console.error("Logout element is not found! ", err);
        });
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input')).clear().sendKeys('tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input')).clear().sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Login'))
        .click()
        .then(function() {
            var loggedin_message = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/p'))
            expect(loggedin_message.isDisplayed());
        })
        .catch(function(err){
            console.error("Register button element is not found! ", err);
        });

    });
});
