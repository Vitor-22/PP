const { Router } = require('express');
const router = Router();

const { 
    listUsers,
    storeUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')

router.get('/users', listUsers);
router.post('/user/create', storeUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;    