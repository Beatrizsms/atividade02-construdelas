aluno1= prompt ("Digite o nome do aluno 1")
notasaluno1 = prompt("Digite as notas separados por , ")
notasaluno1 = notasaluno1.split(",")
nota1aluno1= notasaluno1 [0]
nota2aluno1= notasaluno1 [2]
nota3aluno1= notasaluno1 [2]

mediaaluno1 = (parseFloat(nota1aluno1) + parseFloat(nota2aluno1) + parseFloat(nota3aluno1) ) / 3 

aluno2= prompt ("Digite o nome do aluno 2")
notasaluno2 = prompt("Digite as notas separados por , ")
notasaluno2 = notasaluno2.split(",")
nota1aluno2= notasaluno2 [0]
nota2aluno2= notasaluno2 [1]
nota3aluno2= notasaluno2 [2]

mediaaluno2 = (parseFloat(nota1aluno2) + parseFloat(nota2aluno2) + parseFloat(nota3aluno2) ) / 3 

aluno3= prompt ("Digite o nome do aluno 3")
notasaluno3 = prompt ("Digite as notas separados por , ")
notasaluno3 = notasaluno3.split(",")
nota1aluno3= notasaluno3 [0]
nota2aluno3= notasaluno3 [1]
nota3aluno3= notasaluno3 [2]

mediaaluno3 = (parseFloat(nota1aluno3) + parseFloat(nota2aluno3) + parseFloat(nota3aluno3) ) / 3 


aluno4= prompt ("Digite o nome do aluno 4")
notasaluno4 = prompt ("Digite as notas separados por , ")
notasaluno4 = notasaluno4.split(",")
nota1aluno4= notasaluno4 [0]
nota2aluno4= notasaluno4 [1]
nota3aluno4= notasaluno4 [2]

mediaaluno4 = (parseFloat(nota1aluno4) + parseFloat(nota2aluno4) + parseFloat(nota3aluno4) ) / 3 


aluno5= prompt ("Digite o nome do aluno 5 ")
notasaluno5 = prompt ("Digite as notas separados por , ")
notasaluno5 = notasaluno5.split(",")
nota1aluno5= notasaluno5 [0]
nota2aluno5= notasaluno5 [1]
nota3aluno5= notasaluno5 [2]


mediaaluno5 = (parseFloat(nota1aluno5) + parseFloat(nota2aluno5) + parseFloat(nota3aluno5) ) / 3 


if (mediaaluno1 >=5) {
  alert ( aluno1 + " APROVADO" )
}

else { 

  alert ( aluno1 + "REPROVADO" )

}

if (mediaaluno2 >=5) {
  alert ( aluno2 + " APROVADO" )
}

else { 

  alert ( aluno2 + "REPROVADO" )
}

if (mediaaluno3 >=5) {
  alert ( aluno3 + " APROVADO" )
}

else { 

  alert ( aluno3+ "REPROVADO" )

}

if (mediaaluno4 >=5) {
  alert ( aluno4 + " APROVADO" )
}

else { 

  alert ( aluno4 + "REPROVADO" )

}

if (mediaaluno5 >=5) {
  alert ( aluno5 + " APROVADO" )
}

else { 

  alert ( aluno5+ "REPROVADO" )

}


