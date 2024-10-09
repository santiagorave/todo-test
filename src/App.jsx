import "./App.scss";
import { TaskProvider} from "./Context";
import Modal from "./components/Modal";
import TasksCard from "./components/TasksCard";
function App() {
  return (
    <main>
      <Modal/>
      <TaskProvider>
      <header>
        <h1>To Do</h1>
        <button id="show-modal">Add task</button>
      </header>
      <section className="bg">
        <section className="list">
          <TasksCard/>
        </section>
      </section>
      </TaskProvider>
    </main>
  );
}

export default App;
