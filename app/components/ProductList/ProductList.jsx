import ProductCard from '@/app/components/ProductCard/ProductCard';

export default function ProductList({ products, category }) {
    return (
        <div className="flex flex-wrap my-[30px]">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
}
