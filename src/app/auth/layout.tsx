

export const metadata = {
    title: 'Login | Plataforma Digital de CI',
    description: 'Iniciar sesión en tu cuenta con el numero CI y contraseña',
};

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex items-center justify-center bg-cyan-50/50 md:h-screen">
            {children}
        </main>
    );
}   