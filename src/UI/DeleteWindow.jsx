function DeleteWindow({ closePopUpWindow, handleItemDelete, currentId }) {
  return (
    <div
      onClick={closePopUpWindow}
      className="w-full h-[100dvh] flex justify-center bg-opacity-60 items-center absolute top-0 left-0  bg-slate-500   "
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-md px-6 py-8  flex flex-col gap-1 w-[400px]"
      >
        <button className="text-end ml-auto" onClick={closePopUpWindow}>
          ✖
        </button>
        <h2 className="text-2xl font-bold border-b pb-1 border-b-black">
          Delete Item
        </h2>
        <div className="flex flex-col mt-6 gap-1">
          <button
            className="capitalize bg-red-600 text-blue-50 p-2 rounded-md mb-2"
            type="button"
            onClick={() => handleItemDelete(currentId)}
          >
            delete item
          </button>
          <button
            className=" capitalize bg-blue-700 text-blue-50 p-2 rounded-md mb-2"
            type="button"
            onClick={closePopUpWindow}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWindow;
