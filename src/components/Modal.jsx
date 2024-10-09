import Form from "./Form";

export default function Modal() {
  return (
    <section id="myModal" className="modal">
      <aside className="modal-content">
        <span className="modal-content-head">
          <p>Add a new Task</p>
           <i className="fa-solid fa-xmark"></i>
        </span>
        <Form/>
      </aside>
    </section>
  );
}
