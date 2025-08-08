import { useState } from 'react';
import fs from 'fs';
import path from 'path';

import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';  // 1. Импорт
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

export async function getStaticProps() {
  const json = fs.readFileSync(path.join(process.cwd(), 'data', 'products.json'), 'utf-8');
  const products = JSON.parse(json);
  return { props: { products } };
}

export default function Home({ products }) {
  const [search, setSearch] = useState('');        // 2. Состояние для строки поиска

  return (
    <Layout>
      {selectedType => {
        // 3. Фильтрация по типу и поиску
        const filtered = products
          .filter(p => p.type === selectedType)
          .filter(p => p.model.toLowerCase().includes(search.toLowerCase()));

        return (
          <>
            {/* 4. Вставляем нашу SearchBar */}
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Поиск по модели..."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.length > 0 ? (
                filtered.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))
              ) : (
                <p className="text-gray-500">Ничего не найдено.</p>
              )}
            </div>
          </>
        );
      }}
    </Layout>
  );
}
