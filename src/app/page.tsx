import Image from "next/image";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Next.js 14 ToDo App
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
