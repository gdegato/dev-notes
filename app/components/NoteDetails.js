'use client'

import Link from 'next/link'
import React from 'react'
import { useNotesContext } from '../context/NotesContext'

function NoteDetails({ noteId }) {
  const { notes } = useNotesContext();
  const oneNote = notes.find(item => item.id === noteId)

  if (!oneNote) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto text-center">
            <span className="text-6xl mb-4 block">❌</span>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Nota não encontrada
            </h1>
            <p className="text-gray-500 mb-6">
              A nota que você está procurando não existe ou foi removida.
            </p>
            <Link
              href="/notes"
              className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all"
            >
              Ver Todas as Notas
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/notes"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <span className="mr-2">←</span>
            Voltar para Tarefas
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {oneNote.title}
            </h1>
          
          </div>
          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
              {oneNote.description}
            </p>
          </div>
          {oneNote.date && (
            <div className="flex items-center text-gray-500 pt-6 border-t border-gray-200">
              <span className="mr-2">📅</span>
              <time className="text-sm">{oneNote.date}</time>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NoteDetails


