///1 - crie uma função que exiba uma mensagem no console
function welcome(){
    console.log("Olá, seja bem vindo!")
}
welcome()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function showName(name){
    console.log(`Meu nome é ${name}`)
}
showName("Mariana")
//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console
function showPerson(nome, number, music){
    console.log(`Meu nome é ${nome}, tenho ${number} anos e gosto de ${music}`)
}
showPerson(`Mariana`, `18`, `sertanejo`)
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function showMovie(movie, musica){
    console.log(`A Gloria Groove dublou ${movie} e canta ${musica}`)
}
showMovie(`Arlo, o menino Jacaré`,`Bonekinha`)
//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)
function triple(num){
    return num*3
}
console.log(triple(3))