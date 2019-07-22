class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {

        //Uma template string `` permite adicionar expressões dentro da string.
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
                ${model.paraArray().map(negociacao => 
                    `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        <tr>
                    `
                ).join('')} <!--O Join concatena os intens do array, porém com vírgula, é necessário passar '' no construtor do join para não exibir vírgula na tela. -->
            <tbody>

            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `;
    }

}