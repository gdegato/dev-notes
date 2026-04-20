import React from 'react'

function NoteCard({ title, description, date, status }) {

  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <div>{date}</div>
      <div>{status}</div>
    </div>
  )
}

export default NoteCard