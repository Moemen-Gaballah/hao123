const router = require('express').Router();
const bodyParser = require("body-parser");

const todoController = require('../controllers/todoController')

router.get('/', todoController.getList);
router.get('/add', todoController.getAddTodo);
router.post('/add', bodyParser.urlencoded({ extended: true}), todoController.postAddTodo);

router.post('/update', bodyParser.urlencoded({ extended: true}), todoController.updateTodo);

module.exports = router;