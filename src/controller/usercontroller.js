
import userService from '../service/userService'

let handleLogin = async (req, res) => {
    let email = await req.body.email;
    let password = await req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errcode: 1,
            message: 'type'
        })
    }
    let data = await userService.handleUserLogin(email, password);
    console.log(data)
    return res.status(200).json({
        data
    })
}
module.exports = {
    handleLogin,
}