$(document).ready(function() { //chamar o documento HTML no jQuery
    $('header button').click(function() { //função 'click' em jQuery
        $('form').slideDown(); //Ao clicar no botão "Nova Imagem +", o formulário aparece com efeito
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //Ao clicar no botão "Cancelar", o formulário é recolhido com efeito
    })

    $('form').on('submit', function(e) { //
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novoItem); //criar um novo elemento no jQuery
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); //adicionar o novo item, no 'ul' do HTML
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})

