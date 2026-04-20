"use client"

import React, { createContext, useContext } from 'react'
import useNotes from '../hooks/useNotes'

const NotesContext = createContext()

export function NotesProvider({ children }) {

    const notesData = useNotes()

    return (
        <NotesContext.Provider value={notesData}>
            {children}
        </NotesContext.Provider>
    )
}

export function useNotesContext() {
  return useContext(NotesContext)
}