"use client"

import React from 'react'
import { useNotesContext } from '../context/NotesContext'

function NoteForm() {

  const { note, setNote, handleSubmit } = useNotesContext()

  const handleChange = (e) => {
    const { name, value } = e.target
    setNote((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              name="title"
              value={note.title}
              onChange={handleChange}
              placeholder='Inserir título'
              required />
          </p>
          <p>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={note.description}
              onChange={handleChange}
              rows="5"
              cols="33"
              placeholder='Descrição'
              required />
          </p>
          <button type='submit'>Cadastrar</button>
        </form>

      </div>
    </div>
  )
}

export default NoteForm