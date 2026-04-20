import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-secondary-600 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white hover:text-primary-100 transition-colors">
              📝 Dev Notes
            </h1>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-primary-100 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/notes"
              className="text-white hover:text-primary-100 transition-colors font-medium"
            >
              Tarefas
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header