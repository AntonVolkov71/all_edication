{
    console.log(' interface_segregation_principle',)

    console.log('ПЛОХО \n',)

    class Weapon {
        strike() {
        }

        shoot() {
        }
    }

    class Rifle extends Weapon {
        strike() {
            console.log('strike Rifle',)
        }

        shoot() {
            console.log('shoot Rifle',)
        }
    }

    class Sword extends Weapon {
        strike() {
            console.log('strike Rifle',)
        }

        // ЭТОТ МЕТОД НЕ ДОЛЖЕН БЫТЬ, как блять меч стреляет
        shoot() {
            console.log('shoot Rifle',)
        }
    }

    console.log('ПЛОХО ЗАКОНИЛОСЬ \n',)
}

{
    console.log('Хорошенько \n',)

    class Weapon {
        // выбираем только методы и свойства которые будут нужны
        // если пихать все то будет лишнее для наследников
        cost;

        clean() {
        }
    }

    class Rifle extends Weapon {
        shoot() {
            console.log('shoot Rifle',)
            this.clean()
        }
    }

    class Sword extends Weapon {
        strike() {
            console.log('strike Rifle',)
        }
    }
}