class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantiadade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantiadade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event) {
        
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantiadade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao.quantidade + 20);
        console.log(negociacao);
    }

}