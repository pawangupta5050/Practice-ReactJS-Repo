export default function Input({ label, invalid, ...props }) {
  return (
    <p>
      <label className={`block mb-2 text-xs font-bold tracking-wide uppercase ${invalid ? 'text-red-400' : 'text-stone-300'}`}>{label}</label>
      <input className={`w-full px-3 py-2 leading-tight border rounded shadow  ${invalid ? 'text-red-500 bg-red-100 border-red-300' : 'text-gray-700 bg-stone-300'}`} {...props} />
    </p>
  );
} 