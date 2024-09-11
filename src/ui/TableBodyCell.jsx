export default function TableBodyCell({ children }) {
  return (
    <td className="py-6 font-semibold text-center border-b border-sky-100 text-sky-950">
      {children}
    </td>
  );
}
