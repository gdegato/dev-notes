import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <nav>
        <h1>Dev Notes
        </h1>
        <p><Link href={'notes'}>Tarefas</Link></p>
        <p><Link href={'/'}>Home</Link></p>
      </nav>
    </div>
  )
}

export default Header