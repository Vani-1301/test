import db from '../models/index'
import bcrypt from 'bcryptjs';

let checkEmail = (Useremail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findUser = await db.Users.findOne({
                where: { email: Useremail }
            })
            if (findUser) { resolve(true) } else { resolve(false) }
        } catch (error) {
            reject(error)
        }
    })
}


let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkEmail(email);
            if (isExist) {
                let user = await db.Users.findOne({
                    where: { email: email },
                    raw: true
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errcode = 0,
                            userData.message = 'ok',
                            delete user.password,
                            userData.user = user
                    }
                    else {
                        userData.errcode = 2,
                            userData.message = 'Error password'
                    }
                }
            } else {
                userData.errcode = 1,
                    userData.message = 'Error email'
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    handleUserLogin
}