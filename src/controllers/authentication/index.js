module.exports = {
    register: require("../authentication/register.controller"),
    login: require("../authentication/login.controller"),
    processLogin: require("./processLogin.controller"),
    processRegister: require("./processRegister.controller"),
    logout: require("./logout.controller"),
    userDelete: require('./userDelete.controller'),
    loginAndRegisterGoogle: require('./loginAndRegisterGoogle.controller'),
    loginAndRegisterTwitter: require("./loginAndRegisterTwitter.controller"),
    loginAndRegisterFacebook: require('./loginAndRegisterFacebook.controller')
}