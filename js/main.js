import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

const app = document.getElementById("app");
//インスタンス化
const view = new NotesView(app, {
  // onNoteSelect() {
  //   console.log("ノートが選択されました。");
  // },
  onNoteSelect(id) {
    console.log(id + "のノートが選択されました");
    view.updateActiveNote(notes[0]);
  },
  onNoteAdd() {
    console.log("ノートが追加されました");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
  onNoteDelete(id) {
    console.log(id + "のノートが削除されました");
  },
});

const notes = NotesAPI.getAllNotes();

//サイドバーにメモを全て表示
view.updateNoteList(notes);
// view.updateActiveNote(notes[0]);
