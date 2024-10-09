import { useEffect, useState, createContext } from "react";
import { getTasks } from "./services/getTasks";

export const taskContext = createContext([]);

export const TaskProvider = function ({ children }) {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getTasks().then(setTasks);
  },[setTasks]);

  return <taskContext.Provider value={{tasks,modal,setModal,setTasks}}>{children}</taskContext.Provider>;
};
