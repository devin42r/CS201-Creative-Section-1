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

function playNote(note){
	var audio = document.getElementById('note')
	var source = document.getElementById('noteFile')
	source.src = "mp3/" + note + ".mp3";
	audio.load()
	audio.play()
}

function doc_keyUp(e) {

	var key = e.keyCode;
	
	switch(key){
		case 81:
			playNote("c1");
			break;
		case 87:
			playNote("dFlat1");
			break;
		case 69:
			playNote("d1");
			break;
		case 82:
			playNote("eFlat1");
			break;
		case 84:
			playNote("e1");
			break;
		case 89:
			playNote("f1");
			break;
		case 85:
			playNote("gFlat1");
			break;
		case 73:
			playNote("g1");
			break;
		case 79:
			playNote("aFlat1");
			break;
		case 80:
			playNote("a1");
			break;
		case 65:
			playNote("bFlat1");
			break;
		case 83:
			playNote("b1");
			break;
		case 68:
			playNote("c2");
			break;
		case 70:
			playNote("dFlat2");
			break;
		case 71:
			playNote("d2")
			break;
		case 72:
			playNote("eFlat2");
			break;
		case 74:
			playNote("e2");
			break;
		case 76:
			playNote("gFlat2");
			break;
		case 90:
			playNote("g2");
			break;
		case 88:
			playNote("aFlat2");
			break;
		case 67:
			playNote("a2");
			break;
		case 86:
			playNote("bFlat2");
			break;
		case 66:
			playNote("b2");
			break;
		case 78:
			playNote("c3");
			break;

	}

}

// register the handler 
document.addEventListener('keyup', doc_keyUp, false);