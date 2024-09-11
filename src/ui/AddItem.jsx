function AddItem({ openPopUpWindow }) {
  return (
    <div className="w-full flex bg-sky-50 p-5 justify-between items-center">
      <h3 className="text-2xl font-semibold">Feature</h3>
      <button
        onClick={openPopUpWindow}
        className="text-lg bg-sky-950 py-2 px-3 text-sky-50 capitalize"
      >
        add new item
      </button>
    </div>
  );
}

export default AddItem;
