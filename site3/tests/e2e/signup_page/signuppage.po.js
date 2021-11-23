var SignUppage = function(){
    this.conduitLink = element(by.partialLinkText('conduit'));
    this.homeLink = element(by.partialLinkText('Home'));
    this.signinLink = element(by.partialLinkText('Sign in'));
    this.signupLink = element(by.partialLinkText('Sign up'));
    this.usernameInput = element(by.css('[ng-reflect-name="username"]'));
    this.emailInput = element(by.css('[ng-reflect-name="email"]'));
    this.passInput = element(by.css('[ng-reflect-name="password"]'));
    this.signupButton = element(by.buttonText('Sign up'));
    this.needaccountLink = element(by.linkText('Have an account?'));

};

module.exports = SignUppage;
