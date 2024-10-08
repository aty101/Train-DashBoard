/* eslint-disable react/prop-types */
import TableBodyCell from "./TableBodyCell";
import TableHeadCell from "./TableHeadCell";
function Table({ data, handleEditWindowOpen, handleDeleteWindowOpen, setId, query }) {
  return (
    <div className="w-full flex bg-white justify-between items-center">
      <table className="table-auto w-full overflow-scroll">
        <thead className="capitalize ">
          <tr className="bg-sky-900">
            <TableHeadCell>product name</TableHeadCell>
            <TableHeadCell>price</TableHeadCell>
            <TableHeadCell>edit</TableHeadCell>
            <TableHeadCell>delete</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          {data?.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).map((item) => {
            return (
              <tr className="bg-sky-100" key={item.id}>
                <TableBodyCell>{item.name}</TableBodyCell>
                <TableBodyCell>{item.price}</TableBodyCell>
                <TableBodyCell>
                  <button
                    onClick={() => {
                      handleEditWindowOpen();
                      setId(item.id);
                    }}
                    className="capitalize text-sky-50  bg-blue-500 py-2 rounded-md px-6"
                  >
                    edit
                  </button>
                </TableBodyCell>
                <TableBodyCell>
                  <button
                    onClick={() => {
                      handleDeleteWindowOpen();
                      setId(item.id);
                    }}
                    className="capitalize text-sky-50 bg-red-600 py-2 rounded-md px-6"
                  >
                    delete
                  </button>
                </TableBodyCell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
