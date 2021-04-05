var alien1 = {
    nome: "Besta",
    imagem: "https://static.wikia.nocookie.net/ben10-oficial/images/a/ae/10.jpg/revision/latest/scale-to-width-down/340?cb=20110526213928&path-prefix=pt",
    atributos: {
        ataque: 70,
        defesa: 60,
        magia: 0,
        inteligencia: 5,
    }
}

var alien2 = {
    nome: "Quatro Braços",
    imagem: "http://4.bp.blogspot.com/_CB-_kGjZBXY/SeTe5YxM7SI/AAAAAAAAAC0/P-rEx0oQ9r4/s320/30160.jpg",
    atributos: {
        ataque: 95,
        defesa: 60,
        magia: 0,
        inteligencia: 10,
    }
}

var alien3 = {
    nome: "Massa Cinzenta",
    imagem: "https://static.wikia.nocookie.net/ben10-oficial/images/8/8d/12.jpg/revision/latest/scale-to-width-down/340?cb=20110526214032&path-prefix=pt",
    atributos: {
        ataque: 15,
        defesa: 5,
        magia: 00,
        inteligencia: 95,
    }
}

var alien4 = {
    nome: "XLR8",
    imagem: "https://i.pinimg.com/originals/38/65/70/386570015965adac3c76c9b01155c5cd.png",
    atributos: {
        ataque: 90,
        defesa: 55,
        magia: 0,
        inteligencia: 20,
    }
}

var alien5 = {
    nome: "Ultra-T",
    imagem: "https://static.wikia.nocookie.net/ben10/images/7/78/UPHE11.png/revision/latest/top-crop/width/300/height/300?cb=20150103232617&path-prefix=pt",
    atributos: {
        ataque: 45,
        defesa: 70,
        magia: 80,
        inteligencia: 65,
    }
}

var alien6 = {
    nome: "Diamante",
    imagem: "https://i.pinimg.com/originals/43/3e/51/433e51c4596b5c7c708b3a3f12442273.png",
    atributos: {
        ataque: 65,
        defesa: 90,
        magia: 35,
        inteligencia: 30,
    }
}

var alien7 = {
    nome: "Aquático",
    imagem: "https://static.wikia.nocookie.net/ben10/images/0/01/Iujnhbgfvdgjnbvhjnh.png/revision/latest?cb=20140303195211&path-prefix=pt",
    atributos: {
        ataque: 70,
        defesa: 45,
        magia: 0,
        inteligencia: 20,
    }
}

var alien8 = {
    nome: "Insectóide",
    imagem: "https://static.wikia.nocookie.net/planetben10/images/1/12/Inset%C3%B3ide_11.png/revision/latest/scale-to-width-down/258?cb=20140105185310&path-prefix=pt",
    atributos: {
        ataque: 35,
        defesa: 30,
        magia: 60,
        inteligencia: 35,
    }
}

var alien9 = {
    nome: "Fantasmatico",
    imagem: "https://static.wikia.nocookie.net/ben-10-ultra-acao/images/d/d9/Fantasma_SA_Tabber.png/revision/latest/scale-to-width-down/340?cb=20130930191901&path-prefix=pt",
    atributos: {
        ataque: 00,
        defesa: 00,
        magia: 90,
        inteligencia: 45,
    }
}

var alien10 = {
    nome: "Chamas",
    imagem: "https://static.wikia.nocookie.net/planetben10/images/5/5b/Chama_11.png/revision/latest/scale-to-width-down/258?cb=20140106111542&path-prefix=pt",
    atributos: {
        ataque: 40,
        defesa: 30,
        magia: 75,
        inteligencia: 30,
    }
}

var alien11 = {
    nome: "Bala de Canhão",
    imagem: "https://static.wikia.nocookie.net/planetben10/images/4/4a/Bala_de_Canh%C3%A3o_Tabber.png/revision/latest/scale-to-width-down/258?cb=20140105184815&path-prefix=pt",
    atributos: {
        ataque: 75,
        defesa: 85,
        magia: 0,
        inteligencia: 15,
    }
}

var alien12 = {
    nome: "Cipó Selvagem",
    imagem: "https://static.wikia.nocookie.net/planetben10/images/f/f2/Cip%C3%B3_Selvagem_11.png/revision/latest/scale-to-width-down/258?cb=20140105184722&path-prefix=pt",
    atributos: {
        ataque: 40,
        defesa: 80,
        magia: 70,
        inteligencia: 40,
    }
}

var alien13 = {
    nome: "Glutão",
    imagem: "http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i21/ben10_upchuck_174x252.png",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 85,
        inteligencia: 15,
    }
}

var cartaMaquina
var cartaJogador
var cartas = [alien1, alien2, alien3, alien4, alien5, alien6, alien7, alien8, alien9, alien10, alien11, alien12, alien13];


var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
    divPlacar.innerHTML = html

}

// Sorteia numero do indice, retira da Array com um splice e chama a função exibirCartaJogador
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)


    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibirCartaJogador()
}



function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome} </P>`;
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}



function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length <= 1) {
        alert("Fim de Jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Parabéns, você venceu!</P>'
        } else if (pontosJogador < pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Poxa não foi dessa vez, você perdeu!</P>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou!</P>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    exibirCartaMaquina()
    atualizaPlacar()
    atualizaQuantidadeDeCartas()
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </P>`;
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}
