'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import Loading from '@/app/components/Loading/Loading';
import Link from 'next/link';

export default function ProductGeneral() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
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
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (products.length === 0) {
        return (
            <div className="container mx-auto flex flex-col justify-center items-center h-[65vh]">
                <p className="mb-[20px] text-center text-[26px]">No hay productos disponibles</p>
                <Link
                    href="/"
                    className="border-[1px] border-[#2F3C92] h-[50px] w-[210px] flex justify-center items-center text-[16px] bg-[#2F3C92] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#2F3C92] mt-[20px] mr-[10px]"
                >
                    IR A LA PÁGINA DE INICIO
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap my-[30px]">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
}
