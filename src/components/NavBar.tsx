import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <nav className="bg-indigo-600 p-2">
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-row gap-6 items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <Link href="/">
                        <p>App - Dylan</p>
                    </Link>
                </div>

                {/* Menú de navegación */}
                <div className="flex space-x-8">
                    <Link href="/graphical">
                        <p className="text-white hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300">Gráfico (Ejercicio 1)</p>
                    </Link>
                    <Link href="/card">
                        <p className="text-white hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300">Tarjetas (Ejercicio 2)</p>
                    </Link>
                </div>
            </div>
        </nav>
    );

}
