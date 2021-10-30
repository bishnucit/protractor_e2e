//Download the application from https://github.com/cornflourblue/angular-8-registration-login-example
//Extract and npm install and then npm start to start the application


describe("verifyElements", function(){
    it("titleCheck", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        expect(browser.getTitle()).toBe('Angular 8 User Registration and Login Example');
    });

    it("login page check", function(){
        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/h2'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("ng component - h2 element is not found! ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("username input box element is not found! ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("password input box element is not found! ", err);
        });

        element(by.buttonText('Login'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("Login button element is not found! ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("Register link  element is not found! ", err);
        });

    });

    it("register page check", function(){

        browser.get('http://localhost:8080/login');
        browser.manage().window().maximize();
        browser.sleep(2000);
        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/a')).click();
        browser.sleep(2000);

        element(by.buttonText('Register'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("Page not loaded after click ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("firstname input box element is not found! ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("lastname input box element is not found! ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("username input box element is not found! ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("password input box element is not found! ", err);
        });

        element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[5]/a'))
        .isDisplayed()
        .then(function (isVisible) {
            if (isVisible) {
                expect(isVisible).toEqual(true);
            } else {
                expect(isVisible).toEqual(false);
            }
        })
        .catch(function(err){
            console.error("Register link  element is not found! ", err);
        });

    });
});
