function PopUpWindow({ type, AddComponent, DeleteComponent, EditComponent }) {
  switch (type) {
    case "add":
      return AddComponent;
    case "delete":
      return DeleteComponent;
    case "edit":
      return EditComponent;
  }
}

export default PopUpWindow;
