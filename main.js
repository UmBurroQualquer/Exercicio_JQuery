$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const tarefaNova = $('#tarefa-nova').val();
        let Tarefas = $('<li></li>').text(tarefaNova);

        $(Tarefas).appendTo('ol');
        $('li').click(function () {
            $(this).addClass("concluida");
    });
});
});
