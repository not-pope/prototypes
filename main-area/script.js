let mainArea = document.getElementById("main-area");
let notes = document.getElementById("notes");
let text = document.getElementById("input");

let i = 0;
let lineNumber=1;
let noteLen=0;

let addNew = () => {
    let note = document.createElement("div");
    note.classList.add("note");
    if(text.innerText.trim()!=""){
        note.innerText=text.innerText.trim();
        text.innerText="";
    }else{
        note.innerText=(++i);
    }
    // notes.appendChild(note);
    notes.prepend(note);
}

let enter = (event) => {
    // event.preventDefault();
    if (event.key==="Enter"){
        addNew();
        console.log(noteLen);
    }else if(noteLen%45==0){
        text.style.height=((lineNumber++)*20)+"px";
        // text.innerText=text.innerText+event.key;
        noteLen+=1;
    }
    // else{
    //     text.innerText=text.innerText+event.key;
    //     noteLen+=1;
    // }
}