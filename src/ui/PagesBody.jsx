import { useEffect, useState } from "react";
import TableBodyCell from "./TableBodyCell";
import TableHeadCell from "./TableHeadCell";

export default function PagesBody({ type }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = localStorage.getItem(type);
    setData(JSON.parse(res));
  }, [type]);
  return (
    <div className="h-full flex flex-col m-3 gap-3">
      <div className="w-full flex bg-sky-50 p-5 justify-between items-center">
        <h3 className="text-2xl font-semibold">Feature</h3>
        <button  className="text-lg bg-sky-950 py-2 px-3 text-sky-50 capitalize">
          add new item
        </button>
      </div>
      <div className="w-full flex bg-sky-50 p-5 justify-between items-center">
        <table className="table-auto w-full overflow-scroll">
          <thead className="capitalize ">
            <tr className="bg-sky-950">
              <TableHeadCell>product name</TableHeadCell>
              <TableHeadCell>price</TableHeadCell>
              <TableHeadCell>edit</TableHeadCell>
              <TableHeadCell>delete</TableHeadCell>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <tr className="bg-sky-100" key={item.id}>
                  <TableBodyCell>{item.name}</TableBodyCell>
                  <TableBodyCell>{item.price}</TableBodyCell>
                  <TableBodyCell>
                    <button className="capitalize text-sky-50  bg-blue-500 py-2 rounded-md px-6">
                      edit
                    </button>
                  </TableBodyCell>
                  <TableBodyCell>
                    <button className="capitalize text-sky-50 bg-red-600 py-2 rounded-md px-6">
                      delete
                    </button>
                  </TableBodyCell>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
