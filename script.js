function copiaTexto( ) {
    var x = $("#c").val(); // Acessa o valor do elemento '#c'
    $("#d").html(x);       // Atribui novo conteúdo para elemento '#d'
}

function mudaCor( ){        
    $('#d').css('background-color', 'blue'); // Atribui cor de fundo  
}
