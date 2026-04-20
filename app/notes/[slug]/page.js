
import NoteDetails from '@/app/components/NoteDetails'
import React from 'react'

async function NoteDetailsPage({ params }) {
  const resolvedParams = await params
  const noteId = Number(resolvedParams.slug)

  return <NoteDetails noteId={noteId} />
}

export default NoteDetailsPage
