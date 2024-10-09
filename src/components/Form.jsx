import { useRef,useContext } from "react"
import { postTasks } from "../services/postTasks";
import { taskContext } from "../Context";
import { getTasks } from "../services/getTasks";
import { updateTasks } from "../services/updateTask";
export default function Form(){
  const { setModal,setTasks,data,edit} = useContext(taskContext);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const tagRef = useRef(null);
    const handleSubmit = function(evt){
        evt.preventDefault();
    }
    const addTask = function(){
      if(titleRef.current.value!='' && descRef.current.value!='') postTasks(titleRef.current.value,descRef.current.value,tagRef.current.value).then(()=> getTasks().then(setTasks)).then(setModal(false));
    }
    const editTask = function(){
      if(titleRef.current.value!='' && descRef.current.value!='') updateTasks(data.id,titleRef.current.value,descRef.current.value,tagRef.current.value).then(()=> getTasks().then(setTasks)).then(setModal(false));
    }
    return( 
    <form onSubmit={(e)=> handleSubmit(e)}>
    <input defaultValue={data.title} required ref={titleRef} name="title" type="text" placeholder="Title..." />
    <textarea defaultValue={data.desc} name="description" required cols={10} rows={5} ref={descRef} placeholder="Description..."></textarea>
    <input defaultValue={data.category} name="category" ref={tagRef} type="text" placeholder="Category..." />
    <button onClick={()=>{
       if(edit){
        editTask();
       }else{
        addTask();
       } 
        }}>{edit ? 'Edit task' : 'Add task'}</button>
</form>)
}