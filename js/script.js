function logar(){
 /*   var nomes = document.getElementById('nomes').value
    var senha = document.getElementById('senha').value

console.log(JSON.stringify({
    nomes:nomes,
    senha:senha
}));

    fetch("/login",{
        method:'POST',
        body: JSON.stringify({
            nomes:nomes,
            senha:senha
        }) , 
        headers: { "Content-Type" : "application/json" }
        
    })

    .then(async (resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado' ){
            location.href = '/acesso-restrito/acesso.html'
        }else {
            alert('nome e senha invalidos!!')
        }
        
    });*/

    alert("Página de login em manutenção" + "\nVocê será redirecionado automaticamente para a página do sistema!")
     location.href = 'dashboard.html'

}

let currentSlide = 1; // Adiciona a variável

startSlider();

function startSlider() {
    setInterval(function () {
        nextSlide();
    }, 2000); // Intervalo de 2 segundos
}

function nextSlide() {
    currentSlide++;

    if (currentSlide > 4) {
        currentSlide = 1;
    }

    showSlide(currentSlide);
}

function showSlide(index) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("radio" + i).checked = false;
    }

    document.getElementById("radio" + index).checked = true;
}
