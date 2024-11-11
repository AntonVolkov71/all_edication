function generatePassword (size){
    let res = ''
    const charset = 'abcdefghiklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890'

    for (let i = 0, n = charset.length; i <size ; ++i) {
        res += charset.charAt(Math.floor(Math.random() * n))
    }
    return res
}

const startGeneratePassword = () => {
    const password = generatePassword(4)

    console.log('password',password, password.length);
}

export default startGeneratePassword
