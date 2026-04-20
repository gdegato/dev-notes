'use client'
import React from 'react'
import NoteCard from '../components/NoteCard'
import Link from 'next/link'
import { useNotesContext } from '../context/NotesContext'

function Notes() {
  const { notes } = useNotesContext();

  return (
    <div>
      {notes.map((item) =>
        <div key={item.id}>
          <Link href={`notes/${item.id}`}>
            <NoteCard
              title={item.title}
              date={item.date}
              description={item.description}
              status={item?.status} />
          </Link>
        </div>
      )
      }
    </div >
  )
}

export default Notes