let mainArea = document.getElementById("main-area");
let notes = document.getElementById("notes");
let input = document.getElementById("input");

input.onkeyup(null);

//--> temp vars
let temp1 = 0;

//--> input related notes
let numberOfLines=1;
let noteLength=0;

let resetInput = () => {
    numberOfLines = 1;
    noteLength = 0;
    input.value=null;
    input.style.height="calc(1em * "+numberOfLines+" + 30px)";
}

let addNew = () => {
    let note = document.createElement("div");
    note.classList.add("note");
    if(input.innerHTML.trim()!=""){
        note.innerHTML=input.innerHTML.trim();
        resetInput();
    }else{
        note.innerHTML=(++temp1);
    }
    notes.appendChild(note);
}

let enter = (event) => {
    if (event.key==="Enter"){
        addNew();
    }else if(++noteLength%input.cols==0){
        input.style.height="calc(1em * "+numberOfLines+" + 30px)";
        numberOfLines+=1;
        noteLength+=1;
    }
}
