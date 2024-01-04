export default function Button({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <button className="btn">{children}</button>;
}
