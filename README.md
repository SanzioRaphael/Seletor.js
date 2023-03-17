# Selector.js
A biblioteca Selector.js é uma biblioteca simples em JavaScript que permite selecionar elementos do DOM usando seletores de classe e ID, bem como adicionar eventos a esses elementos selecionados.

<h3>Selecionando elementos</h3>
<p>Para selecionar elementos usando Selector.js, você pode usar a função $() e passar um seletor de classe ou ID como argumento:</p>

<h5>// Seleciona todos os elementos com a classe "my-class"</h5>
<p>$(".my-class");</p>

<h5>// Seleciona o elemento com o ID "my-element"</h5>
<p>$("#my-element");</p>


<h3>Adicionando eventos</h3>
<p>Para adicionar eventos aos elementos selecionados, você pode usar o método .on() e passar o tipo de evento (como "click" ou "mouseover") e uma função de retorno de chamada como argumentos:</p>
<span>
  <h5>// Adiciona um evento de clique a todos os elementos com a classe "my-class"</h5>
<p>$(".my-class").on("click", function() {
  console.log("Clicado na classe 'my-class'!");
  });
  </p>

  <h5>// Adiciona um evento de clique ao elemento com o ID "my-element"</h5>
<p>$("#my-element").on("click", function() {
  console.log("Clicado no elemento com ID 'my-element'!");
});
</p>

<h3>Exemplo completo</h3>
<p>Aqui está um exemplo completo que usa Selector.js para selecionar elementos e adicionar eventos a eles:</p>

<h5>// Seleciona todos os elementos com a classe "my-class" e adiciona um evento de clique a eles</h5>
<p>$(".my-class").on("click", function() {
  console.log("Clicado na classe 'my-class'!");
});
</p>

<h5>// Seleciona o elemento com o ID "my-element" e adiciona um evento de clique a ele</h5>
<p>$("#my-element").on("click", function() {
  console.log("Clicado no elemento com ID 'my-element'!");
});</p>
