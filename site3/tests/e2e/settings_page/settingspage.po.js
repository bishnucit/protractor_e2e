var Settingspage = function(){
    this.imageURLTextBox = element(by.css('[ng-reflect-name="image"]'));
    this.usernameTextBox = element(by.css('[ng-reflect-name="username"]'));
    this.bioTextBox = element(by.css('[ng-reflect-name="bio"]'));
    this.emailTextBox = element(by.css('[ng-reflect-name="email"]'));
    this.passTextBox = element(by.css('[ng-reflect-name="password"]'));
    this.updateButton = element(by.css('.btn-primary.pull-xs-right'));
    this.logoutButton = element(by.css('.btn-outline-danger'));
};
module.exports = Settingspage;
