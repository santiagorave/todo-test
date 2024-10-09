import { useEffect, useState, createContext } from "react";
import { getTasks } from "./services/getTasks";

export const taskContext = createContext([]);

export const TaskProvider = function ({ children }) {
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({id:null,title:'',desc:'',category:''});

  useEffect(() => {
    getTasks().then(setTasks);
  },[setTasks]);

  return <taskContext.Provider value={{tasks,modal,setModal,setTasks,data,setData,edit,setEdit}}>{children}</taskContext.Provider>;
};
