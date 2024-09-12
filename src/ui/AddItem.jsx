/* eslint-disable react/prop-types */
function AddItem({ openPopUpWindow, type }) {
  return (
    <div className="w-full flex bg-white p-4 justify-between items-center ">
      <h3 className="text-2xl font-semibold capitalize">{type}</h3>
      <button
        onClick={openPopUpWindow}
        className="text-lg bg-sky-950 py-2 px-3 text-sky-50 capitalize hover:bg-sky-500 rounded"
      >
        add new item
      </button>
    </div>
  );
}

export default AddItem;
