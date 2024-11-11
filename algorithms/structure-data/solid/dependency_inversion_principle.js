console.log('dependency_inversion_principle',)

{
    console.log('ПЛОХО',)

    /*
        TodoList зависит напрямую от класса ниже DB
     */

    class DB {
        save(items) {
            console.log('save',)
        }
    }

    class MongoDB extends DB {
        //... придется переписывать Todolist
    }

    class TodoList {
        items = [1, 2, 3]
        db = new DB()

        saveToDb() {
            this.db.save(this.items)
        }
    }

    console.log('ПЛОХО закончилось',)
}

{
    console.log('Хорошо',)

    class DB {
        save(items) {
            console.log('saved DB', items)
        }
    }

    class MongoDB extends DB {
        //... придется переписывать Todolist
        save(items) {
            console.log('saved MongoDB', items)
        }
    }

    class TodoList {
        items = [1, 2, 3]
        db

        constructor(db) {
            this.db = db
        }

        saveToDb() {
            this.db.save(this.items)
        }
    }

    const todo = new TodoList(new DB())
    const todo2 = new TodoList(new MongoDB())
    todo.saveToDb()
    todo2.saveToDb()
}