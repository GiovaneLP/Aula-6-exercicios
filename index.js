/*Exercício 1 interpretação 
1 - Ele vai imprimir no console 10 Depois ele imprimir 10 5.

let a = 10
let b = 10

console.log(b)

b = 5

console.log(a, b)

2 - Ele vai imprimir no console 10 10 10.

let a = 10
let b = 20
let c = a

b = c
a = b

console.log(a, b, c)

3 - let horas = prompt("Quantas horas você trabalha por dia?")
let recebe = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${horas/recebe} por hora`)

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${t/p} por hora`)

Exercício 2 escrita

1 - 

a) let nome

b) let idade

c)console.log(typeof nome, typeof idade)

d)O console imprimiu undefined, porque as variáveis ainda não possuem valor ou tipo.

e)nome = prompt("Qual é seu nome")
idade = prompt("Qual é sua idade")

f)console.log(typeof nome, typeof idade)
Agora, os tipos são string , por que o prompt sempre retorna o tipo string.

g)console.log("Olá", nome, "você tem", idade, "anos")

2 - let trabalho = prompt("Você trabalha")
let estuda = prompt("Você estuda")
let bullying = prompt("Você já sofreu bullying")

console.log("Você trabalha?", trabalho)
console.log("Você estuda?", estuda)
console.log("Você já sofreu bullying?", bullying)

3 - 

*/

let a = prompt("O novo valor de a é")
let b = prompt("O novo valor de b é")
let c = b
b = a
a = c

console.log("Novo valor de a é", a, "novo valor de b é", b)
