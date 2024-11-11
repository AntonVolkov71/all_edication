console.log('Liskov_Substitution_Principle',)

class User {
    #role = 'user'

    getRole() {
        return this.#role
    }
}

class Admin extends User {
    #role = ['user', 'admin']

    // если изменили role, тогда переписываем getRole
    getRole() {
        return this.#role.join(', ')
    }
}

function logRole(user) {
    console.log('Role:', user.getRole().toUpperCase())
}

logRole(new User())
logRole(new Admin())