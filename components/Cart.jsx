```jsx
import { useState } from 'react';

export default function Cart() {
  const [count] = useState(0); // позже свяжем с состоянием корзины
  return (
    <div className="relative">
      <button className="p-2 rounded hover:bg-gray-200">
        🛒
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
    </div>
  );
}
