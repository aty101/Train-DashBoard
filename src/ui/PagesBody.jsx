/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Table from "./Table";
import AddItem from "./AddItem";
import PopUpWindow from "./PopUpWindow";
import AddWindow from "./AddWindow";

export default function PagesBody({ type }) {
  const [data, setData] = useState([]);
  const [popUpWindowAppear, setPopUpWindowAppear] = useState(false);
  function handleItemAdd(id, name, price, description) {
    const newData = [...data, { id, name, price, description }];
    setData(newData);
    setPopUpWindowAppear(false);
    localStorage.setItem(type, JSON.stringify(newData));
  }
  useEffect(() => {
    const res = localStorage.getItem(type);
    setData(JSON.parse(res));
  }, [type]);

  return (
    <>
      <div className="h-full flex flex-col m-3 gap-3">
        <AddItem openPopUpWindow={() => setPopUpWindowAppear(true)}></AddItem>
        <Table data={data}></Table>
      </div>
      {popUpWindowAppear && (
        <PopUpWindow
          type={"add"}
          AddComponent={
            <AddWindow
              closePopUpWindow={() => setPopUpWindowAppear(false)}
              handleItemAdd={handleItemAdd}
            />
          }
        />
      )}
    </>
  );
}
