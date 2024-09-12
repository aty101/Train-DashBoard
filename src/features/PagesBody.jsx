/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Table from "../ui/Table";
import AddItem from "../ui/AddItem";
import PopUpWindow from "../ui/PopUpWindow";
import AddWindow from "../ui/AddWindow";
import EditWindow from "../ui/EditWindow";
import DeleteWindow from "../ui/DeleteWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function PagesBody({ type }) {
  const [data, setData] = useState([]);
  const [popUpWindowAppear, setPopUpWindowAppear] = useState(false);
  const [popUpWindowType, setPopUpWindowType] = useState("");
  const [currentItemId, setCurrentItemId] = useState("");
  const [query, setQuery] = useState("");
  function handleItemAdd(id, name, price, description) {
    const newData = [...data, { id, name, price, description }];
    setData(newData);
    setPopUpWindowAppear(false);
    localStorage.setItem(type, JSON.stringify(newData));
  }
  function handleItemEdit(id, newName, newPrice, newDescription) {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          id,
          name: newName ? newName : item.name,
          price: newPrice ? newPrice : item.price,
          description: newDescription ? newDescription : item.description,
        };
      } else {
        return item;
      }
    });

    setData(newData);
    setPopUpWindowAppear(false);
    localStorage.setItem(type, JSON.stringify(newData));
  }
  function handleItemDelete(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setPopUpWindowAppear(false);
    localStorage.setItem(type, JSON.stringify(newData));
  }
  const handleAddWindowOpen = () => {
    setPopUpWindowAppear(true);
    setPopUpWindowType("add");
  };
  const closePopUpWindow = () => setPopUpWindowAppear(false);
  const handleEditWindowOpen = () => {
    setPopUpWindowAppear(true);
    setPopUpWindowType("edit");
  };
  const handleDeleteWindowOpen = () => {
    setPopUpWindowAppear(true);
    setPopUpWindowType("delete");
  };
  useEffect(() => {
    const res = localStorage.getItem(type);
    setData(JSON.parse(res));
  }, [type]);

  return (
    <>
      <div className="h-full flex flex-col m-3 gap-3 w-full">
        <AddItem type={type} openPopUpWindow={handleAddWindowOpen}></AddItem>
        {data?.length > 0 && (
          <div className="bg-white p-4 flex flex-col gap-3">
            <div className="bg-gray-200 w-60 px-2 rounded flex items-center justify-between">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`search ${type}`}
                className="bg-gray-200 text-black py-1 focus:outline-none"
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <Table
              setId={setCurrentItemId}
              handleEditWindowOpen={handleEditWindowOpen}
              handleDeleteWindowOpen={handleDeleteWindowOpen}
              data={data}
              query={query}
            ></Table>
          </div>
        )}
      </div>
      {popUpWindowAppear && (
        <PopUpWindow
          type={popUpWindowType}
          AddComponent={
            <AddWindow
              closePopUpWindow={closePopUpWindow}
              handleItemAdd={handleItemAdd}
            />
          }
          EditComponent={
            <EditWindow
              currentId={currentItemId}
              closePopUpWindow={closePopUpWindow}
              handleItemEdit={handleItemEdit}
            />
          }
          DeleteComponent={
            <DeleteWindow
              currentId={currentItemId}
              handleItemDelete={handleItemDelete}
              closePopUpWindow={closePopUpWindow}
            />
          }
        />
      )}
    </>
  );
}
