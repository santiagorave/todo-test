import { useContext } from "react";
import { taskContext } from "../Context";
import { deleteTasks } from "../services/deleteTask";
import { getTasks } from "../services/getTasks";
export default function TasksCard({ filter }) {
  const { tasks, modal,setTasks } = useContext(taskContext);
  const handleDelete = function(taskId){
    deleteTasks(taskId).then(()=> getTasks().then(setTasks));

  }
  return (
    <>
  
      {tasks.length ? (
        tasks.filter((task) => filter=='All' ? true : task.status == `${filter}`)
          .map((task) => {
            let statusColor = task.status == "Pending" ? "orange" : "green";
            return (
              <aside key={task.id} className="card">
                <aside className="card-content">
                  <span className="card-header">
                    <h3>{task.name}</h3>
                    <button onClick={()=>handleDelete(task.id)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </span>
                  <p>{task.description}</p>
                </aside>
                <aside className="card-bottom">
                  <p>{task.tag}</p>
                  <span style={{ color: `${statusColor}` }}>{task.status}</span>
                  <input id={task.id} type="checkbox" name="check" />
                </aside>
              </aside>
            );
          })
      ) : (
        <p>You dont have any tasks yet...</p>
      )}
    </>
  );
}
