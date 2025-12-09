import Logo from "@/shared/components/Logo";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <nav>
            <ul className="flex items-center gap-4">
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
