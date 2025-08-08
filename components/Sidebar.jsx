export default function Sidebar({ options, selected, onSelect }) {
  return (
    <aside className="w-48 p-4 bg-gray-100">
      <h2 className="font-bold mb-2">Тип системы</h2>
      <ul>
        {options.map(opt => (
          <li key={opt}>
            <button
              className={`w-full text-left py-1 px-2 rounded hover:bg-gray-200 ${opt === selected ? 'bg-gray-300' : ''}`}
              onClick={() => onSelect(opt)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
