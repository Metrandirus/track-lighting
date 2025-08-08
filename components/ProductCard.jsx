export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.model} className="h-40 mx-auto"/>
      <h3 className="mt-2 font-bold text-lg">{product.brand} {product.model}</h3>
      <p>Мощность: {product.power}</p>
      <p>Цветовая температура: {product.colorTemp}</p>
      <p className="mt-1 font-semibold">${product.price}</p>
      <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Добавить в корзину
      </button>
    </div>
  );
}