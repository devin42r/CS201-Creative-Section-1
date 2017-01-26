/**
 * Created by devin on 1/25/17.
 */

function changeSong(mtype) {
    var audio = document.getElementById('audio')
    var source = document.getElementById('mySource')
    source.src = mtype
    $('audio').show()
    audio.load()
    audio.play()
}

$('audio').hide()