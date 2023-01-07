
import CRUDservice from '../service/CRUDservice'
let homepage = async (req, res) => {
    try {
        return res.render('homeview.ejs');
    } catch (error) {
        console.log(error)
    }
}


let homecrud = async (req, res) => {
    try {
        return res.render('crud.ejs')
    } catch (error) { console.log(error) }
}
let createCus = async (req, res) => {
    await CRUDservice.postCus(req.body);
    return res.redirect('/read');
}

let homeRead = async (req, res) => {
    let data = await CRUDservice.getAllcus();
    return res.render('read.ejs', {
        dataTable: data
    })
}

let editUser = async (req, res) => {
    let UserId = req.query.id;
    let UserData = await CRUDservice.getUserbyId(UserId);
    return res.render('editUser.ejs', { olduser: UserData })
}

let updateUser = async (req, res) => {
    let dooo = await CRUDservice.update(req.body);
    return res.redirect('/read')
}

let deleteUser = async (req, res) => {
    await CRUDservice.deleteUserbyId(req.query.id);
    return res.redirect('/read')
}

module.exports = {
    homepage, homecrud, createCus, homeRead, editUser, updateUser, deleteUser
}