export default class NotesAPI {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    //あとでソートさせる？
    return notes;
  }
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();

    noteToSave.id = Math.floor(Math.random() * 1000000);
    noteToSave.updated = new Date().toISOString();
    notes.push(noteToSave);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  static deleteNote(id) {}
}
