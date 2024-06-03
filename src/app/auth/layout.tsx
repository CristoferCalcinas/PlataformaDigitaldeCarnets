
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