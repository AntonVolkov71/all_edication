console.log('Object create \n', )

const User = {
    init(email, pass){
        console.log('init', )
        this.email = email
        this.pass = pass
    },

    log(){
        console.log('Log' )
    }
}

const user = Object.create(User)

user.log()
user.init('email@.ru', '343')

console.log('user', user)

console.log('user proto', user.__proto__ === User)

const admin = Object.create(user)

console.log('admin', admin.email)
admin.log()