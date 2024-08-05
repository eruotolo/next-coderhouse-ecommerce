'use client';
import ReusableForm from '@/app/components/Form/ReusableForm';
import Link from 'next/link';
export default function LoginPage() {
    const fields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
    ];

    const nameButton = 'Ingresar';

    const widthForm = 'w-[400px]';

    const handleSubmit = (data) => {
        console.log('Login data:', data);
    };
    return (
        <div className="container mx-auto max-w-[1200px]">
            <div className="flex flex-col items-center h-[70vh] justify-center ">
                <h1 className="font-medium text-[26px] uppercase mb-[40px]">Ingresar / Login</h1>

                <ReusableForm
                    fields={fields}
                    onSubmit={handleSubmit}
                    nameButton={nameButton}
                    widthForm={widthForm}
                />

                <div className="flex flex-col mt-[40px] w-[400px]">
                    <Link
                        href="#"
                        className="text-left text-[13px] underline leading-[18px] mb-[10px]"
                    >
                        Olvide mi contraseña
                    </Link>
                    <p className="text-left text-[13px] leading-[18px]">
                        No soy usuario registrado y quiero{' '}
                        <Link href="#" className="underline ">
                            crear una cuenta
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
