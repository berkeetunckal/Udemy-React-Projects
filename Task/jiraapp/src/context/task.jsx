import { createContext } from "react";
import axios from "axios";
const TasksContext = createContext();
import { useState } from "react";

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (taskName, taskDescription) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      taskName,
      taskDescription,
    });

    console.log(response);

    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
    console.log(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      taskName: updatedTitle,
      taskDescription: updatedTaskDesc,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          taskName: updatedTitle,
          taskDescription: updatedTaskDesc,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const sharedValuesandMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };

  return (
    <TasksContext.Provider value={sharedValuesandMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
