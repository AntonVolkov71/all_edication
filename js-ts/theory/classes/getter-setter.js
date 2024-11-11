'use strict'

console.log('Setter Getter \n',)

const task = {
    taskId: 'Task1',

    dueTo: new Date('2023/01/01'),

    get isOverDue() {
        return this.dueTo < new Date()
    },

    set isOverDue(isOverdueTask) {
        if (!isOverdueTask) {
            this.dueTo = new Date()
        }
    }
}

console.log('getter', task.isOverDue)
console.log('setter task.isOverDue = false',)
task.isOverDue = false
console.log('getter', task.dueTo)

console.log('\n Class getter setter \n',)
console.log(' \n Get/Set используется для валидации \n', )

class Task {
    _dueDate
    constructor(title, dueTo) {
        this.title = title
        this.dueTo = dueTo
    }

    get isOverdue() {
        return this.dueTo < new Date()
    }

    set dueDate(date){
        if(date < new Date()){
            return
        }

        this._dueDate = date

    }
}

const taskClass = new Task('task2', new Date('2022/01/01'))
console.log('class getter ', taskClass.isOverdue)
taskClass.dueDate = new Date('2024')
console.log('taskclass',taskClass )


console.log('\n Static methods ', )

Number.MIN_SAFE_INTEGER // статичный метод

Array.from([0,1,2])
new Array()

