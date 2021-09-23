let mainArea = document.getElementById("main-area");
let notes = document.getElementById("notes");
let text = document.getElementById("input");

let i = 0;

let addNew = () => {
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerText=text.value;
    // notes.appendChild(note);
    notes.prepend(note);
}
