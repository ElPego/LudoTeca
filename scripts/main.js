function tryAgainPassword() {
    let myPassword = prompt("Codice sbagliato. L'accesso alla videoteca è protetto da una codice. Accedi alla tua infanzia per ricordarlo");
    if (myPassword==717990 || myPassword==0){
	window.location.href = "Videoteca.html";
	}
    else if (myPassword!=null && myPassword!=717990 && myPassword!=0){
	tryAgainPassword();
    }
    else window.location.href = "index.html";
}

function tryPassword() {
    let myPassword = prompt("L'accesso alla videoteca è protetto da una codice. Accedi alla tua infanzia per ricordarlo.");
    if (myPassword==717990 || myPassword==0) {
	window.location.href = "Videoteca.html";
	}
    else if (myPassword!=null && myPassword!=717990 && myPassword!=0){
	tryAgainPassword();
    
    }
    else window.location.href = "index.html";
}


tryPassword();


