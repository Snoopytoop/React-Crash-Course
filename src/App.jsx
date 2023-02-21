import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Title />
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" 
        paragraph="Code along with frontend simplified step by step" />
        <Todo title="Finish Interview Section"
        paragraph="Complete every interview question" />
        <Todo title="Land a 100k Job"
        paragraph="Apply to 100 jobs" />
      </div>
      {/* <Modal /> */}
    </>
  );
}

export default App;
