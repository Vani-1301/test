import bcrypt from 'bcryptjs';
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);


let postCus = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashfrompost = await hashpassword(data.password);
            await db.Users.create({
                email: data.email,
                password: hashfrompost,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === 1 ? true : false,
                roleId: data.roleId,
            })
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}
let hashpassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllcus = () => {
    return new Promise((resolve, reject) => {
        try {
            let user = db.Users.findAll({
                raw: true,
            })
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

let getUserbyId = (UserId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let User = await db.Users.findOne({
                where: {
                    id: UserId
                },
                raw: true
            })
            resolve(User)
        } catch (error) {
            reject(error)
        }
    })
}
let update = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userrr = await db.Users.findOne({
                where: {
                    id: data.id
                }
            });
            userrr.firstName = data.firstName
            userrr.lastName = data.lastName
            userrr.address = data.address
            userrr.phonenumber = data.phonenumber
            await userrr.save();
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUserbyId = (Userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let uuu = await db.Users.findOne({
                where: {
                    id: Userid
                }
            });
            await uuu.destroy();
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { postCus, getAllcus, getUserbyId, update, deleteUserbyId };