const readline = require(`readline`);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log(`Welcome to the password validator tool!`)
reader.question(`Please provide a password to validate: `, function(input){
    password = input.length
    
    if (password < 10) {
        console.log(`Password is too short! Please make it at least 10 characters long`)
    } else {
        console.log(`Sucess! Your password is strong!`)
    }
    reader.close()
});