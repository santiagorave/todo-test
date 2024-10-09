import Form from "./Form";
import { useContext } from "react";
import { taskContext } from "../Context";
export default function Modal() {
  const {setModal} = useContext(taskContext);

  return (
    <section id="myModal" className="modal">
      <aside className="modal-content">
        <span className="modal-content-head">
          <p>Add a new Task</p>
           <button onClick={()=> setModal(false)}><i  className="fa-solid fa-xmark"></i></button>
        </span>
        <Form/>
      </aside>
    </section>
  );
}
