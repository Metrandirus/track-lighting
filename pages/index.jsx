import fs from 'fs';
import path from 'path';
import ProductCard from '../components/ProductCard';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const json = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(json);
  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Каталог трековых светильников</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}