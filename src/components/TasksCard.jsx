import { useContext } from "react";
import { taskContext } from "../Context";
export default function TasksCard() {
  const { tasks } = useContext(taskContext);
  return (
    <>
    {tasks.length>0 ? tasks.map(task => {

      return( <aside key={task.id} className="card">
        <aside className="card-content">
          <span className="card-header">
            <h3>{task.name}</h3>
           <span><i className="fa-solid fa-xmark"></i></span>
            
          </span>
          <p>
            {task.description}
          </p>
        </aside>
        <aside className="card-bottom">
          <p>{task.tag}</p>
          <span style={{ color: "red" }}>{task.status}</span>
        </aside>
      </aside>)
    }) : <p>You dont have any tasks yet...</p>}
    
    </>
   
  );
}
