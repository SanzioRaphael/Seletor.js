// Cria uma função construtora
function Seletor(selector) {
  // Obtém os elementos correspondentes ao seletor
  this.elements = document.querySelectorAll(selector);
}

// Adiciona um método para adicionar um evento aos elementos selecionados
Seletor.prototype.on = function(event, callback) {
  // Percorre todos os elementos selecionados e adiciona o evento e callback a cada um deles
  for (var i = 0; i < this.elements.length; i++) {
    this.elements[i].addEventListener(event, callback);
  }
};

// Cria uma função para a biblioteca
function $(selector) {
  // Retorna uma nova instância da biblioteca
  return new Seletor(selector);
}
