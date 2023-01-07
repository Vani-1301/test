import express from 'express';
import home from '../controller/home'
import usercontroller from '../controller/usercontroller'
let router = express.Router();

let startWebRoute = (app) => {
    router.get('/', home.homepage);
    router.get('/crud', home.homecrud);
    router.post('/create', home.createCus);
    router.get('/read', home.homeRead);
    router.get('/editU', home.editUser);
    router.post('/updateDone', home.updateUser);
    router.get('/deleteU', home.deleteUser);
    router.post('/api/login', usercontroller.handleLogin);
    return app.use('/', router)
}

module.exports = startWebRoute;