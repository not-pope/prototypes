let mainArea = document.getElementById("main-area");
let notes = document.getElementById("notes");

let i = 0;

let addNew = () => {
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerText(++i);
    notes.appendChild(note);
}