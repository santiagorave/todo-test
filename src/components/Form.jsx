import { useRef } from "react"
import { postTasks } from "../services/postTasks";

export default function Form(){
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const tagRef = useRef(null);
    const handleSubmit = function(evt){
        evt.preventDefault();
    }

    const addTask = function(){
        postTasks(titleRef.current.value,descRef.current.value,tagRef.current.value)
    }

    return( 
    <form onSubmit={(e)=> handleSubmit(e)}>
    <input ref={titleRef} type="text" placeholder="Title..." />
    <textarea ref={descRef} placeholder="Description..."></textarea>
    <input ref={tagRef} type="text" placeholder="Category..." />
    <button onClick={()=>addTask()}>Add task</button>
</form>)
}