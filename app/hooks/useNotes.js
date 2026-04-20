"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

function useNotes() {

    const router = useRouter();

    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({
        title: '',
        description: '',
        checked: false
    })
    useEffect(() => {
        const data = localStorage.getItem('notes')
        if (data) {
            setNotes(JSON.parse(data))
        } else {
            setNotes([])
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    const handleSubmit = (e) => {
        e.preventDefault()

        const now = new Date()
        const formattedDate = now.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })

        setNotes(prev => [
            ...prev,
            {
                ...note,
                id: Date.now(),
                checked: false,
                date: formattedDate,
                createdAt: now.toISOString()
            }
        ])

        setNote({ title: "", description: "", checked: false })
    }


    const removeNote = (id) => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
        router.push('/notes')
    }

    const editNote = (id, title, description, checked) => {
        const updateNotes = notes.map((note) => { note.id !== id ? { ...note, id, title, description, checked } : note })
        setNotes(updateNotes)
    }

    const toggleChecked = (id) => {

        const updateNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, checked: !note.checked }
            }
            return note
        })
        setNotes(updateNotes)
    }


    return { notes, setNotes, note, setNote, handleSubmit, removeNote, editNote, toggleChecked }
}

export default useNotes