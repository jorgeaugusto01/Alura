class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagensView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantiadade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantiadade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagensView.update('Negociação adicionada com sucesso!');
        /*
        this._negociacoes.paraArray().forEach(negociacao => {
                console.log(negociacao.data);
                console.log(negociacao.quantidade);
                console.log(negociacao.valor);
                console.log("Imprimiu!");
        })*/
    }
}
