// src/components/NavbarItem.tsx

import Link from 'next/link';

interface NavbarItemProps {
  href: string;
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, label }) => {
  return (
    <Link href={href} className="text-gray-800 hover:text-blue-600">
      {label}
    </Link>
  );
};

export default NavbarItem;
