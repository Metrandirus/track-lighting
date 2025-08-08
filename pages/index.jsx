import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';

import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const json = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(json);
  return { props: { products } };
}

export default function Home({ products }) {
  // Состояние для строки поиска
  const [search, setSearch] = useState('');
  // Здесь можно хранить товары в корзине, если нужно
  const [cart, setCart] = useState([]);

  // Функция добавления товара в корзину
  const handleAdd = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <Layout>
      {(selectedType) => {
        // Фильтрация по типу системы и по поиску по названию модели
        const filtered = products
          .filter(p => p.type === selectedType)
          .filter(p => p.model.toLowerCase().includes(search.toLowerCase()));

        return (
          <>
            {/* Блок заголовка с названием типа и строкой поиска */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-2xl font-semibold mb-4 sm:mb-0">
                {selectedType} системы
              </h2>
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Поиск по модели..."
              />
            </div>

            {/* Сетка карточек товаров */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.length > 0 ? (
                filtered.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={handleAdd}
                  />
                ))
              ) : (
                <p className="col-span-full text-gray-500">
                  По вашему запросу ничего не найдено.
                </p>
              )}
            </div>
          </>
        );
      }}
    </Layout>
  );
}
