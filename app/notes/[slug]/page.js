
'use client'

import NoteCard from '@/app/components/NoteCard'
import React from 'react'

import { useNotesContext } from '../../context/NotesContext'

async function NoteDetailsPage({params}) {
  const {notes} = useNotesContext();

    const resolvedParams = await params
    const noteId = Number(resolvedParams.slug)
    const oneNote = notes.find(item => item.id === noteId)

    if(!oneNote) {
        return <h1>Nota não encontrada</h1>
    }

  return (
    <div>
        <NoteCard
         title={oneNote.title}
         description={oneNote.description} 
         date={oneNote.date} 
         status={oneNote.status} />
    </div>
  )
}

export default NoteDetailsPage
