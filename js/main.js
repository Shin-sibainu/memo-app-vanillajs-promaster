import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

// NotesAPI.saveNote({
//   id: 123456,
//   title: "wwww更新したのノート",
//   body: "これは更新したのノートです。",
// });

// NotesAPI.deleteNote(123456);

const app = document.getElementById("app");
//インスタンス化
const view = new NotesView(app, {
  // onNoteSelect() {
  //   console.log("ノートが選択されました。");
  // },
  onNoteSelect(id) {
    console.log(id + "のノートが選択されました");
  },
  onNoteAdd() {
    console.log("ノートが追加されました");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
});

view.updateNoteList(NotesAPI.getAllNotes());
