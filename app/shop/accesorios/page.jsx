import { products } from '@/data/mockData.js';
import ProductList from '@/app/components/ProductList/ProductList';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';
import HeaderPage from '@/app/components/HeaderPage/HeaderPage';

export const metadata = {
    title: 'UNICA JEANS | Accesorios',
};

export default function ShopAccesorios() {
    const headerAccesorios = '/header-accesorios.webp';
    const titlePage = 'Accesorios';
    const customertype = 'accesorios';

    return (
        <div className="container mx-auto max-w-[1200px]">
            <HeaderPage titlePage={titlePage} imgHeader={headerAccesorios} />

            <Suspense fallback={<Loading />}>
                <ProductList customertype={customertype} />
            </Suspense>
        </div>
    );
}
