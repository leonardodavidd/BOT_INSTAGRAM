//Leonardo
do{
    let contador = 0;
    let arr = document.querySelectorAll('._acas');
    arr.forEach((v,i) => {
    setTimeout(()=>{
        if(!v.classList.contains('._acat')){
            v.click();
            contador++;
            console.log('Leo já seguiu: ' + contador + 'Pessoas');
        }
         else {
            console.log('Você já seguiu esta pessoa!')
        }
    }, i * 360000) //aqui você altera o tempo que você pede para seguir pessoa por pessoa, colocar entre 6/7 minutos para não tomar BANIMENTO DO INSTAGRAM. Para utilizar o bot, basta selecionar o perfil do instagram que você deseja, clicar em "seguidores", após abrir a página de seguidores, abra o inspecionar, clique em console, e cole o código dentro do console do navegador, PRONTO! você está seguindo pessoas automaticamente no INSTAGRAM!
});
}
while(contador != 200); //AQUI VOCÊ SELECIONA ATÉ QUANTAS PESSOAS VOCÊ VAI SEGUIR, OU SEJA, ENQUANTO O CONTADOR FOR DIFERENTE DE 200 IRÁ CONTINUAR O BOT.
//CASO O BOT NÃO FUNCIONE DE PRIMEIRA, RESETE A PÁGINA E TENTE NOVAMENTE QUE DÁ CERTO!
//COM ESTE BOT VOCÊ PODE DEIXAR SEU PERFIL DO INSTAGRAM SEGUINDO PESSOAS AUTOMATICAMENTE!