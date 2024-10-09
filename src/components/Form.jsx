import { useRef } from "react"
import { postTasks } from "../services/postTasks";
import { useContext } from "react";
import { taskContext } from "../Context";
import { getTasks } from "../services/getTasks";
export default function Form(){
  const { setModal,setTasks} = useContext(taskContext);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const tagRef = useRef(null);
    const handleSubmit = function(evt){
        evt.preventDefault();
    }
    const addTask = function(){
        postTasks(titleRef.current.value,descRef.current.value,tagRef.current.value).then(()=> getTasks().then(setTasks));
    }

    return( 
    <form onSubmit={(e)=> handleSubmit(e)}>
    <input required ref={titleRef} name="title" type="text" placeholder="Title..." />
    <textarea name="description" required cols={10} rows={5} ref={descRef} placeholder="Description..."></textarea>
    <input name="category" ref={tagRef} type="text" placeholder="Category..." />
    <button onClick={()=>{addTask(); setModal(false);}}>Add task</button>
</form>)
}