import "./App.scss";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <h1>To Do List</h1>
      <section className="bg">
        <section className="list">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
      </section>
    </main>
  );
}

export default App;
