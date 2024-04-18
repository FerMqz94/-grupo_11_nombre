module.exports = {
    register: require("../authentication/register.controller"),
    login: require("../authentication/login.controller"),
    processLogin: require("./processLogin.controller"),
    processRegister: require("./processRegister.controller"),
    logout: require("./logout.controller")   
}