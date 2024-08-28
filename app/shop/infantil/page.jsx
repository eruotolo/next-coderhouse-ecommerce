import ProductList from '@/app/components/ProductList/ProductList';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';
import HeaderPage from '@/app/components/HeaderPage/HeaderPage';

export const metadata = {
    title: 'UNICA JEANS | Productos Intantiles',
};

export default function ShopHombre() {
    const header = '/infantil.webp';
    const titlePage = 'Productos Intantile';
    const customertype = 'infantil';

    return (
        <div className="container mx-auto max-w-[1200px]">
            <HeaderPage titlePage={titlePage} imgHeader={header} />

            <Suspense fallback={<Loading />}>
                <ProductList customertype={customertype} />
            </Suspense>
        </div>
    );
}
