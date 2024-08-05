'use client';

import { products } from '@/data/mockData';
import ProductList from '@/app/components/ProductList/ProductList';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';
import { useParams } from 'next/navigation';

export default function Nombre() {
    const { category } = useParams();
    const filterData = products.filter((item) => {
        const categoryMatch =
            category === 'all' || item.category.toLowerCase() === category.toLowerCase();
        const customertypeMatch = item.customertype === 'hombres';
        return categoryMatch && customertypeMatch;
    });

    return (
        <div className="container mx-auto max-w-[1200px]">
            <Suspense fallback={<Loading />}>
                <ProductList category={category} products={filterData} />
            </Suspense>
        </div>
    );
}
