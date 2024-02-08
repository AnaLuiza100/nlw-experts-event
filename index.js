const perguntas = [
    {
      pergunta: "O que é HTML?",
      respostas: [
        "Hypertext Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language"
      ],
      correta: 0
    },
    {
      pergunta: "Qual das seguintes opções é uma linguagem de estilo para páginas da web?",
      respostas: [
        "JavaScript",
        "HTML",
        "CSS"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes não é um framework JavaScript?",
      respostas: [
        "React",
        "Angular",
        "HTML"
      ],
      correta: 2
    },
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Database Object Model"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
      respostas: [
        "Number",
        "Boolean",
        "Stringify"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para chamar uma função em JavaScript?",
      respostas: [
        "callFunction()",
        "runFunction()",
        "invokeFunction()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes é um seletor de classe em CSS?",
      respostas: [
        ".",
        "#",
        "/"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":="
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "push()",
        "removeLast()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes eventos ocorre quando o usuário clica em um elemento HTML?",
      respostas: [
        "onmouseover",
        "onclick",
        "onchange"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  