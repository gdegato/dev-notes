import React from 'react'

function NoteCard({ title, description, date, onRemove, checked, onchecked, variant = 'full' }) {
  // note

  const formatDate = (dateString) => {
    if (!dateString) return null

    // Se já está no formato DD/MM/YYYY, retorna direto
    if (dateString.includes('/')) {
      return dateString
    }

    // Se for ISO string ou timestamp, converte
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    } catch {
      return dateString
    }
  }
  const formattedDate = formatDate(date)

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1">
     
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-800 flex-1 line-clamp-2">
          {title}
        </h3>
      </div>

      {variant === 'full' && description && (
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
      )}

      {formattedDate && (
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-2">📅</span>
          <time>{formattedDate}</time>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={checked}
            onClick={(e) => { e.stopPropagation() }}
            onChange={onchecked}
            className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-800">
            {checked ? 'Concluída' : 'Pendente'}
          </span>
        </label>
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onRemove()
          }}
          className="text-sm text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded transition-colors"
        >
          🗑️ Remover
        </button>
      </div>
    </div>
  )
}

export default NoteCard