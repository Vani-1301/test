'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('cus', [{
            email: 'diablo13012003@gmail.com',
            password: '123456',
            firstName: 'John',
            lastName: 'Doe',
            address: 'Dong Nai',
            gender: 1,
            roleId: 'R',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },




    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('cus', null, {});
    }
};
