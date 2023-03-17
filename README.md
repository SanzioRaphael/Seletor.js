# Selector.js
A biblioteca Selector.js é uma biblioteca simples em JavaScript que permite selecionar elementos do DOM usando seletores de classe e ID, bem como adicionar eventos a esses elementos selecionados.

<h3>Selecionando elementos</h3>
<p>Para selecionar elementos usando Selector.js, você pode usar a função $() e passar um seletor de classe ou ID como argumento:</p>

<small>
// Seleciona todos os elementos com a classe "my-class"
$(".my-class");

// Seleciona o elemento com o ID "my-element"
$("#my-element");
</small>

Adicionando eventos
Para adicionar eventos aos elementos selecionados, você pode usar o método .on() e passar o tipo de evento (como "click" ou "mouseover") e uma função de retorno de chamada como argumentos:
<div style="background:rgba(0,0,0,0.1);">
// Adiciona um evento de clique a todos os elementos com a classe "my-class"
$(".my-class").on("click", function() {
  console.log("Clicado na classe 'my-class'!");
});

// Adiciona um evento de clique ao elemento com o ID "my-element"
$("#my-element").on("click", function() {
  console.log("Clicado no elemento com ID 'my-element'!");
});
</div>

Exemplo completo
Aqui está um exemplo completo que usa Selector.js para selecionar elementos e adicionar eventos a eles:
<div style="background:rgba(0,0,0,0.1);">
// Seleciona todos os elementos com a classe "my-class" e adiciona um evento de clique a eles
$(".my-class").on("click", function() {
  console.log("Clicado na classe 'my-class'!");
});

// Seleciona o elemento com o ID "my-element" e adiciona um evento de clique a ele
$("#my-element").on("click", function() {
  console.log("Clicado no elemento com ID 'my-element'!");
});
</div>

