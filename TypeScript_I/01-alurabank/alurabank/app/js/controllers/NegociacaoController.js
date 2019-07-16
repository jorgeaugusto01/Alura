class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantiadade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantiadade.value), parseFloat(this._inputValor.value));
        console.log(negociacao.quantidade + 20);
        console.log(negociacao);
    }
}
