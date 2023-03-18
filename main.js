$(document).ready(function(){
   console.log($("header button"));
   
   let button = $("header button");
   let buttonCancelar = $("#btn-cancelar");
   let form = $("form");

    //EVENTOS EM JQUERY

    //FORMA EM JS

    document.querySelector("header button").addEventListener("click", function(e){
        //assim é efeito em JAVASCRIPT PURO
    })

    //FORMAS EM JQUERY
   button.click(function(){
        //this is the first form
        form.slideDown();
   })

   buttonCancelar.click(function(){
        form.slideUp();
   })

    form.on("submit", function(e){
        e.preventDefault();
        const enderecoNovaImagem = $("#url-imagem-nova").val();
        const novoItem = $(`<li style="display:none">
        <img src="${enderecoNovaImagem}" alt="pintura de um gato">
        <div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
        </div>
    </li>`)

    novoItem.appendTo("ul");
    novoItem.fadeIn(1000);
        //essa é a segunda forma
   })
})