import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="container mx-auto">
            <div className="flex flex-col justify-center h-[60vh] items-center px-[20px]">
                <h1 className="font-medium md:text-[40px] py-[10px] text-center text-[30px]">
                    Página no encontrada (404)
                </h1>
                <p className="mb-[20px] text-center">
                    Esta página no existe o ha sido eliminada. Lamentamos el inconveniente.
                </p>
                <Link
                    href="/"
                    className="border-[1px] border-[#2F3C92] h-[50px] w-[210px] flex justify-center items-center text-[16px] bg-[#2F3C92] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#2F3C92] mt-[20px] mr-[10px]"
                >
                    IR A LA PÁGINA DE INICIO
                </Link>
            </div>
        </section>
    );
}
