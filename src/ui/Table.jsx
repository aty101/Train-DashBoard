import TableBodyCell from "./TableBodyCell";
import TableHeadCell from "./TableHeadCell";
function Table({ data }) {
  return (
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
  );
}

export default Table;
