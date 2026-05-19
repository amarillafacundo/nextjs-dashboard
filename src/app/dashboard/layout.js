import NavLinks from '../ui/nav-links';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>
        <NavLinks />
      </nav>

      <div>{children}</div>
    </div>
  );
}