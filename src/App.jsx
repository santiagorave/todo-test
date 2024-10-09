import "./App.scss";
import Modal from "./components/Modal";
import TasksCard from "./components/TasksCard";
import { useContext, useState } from "react";
import { taskContext } from "./Context";
function App() {
  const { modal, setModal } = useContext(taskContext);
  const [filter,setFilter] = useState('All');
  const handleChange = function(evt){
    setFilter(evt.target.value)
  }
  return (
    <main>
      {modal && <Modal />}
      <header>
        <h1>To Do</h1>
        <button onClick={() => setModal(true)}>Add task</button>
      </header>
      <section className="bg">
        <section className="list">
          <aside className="list-head">
            <h3>All Tasks</h3>
            <select onChange={(e)=>handleChange(e)}  name="statusSelect" id="statusSelect">
              <option defaultValue value="All">
                All
              </option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </aside>
          <aside className="list-gallery">
          <TasksCard filter={filter} />
          </aside>
        </section>
      </section>
    </main>
  );
}

export default App;
