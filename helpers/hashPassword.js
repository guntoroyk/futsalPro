module.exports = (inputPassword) => {
    const bcrypt = require('bcryptjs');
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(inputPassword, salt);

    return hash;
}