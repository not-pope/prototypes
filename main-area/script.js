let mainArea = document.getElementById("main-area");
let notes = document.getElementById("notes");
let text = document.getElementById("input");

let i = 0;
let lineNumber=1;
let noteLen=0;

// text.on


let resetInput = () => {
    lineNumber = 1;
    noteLen = 0;
    text.innerText="";
    text.style.height="30px";
}

let addNew = () => {
    let note = document.createElement("div");
    note.classList.add("note");
    if(text.innerText.trim()!=""){
        note.innerText=text.innerText.trim();
        resetInput();
    }else{
        note.innerText=(++i);
    }
    notes.appendChild(note);
}

let enter = (event) => {
    if (event.key==="Enter"){
        addNew();
        // console.log(noteLen);
    }else if(noteLen%45==0){
        text.style.height=((lineNumber++)*20)+"px";
        noteLen+=1;
    }
}
