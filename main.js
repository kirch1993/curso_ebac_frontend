$(document).ready(function() {


    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova_tarefa').val();
        const novoItem = $(`<li style = "display: none">* ${novaTarefa} </li>`);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#nova_tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('feito');
    });

});
