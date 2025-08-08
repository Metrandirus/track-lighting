import { useState } from 'react';
import Sidebar from './Sidebar';
import Cart from './Cart';

export default function Layout({ children }) {
  const options = ['Однофазная', 'Трёхфазная', 'Монорельс'];
  const [selectedType, setSelectedType] = useState(options[0]);

  return (
    <div className="flex h-screen">
      <Sidebar options={options} selected={selectedType} onSelect={setSelectedType} />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-end p-4 border-b">
          <Cart />
        </header>
        <main className="p-6 overflow-auto">
          {/* Пробросим выбранный тип в children */}
          {typeof children === 'function' ? children(selectedType) : children}
        </main>
      </div>
    </div>
  );
}
