import { useContext } from "react";
import { taskContext } from "../Context";
import { deleteTasks } from "../services/deleteTask";
import { getTasks } from "../services/getTasks";
import { patchTask } from "../services/patchTask";
export default function TasksCard({ filter }) {
  const { tasks, setTasks,setModal,setData,setEdit } = useContext(taskContext);
  const handleDelete = function(taskId){
    deleteTasks(taskId).then(()=> getTasks().then(setTasks));
  }
  const handleEdit = function(task){
    setModal(true)
    setData({id:task.id,title:task.name,desc:task.description,category:task.tag})
    setEdit(true);
  }
  const handlePatch = function(id){
    patchTask(id).then(()=> getTasks().then(setTasks));
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
                    <button onClick={()=>handleEdit(task)} ><i className="fa-solid fa-pencil"></i></button>
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
                  {task.status != "Completed" ? <button onClick={()=>handlePatch(task.id)}>Complete</button> : null}
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
