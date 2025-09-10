"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 shadow-md mb-6">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link href="/dashboard">
            <span className="text-white hover:text-yellow-400 cursor-pointer">🏠 Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/clientes">
            <span className="text-white hover:text-yellow-400 cursor-pointer">👤 Clientes</span>
          </Link>
        </li>
        <li>
          <Link href="/productos">
            <span className="text-white hover:text-yellow-400 cursor-pointer">🛒 Productos</span>
          </Link>
        </li>
        <li>
          <Link href="/pedidos">
            <span className="text-white hover:text-yellow-400 cursor-pointer">📦 Pedidos</span>
          </Link>
        </li>
        <li>
          <Link href="/ventas">
            <span className="text-white hover:text-yellow-400 cursor-pointer">💰 Ventas</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
