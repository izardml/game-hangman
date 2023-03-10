var lives = 10

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

setInterval(updateGameCanvas, 20)

function updateGameCanvas() {
    if(lives < 10) {
        ctx.moveTo(100, 565)
        ctx.lineTo(500, 565)
        ctx.stroke()
    }

    if(lives < 9) {
        ctx.moveTo(200, 565)
        ctx.lineTo(200, 300)
        ctx.stroke()
    }

    if(lives < 8) {
        ctx.moveTo(200, 300)
        ctx.lineTo(300, 300)
        ctx.stroke()

    }

    if(lives < 7) {
        ctx.moveTo(300, 300)
        ctx.lineTo(300, 320)
        ctx.stroke()

    }

    if(lives < 6) {
        ctx.beginPath()
        ctx.arc(300, 340, 20, 0, 2 * Math.PI)
        ctx.stroke()

    }

    if(lives < 5) {
        ctx.moveTo(300, 360)
        ctx.lineTo(300, 425)
        ctx.stroke()

    }

    if(lives < 4) {
        ctx.moveTo(300, 360)
        ctx.lineTo(280, 430)
        ctx.stroke()

    }

    if(lives < 3) {
        ctx.moveTo(300, 360)
        ctx.lineTo(320, 430)
        ctx.stroke()

    }

    if(lives < 2) {
        ctx.moveTo(300, 425)
        ctx.lineTo(290, 500)
        ctx.stroke()

    }

    if(lives < 1) {
        ctx.moveTo(300, 425)
        ctx.lineTo(310, 500)
        ctx.stroke()

        document.getElementById('game-over').style.display = 'block'
    }
}

const alfabet = [
    'A', 'B', 'C', 'D', 'E', 
    'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 
    'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 
    'Z',
]

for(i = 0; i < alfabet.length; i++) {
    const button = document.createElement('button')
    button.setAttribute('onclick', 'cek("' +alfabet[i]+ '")')
    button.innerHTML = alfabet[i]
    document.getElementById('key').appendChild(button)
}

var random = Math.floor(Math.random() * 4) //  ANGKA TERSEBUT ADALAH JUMLAH TEBAKAN YANG ADA

var soal = [
    ['Hewan berkaki 4, oren belang hitam'],
    ['Nama permainan ini'],
    ['Negara yg paling lama menjajah Indonesia'],
    ['Siapa nama pengguna Colossal Titan sebelum Armin'],
]

var kata = [
    ['H', 'A', 'R', 'I', 'M', 'A', 'U'],
    ['H', 'A', 'N', 'G', 'M', 'A', 'N'],
    ['B', 'E', 'L', 'A', 'N', 'D', 'A'],
    ['B', 'E', 'R', 'T', 'O', 'L', 'T'],
]

document.getElementById('soal').innerHTML = soal[random]
for(i = 0; i < kata[random].length; i++) {
    const span = document.createElement('span')
    span.setAttribute('class', 'kata')
    document.getElementById('form').appendChild(span)
}

var benar = false

function cek(huruf) {
    for(i = 0; i < kata[random].length; i++) {
        if(huruf == kata[random][i]) {
            document.getElementsByClassName('kata')[i].innerHTML = kata[random][i]
            benar = true
        }
    }


    benar ? lives : lives--
    benar = false
    event.target.setAttribute('disabled', true)
}