import { products } from '@/data/mockData';
import ProductList from '@/app/components/ProductList/ProductList';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';
import Link from 'next/link';
import Image from 'next/image';
import HeaderPage from '@/app/components/HeaderPage/HeaderPage';

export default function ShopHombre() {
    const filteredProducts = products.filter((product) => product.customertype === 'hombres');
    const headerHombres = '/header-hombres.webp';
    const titlePage = 'Productos de Hombre';

    return (
        <div className="container mx-auto max-w-[1200px]">
            <HeaderPage titlePage={titlePage} imgHeader={headerHombres} />

            <Suspense fallback={<Loading />}>
                {filteredProducts.length === 0 ? (
                    <div className="container mx-auto flex flex-col justify-center items-center h-[65vh]">
                        <p className="mb-[20px] text-center text-[26px]">
                            No hay productos disponibles
                        </p>
                        <Link
                            href="/"
                            className="border-[1px] border-[#2F3C92] h-[50px] w-[210px] flex justify-center items-center text-[16px] bg-[#2F3C92] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#2F3C92] mt-[20px] mr-[10px]"
                        >
                            IR A LA PÁGINA DE INICIO
                        </Link>
                    </div>
                ) : (
                    <ProductList products={filteredProducts} />
                )}
            </Suspense>
        </div>
    );
}
