export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
    <!-- サイドバー -->
    <div class="notesSidebar">
      <button class="notesAdd" type="button">ノートを追加する</button>
      <div class="notesList">
       
      </div>
    </div>
    <!-- ノートプレビュー -->
    <div class="notesPreview">
      <input type="text" class="notesTitle" placeholder="タイトルを記入" />
      <textarea class="notesBody" placeholder="ここに本文を追加"></textarea>
    </div>
    `;

    const btnAddNote = this.root.querySelector(".notesAdd");
    const inputTitle = this.root.querySelector(".notesTitle");
    const inputBody = this.root.querySelector(".notesBody");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inputTitle, inputBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const updateTitle = inputTitle.value.trim();
        const updateBody = inputBody.value.trim();

        this.onNoteEdit(updateTitle, updateBody);
      });
    });
  }
}
