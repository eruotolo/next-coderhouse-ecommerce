'use client';

import { useState, useEffect } from 'react';
import ProductCategory from '@/app/components/ProductCategory/ProductCategory';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';
import { useParams } from 'next/navigation';
import HeaderPage from '@/app/components/HeaderPage/HeaderPage';

export default function ShopHombreCategory() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`/api/products/${category}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productsList = await response.json();
                setProducts(productsList);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto max-w-[1200px]">
            <HeaderPage
                titlePage={`Productos de Hombre - ${category}`}
                imgHeader="/header-hombres.webp"
            />
            <Suspense fallback={<Loading />}>
                <ProductCategory category={category} products={products} />
            </Suspense>
        </div>
    );
}
