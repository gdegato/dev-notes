'use client'
import React from 'react'
import NoteCard from '../components/NoteCard'
import Link from 'next/link'
import { useNotesContext } from '../context/NotesContext'

function Notes() {
  const { notes, removeNote, toggleChecked } = useNotesContext();

  if (notes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto text-center">
          <span className="text-6xl mb-4 block">📝</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Nenhuma tarefa encontrada
          </h2>
          <p className="text-gray-500 mb-6">
            Comece criando sua primeira nota!
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all"
          >
            Criar Nota
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Minhas Tarefas
          </h1>
          <p className="text-gray-600">
            Total: {notes.length} {notes.length === 1 ? 'tarefa' : 'tarefas'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((item) =>
            <Link
              key={item.id}
              href={`notes/${item.id}`}
              className="block transition-transform"
            >
              <NoteCard
                title={item.title}
                date={item.date}
                checked={item.checked}
                onRemove={() => removeNote(item.id)}
                onchecked={() => toggleChecked(item.id)}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Notes