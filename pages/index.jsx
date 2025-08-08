import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

export async function getStaticProps() {
  const json = fs.readFileSync(path.join(process.cwd(), 'data', 'products.json'), 'utf-8');
  const products = JSON.parse(json);
  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <Layout>
      {(selectedType) => {
        const filtered = products.filter(p => p.type === selectedType);
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        );
      }}
    </Layout>
  );
}
