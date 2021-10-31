describe("Registration page test cases", function(){

    it("TC001 - No Input Registration", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a')).click();
        browser.sleep(2000);
        element(by.buttonText('Register'))
        .click()
        .then(function() {
            var error1 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/div/div'));
            var error2 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/div/div'));
            var error2 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/div/div'));
            var error2 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/div/div'));
            expect(error1.isDisplayed());
            expect(error2.isDisplayed());
            expect(error3.isDisplayed());
            expect(error4.isDisplayed());
        })
        .catch(function(err){
            console.error("Register button element is not found! ", err);
        });
    });

    it("TC002 - Partial Input Registration", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a')).click();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input'))
        .clear()
        .sendKeys('fname-test');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input'))
        .clear()
        .sendKeys('lname-test');
        element(by.buttonText('Register'))
        .click()
        .then(function() {
            //var error1 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/div/div'));
            //var error2 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/div/div'));
            var error2 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/div/div'));
            var error2 = element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/div/div'));
            //expect(error1.isDisplayed());
            //expect(error2.isDisplayed());
            expect(error3.isDisplayed());
            expect(error4.isDisplayed());
        })
        .catch(function(err){
            console.error("Register button element is not found! ", err);
        });
    });

    it("TC003 - Correct Input Registration and Register", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a')).click();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input'))
        .clear()
        .sendKeys('fname-tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input'))
        .clear()
        .sendKeys('lname-tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input'))
        .clear()
        .sendKeys('tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input'))
        .clear()
        .sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.buttonText('Register'))
        .click()
        .then(function() {
            var success_message = element(by.css('.alert.alert-success'))
            expect(success_message.isDisplayed());
        })
        .catch(function(err){
            console.error("Register button element is not found! ", err);
        });
    });

    it("TC004 - Correct Input Registration and Cancel", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a')).click();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input'))
        .clear()
        .sendKeys('fname-tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input'))
        .clear()
        .sendKeys('lname-tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input'))
        .clear()
        .sendKeys('tester1');
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input'))
        .clear()
        .sendKeys('P@ssW0rD123');
        browser.sleep(2000);
        element(by.css('.btn.btn-link'))
        .click()
        .then(function() {
            var login_page = element(by.buttonText('Login'))
            expect(login_page.isDisplayed());
        })
        .catch(function(err){
            console.error("Cancel link element is not found! ", err);
        });
    });

});
