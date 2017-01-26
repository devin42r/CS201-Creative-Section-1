/**
 * Created by devin on 1/25/17.
 */
var audio

function changeSong(mtype) {
    var audio = document.getElementById('audio');

    $('audio').toggle()
    audio = new Audio();
    audio.src=mtype
    audio.play()
}

$('audio').hide()