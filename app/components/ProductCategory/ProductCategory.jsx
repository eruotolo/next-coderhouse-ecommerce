'use client';

import { useState, useEffect } from 'react';
import { db } from '@/app/config/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import Loading from '@/app/components/Loading/Loading';
import Link from 'next/link';

export default function ProductCategory({ category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const q = category
                    ? query(productsCollection, where('category', '==', category))
                    : productsCollection;
                const productsSnapshot = await getDocs(q);
                const productsList = productsSnapshot.docs.map((doc) => ({
                    id: doc.id, // Include the id from Firestore
                    ...doc.data(),
                }));
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
