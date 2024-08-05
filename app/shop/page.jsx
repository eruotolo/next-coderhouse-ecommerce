import { products } from '@/data/mockData';
import ProductList from '@/app/components/ProductList/ProductList';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';

export default function Shop() {
    //const [loading, setLoading] = useState(true);

    return (
        <div className="container mx-auto max-w-[1200px]">
            <Suspense fallback={<Loading />}>
                <ProductList products={products} />
            </Suspense>
        </div>
    );
}
