import NoteForm from "./components/NoteForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Bem-vindo ao Dev Notes
          </h1>
          <p className="text-gray-600 text-lg">
            Organize suas tarefas e ideias de forma simples e eficiente
          </p>
        </div>
        <NoteForm />
      </div>
    </main>
  );
}
