import ProductList from '@/app/components/ProductList/ProductList';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading/Loading';

export default function ShopHombre() {
    const titlePage = 'Productos Sale';
    const customertype = 'sale';
    return (
        <div className="container mx-auto max-w-[1200px]">
            <div className="flex flex-col pt-[30px]">
                <div className="border-b-[1px] border-[#EDEDED] pb-[15px]">
                    <h1 className="text-[#172983] text-[26px] leading-[30px] font-bold uppercase ">
                        {titlePage}
                    </h1>
                </div>
            </div>
            <Suspense fallback={<Loading />}>
                <ProductList customertype={customertype} />
            </Suspense>
        </div>
    );
}
