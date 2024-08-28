import ProductGeneral from '@/app/components/ProductGeneral/ProductGeneral';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';

export default function Shop() {
    //const [loading, setLoading] = useState(true);

    return (
        <div className="container mx-auto max-w-[1200px]">
            <Suspense fallback={<Loading />}>
                <ProductGeneral />
            </Suspense>
        </div>
    );
}
