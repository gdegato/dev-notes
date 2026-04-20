"use client"

import React, { useEffect, useState } from 'react'

const getInitialNotes = () => {
    const data = localStorage.getItem('notes')
    return data ? JSON.parse(data) : []
}

function useNotes() {

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

        setNotes(prev => [
            ...prev,
            { ...note, id: Date.now(), checked: false }
        ])

        setNote({ title: "", description: "", checked: false })
    }


    const removeTask = (id) => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    const editTask = (id, title, description, checked) => {
        const updateNotes = notes.map((note) => { note.id !== id ? { ...note, id, title, description, checked } : note })
        setNotes(updateNotes)
    }


    return { notes, setNotes, note, setNote, handleSubmit, removeTask, editTask }
}

export default useNotes