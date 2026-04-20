'use client'
import React from 'react'
import NoteCard from '../components/NoteCard'
import Link from 'next/link'
import { useNotesContext } from '../context/NotesContext'

function NotesList() {
    const { notes, removeNote, toggleChecked } = useNotesContext();

    if (notes.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto">
                    <span className="text-6xl mb-4 block">📝</span>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Nenhuma nota encontrada
                    </h3>
                    <p className="text-gray-500">
                        Comece criando sua primeira nota!
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map((item) =>
                    <Link
                        key={item.id}
                        href={`notes/${item.id}`}
                        className="block transition-transform"
                    >
                        <NoteCard
                            variant='compact'
                            title={item.title}
                            date={item.date}
                            checked={item.checked}
                            onRemove={() => removeNote(item.id)}
                            onChecked={() => toggleChecked(item.id)}
                        />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default NotesList