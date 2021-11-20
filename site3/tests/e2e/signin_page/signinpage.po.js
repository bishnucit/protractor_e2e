var SignInpage = function(){
    this.emailInput = element(by.css('[ng-reflect-name="email"]'));
    this.passInput = element(by.css('[ng-reflect-name="password"]'));
    this.signinButton = element(by.buttonText('Sign in'));
    this.needaccountLink = element(by.linkText('Need an account?'));
};
module.exports = SignInpage;
