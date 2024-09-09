export default function Input({ type, state, setState }) {
  function handleWriting(event) {
    setState(event.target.value);
  }
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-semibold">
        {type === "email" ? "user email" : "user password"}
      </label>
      <input
        className="h-9 rounded-md px-3"
        type={type === "email" ? "text" : "password"}
        value={state}
        onChange={handleWriting}
      ></input>
    </div>
  );
}
