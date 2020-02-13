class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantiadade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagensView = new MensagemView('#mensagemView')

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantiadade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
        
    }

    adiciona(event: Event) {
        
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantiadade.value),
            parseFloat(this._inputValor.value)
        );

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