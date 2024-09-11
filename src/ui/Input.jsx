export default function Input({ type, state, setState }) {
  if (type.includes("description")) {
    return (
      <div className="flex flex-col gap-1">
        <label className="capitalize font-semibold">{type}</label>
        <textarea
          required
          className="h-16 rounded-md px-3 py-1 border   border-sky-950"
          type={type === "password" ? "password" : "text"}
          value={state}
          onChange={setState}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-1">
        <label className="capitalize font-semibold">{type}</label>
        <input
          required
          className="h-9 rounded-md px-3 border  border-sky-950"
          type={type === "password" ? "password" : "text"}
          value={state}
          onChange={setState}
        ></input>
      </div>
    );
  }
}
