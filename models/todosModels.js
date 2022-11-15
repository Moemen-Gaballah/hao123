const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

const todoSchema = mongoose.Schema({
    title: String,
    isCompleted: {
        type: Boolean,
        default:false
    },
    timestamp: Number
});

const Todo = mongoose.model('todo', todoSchema);

// get All Todos
exports.getAllTodos = () => {
    return new Promise((resolve, reject) => {
       mongoose.connect(DB_URL).then(() => {
           return Todo.find({})
       }).then(todos => {
           mongoose.disconnect();
           resolve(todos);
       }).catch(err => {
           mongoose.disconnect();
           reject(err);
       })
    });
}

// store Todo
exports.addNewTodo = (title) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            let todo = new Todo({
               'title': title,
               'isCompleted': false,
               'timestamp': Date.now()
           });

            return todo.save();
        }).then(() => {
            mongoose.disconnect();
            resolve({

            });
        }).catch(err => {
            mongoose.disconnect();
            reject(err)
        })
    });
}

// update Todo
exports.updateTodo = (id) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {

            return Todo.findOne({_id: id})
            // return CartItem.updateOne({_id: id}, newData)
        }).then((item) => {
            console.log(item);

            let newData = {
                'title': item.title,
                'isCompleted': !item.isCompleted,
                'timestamp': item.timestamp
            }
            return Todo.updateOne({_id: id}, newData)
        }).then(() => {
            mongoose.disconnect();
            resolve({
            });
        }).catch(err => {
            mongoose.disconnect();
            reject(err)
        })
    });
}

