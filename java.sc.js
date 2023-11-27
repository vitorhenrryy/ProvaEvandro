var cel = document.getElementById('men');

// adicionando as imagem para aparecer destorcida
//innerHTML é uma propriedade do element que define ou retorna o conteudo HTML
cel.innerHTML += '<img src="img/imagem1.jpg" width  = 190;>';
cel.innerHTML += '<img src="img/imagem2.jpg" width = 100;>';
cel.innerHTML += '<img src="img/imagem3.jpg" width = 190;>';
cel.innerHTML += '<img src="img/imagem4.jpg" width = 180;>';
cel.innerHTML += '<img src="img/imagem5.jpg" width = 215;>';

    // declaração da function com exibirFotos do botão fotos que tem o evento onclick
function exibir() {

    //obtendo o elemento (um elemento div com ID men)
    var men = document.getElementById('men');
    // o innerhtml  serve par modificar ou criar elementos html, e limpar.
    men.innerHTML = '';   

    // loop com o for
    //for >>>>>> É um loop em javascript>>> var i =i  Isso inicializa a variavel i com o valor  1 e,
    //variavel i,
    // frequentemente usada para um contador em loops
    // i <=5 Está é a condição de continuação do loop enquanto i for menos ou igual a 5, o loop,
    //continuara a ser executado
    // i++ ele representa cada alteração do loop 
    // o loop é executado cinco vezes de 1 a 5 por que i e inicializado e 1 é a condição de continuação.

        //inicialização  // condição e // incremento
    for (var i = 1; i <= 5; i++) {
        //criando um elemento de imagem
        //createEelement irá criar uma lista não ordenada no documento HTML
        var imagem = document.createElement('img');
       
        imagem.src = "img/imagem"+ i + ".jpg";
       //imagem >>>>>> manipula um atributo src, imagem é uma variavel que contém um objeto representando,
       // a imagem HTML,
       //"img/imagem"+ i + ".jpg"; >>> esta é uma string que esta sendo concatenada com o valor da variavel,
       // i parece que i e uma variavel usada como contador em loop, por tanto o proposito e alterar o caminho,
       //da imagem.

    men.appendChild(imagem);
    //opendChild  >>>>>>>>  É usado para adicionar a imagem com elemento o ID "container" ou qualquer ID.
    //ele permite a manipulação do elemento no navegador HTML usando Javascript.

        //arrumando as imagens  para ficarem do mesmo tamanho
        imagem.width = 150;
        imagem.height = 150;
        imagem.style.marginRight = '10px';
        
    }
}

