import { Barlow } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/Footer/Footer';
import NavBar from '@/app/components/NavBar/NavBar';

const barlow = Barlow({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
});

export const metadata = {
    title: 'UNICA JEANS | Tienda Online',
    description:
        'Venta de Ropa para toda la familia, Juguetes y Cuidado personal para los mas chiquitos.¡Visitanos!',
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/favicon.png',
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={barlow.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
