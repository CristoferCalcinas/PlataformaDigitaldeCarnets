
export default function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout User</h1>
      {children}
    </div>
  );
}