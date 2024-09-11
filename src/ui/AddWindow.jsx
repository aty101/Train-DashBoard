import { useState } from "react";
import Input from "./Input";
function AddWindow({ closePopUpWindow, handleItemAdd }) {
  const [{ name, price, description }, setState] = useState({
    name: "",
    price: "",
    description: "",
  });
  return (
    <div
      onClick={closePopUpWindow}
      className="w-full h-[100dvh] flex justify-center bg-opacity-60 items-center absolute top-0 left-0  bg-slate-500   "
    >
      <form
        onSubmit={(e) => {
          e.defaultPrevented();
          handleItemAdd(
            Math.floor(Math.random() * 1000000) + 1,
            name,
            price,
            description
          );
        }}
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-md px-6 py-8  flex flex-col gap-5 w-[400px]"
      >
        <button className="text-end ml-auto" onClick={closePopUpWindow}>
          ✖
        </button>
        <h2 className="text-2xl font-bold border-b pb-1 border-b-black">
          Add Item
        </h2>
        <div className="flex flex-col gap-3">
          <Input
            state={name}
            setState={(e) =>
              setState((item) => {
                return { ...item, name: e.target.value };
              })
            }
            type={"product name"}
          ></Input>
          <Input
            state={price}
            setState={(e) =>
              setState((item) => {
                return { ...item, price: e.target.value };
              })
            }
            type={"product price"}
          ></Input>
          <Input
            state={description}
            setState={(e) =>
              setState((item) => {
                return { ...item, description: e.target.value };
              })
            }
            type={"product description"}
          ></Input>
        </div>
        <button
          className="capitalize bg-blue-700 text-blue-50 p-2 rounded-md mb-2"
          type="submit"
          onClick={() =>
            handleItemAdd(
              Math.floor(Math.random() * 1000000) + 1,
              name,
              price,
              description
            )
          }
        >
          add item
        </button>
      </form>
    </div>
  );
}

export default AddWindow;
