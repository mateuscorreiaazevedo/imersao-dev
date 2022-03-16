//           .chave   valor
var mateus = { nome: "Mateus", vitorias: 0, empates: 0, derrotas: 0, pontos: 0}
var clara = { nome: "Ana Clara", vitorias: 0, empates: 0, derrotas: 0, pontos: 0}
var livia = { nome: "Lívia", vitorias: 0, empates: 0, derrotas: 0, pontos: 0}

function calcPoints(player) {
    var points = player.vitorias * 3 + player.empates
    return points
  }  

// var pointResults = calcPoints(mateus)
mateus.pontos = calcPoints(mateus)
clara.pontos = calcPoints(clara)
livia.pontos = calcPoints(livia)

var players = [mateus, clara, livia]

function playersScreen(players) {
    var element = ""
    for(var i = 0; i< players.length; i++) {
    element += 
    `<tr>
    <td>${players[i].nome}</td>
    <td>${players[i].vitorias}</td>
    <td>${players[i].empates}</td>
    <td>${players[i].derrotas}</td>
    <td>${players[i].pontos}</td>
    <td><button onclick="addVit(${i})">Vitória</button></td>
    <td><button onclick="addEmp(${i})">Empate</button></td>
    <td><button onclick="addDef(${i})">Derrota</button></td>
    </tr>`
    }
        
    var playersTab = document.getElementById("players-tab")
    playersTab.innerHTML = element   
}
playersScreen(players)

function addVit(i) {
    var player = players[i]
    player.vitorias ++
    player.pontos = calcPoints(player)
    playersScreen(players)
}
function addEmp(i) {
    var player = players[i]
    player.empates ++
    player.pontos = calcPoints(player)
    playersScreen(players)
}
function addDef(i) {
    var player = players[i]
    player.derrotas ++
    player.pontos = calcPoints(player)
    playersScreen(players)
}
