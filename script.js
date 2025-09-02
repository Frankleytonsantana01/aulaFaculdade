function responder(){
    const input = document.getElementById("pergunta");
    
    
   

    const pergunta = input.value.trim();
    if(pergunta === "") return;

    mensagens.innerHTML += `<p><b>Você:</b> ${pergunta}</p>`;

    let resposta = "Desculpe, não entendi";

    if(pergunta.toLocaleLowerCase().includes("horario")){
      resposta = "Nosso horário de atendimento é de segunda a sexta, das 8h às 18h.";  
    }
    else if(pergunta.toLocaleLowerCase().includes("preco")){
    resposta = "Nossos preços variam conforme o produto. Por favor, visite nossa página de produtos para mais detalhes.";
    }
    else if(pergunta.toLocaleLowerCase().includes("curso")){
    resposta = "Oferecemos cursos de programação, design e marketing digital. Qual deles você gostaria de saber mais?";
    }

    mensagens.innerHTML += `<p><b>Sebastiao:</b> ${resposta}</p>`;
   input.value = "";
   mensagens.scrollTop = mensagens.scrollHeight; //rolagem automatica


}

const mensagens = document.getElementById("mensagens");
 input.addEventListener("keydown", function(event){      
        if(event.key === "Enter"){
            responder();
            event.preventDefault(); //evita quebra de linha
        }

    })
