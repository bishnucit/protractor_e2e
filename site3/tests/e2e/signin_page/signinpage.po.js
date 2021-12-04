var username, SignInpage = function(){
    this.conduitLink = element(by.partialLinkText('conduit'));
    this.homeLink = element(by.partialLinkText('Home'));
    this.signinLink = element(by.partialLinkText('Sign in'));
    this.signupLink = element(by.partialLinkText('Sign up'));
    this.emailInput = element(by.css('[ng-reflect-name="email"]'));
    this.passInput = element(by.css('[ng-reflect-name="password"]'));
    this.signinButton = element(by.buttonText('Sign in'));
    this.needaccountLink = element(by.linkText('Need an account?'));
    this.errorMessage = element(by.css(".error-messages"));
    this.username = browser.params.username;
};
module.exports = SignInpage;
