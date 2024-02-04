import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate}) {
  const [taskName, setTaskName] = useState(task ? task.taskName : "");
  const [taskDescription, setTaskDescription] = useState(task ? task.taskDescription : "");
  const { editTaskById, createTask } = useContext(TasksContext);

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleChangeTaskDesc = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskFormUpdate){
      //editTaskById(task.id, taskName, taskDescription); 
      onUpdate(task.id, taskName, taskDescription);
    }
    else{
    //onCreate(taskName, taskDescription);
    createTask(taskName, taskDescription);
    }
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div>
      {" "}
      {taskFormUpdate ? (
        <div className="task-create">
          <h3>Görevi Güncelleyin</h3>
          <form className="task-form">
            <label className="task-label">Görev Adı</label>
            <input
              value={taskName}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Görev Açıklaması</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDescription}
              onChange={handleChangeTaskDesc}
            />
            <button
              className="task-button"
              type="submit"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Görev Oluştur</h3>
          <form className="task-form">
            <label className="task-label">Görev Adı</label>
            <input
              value={taskName}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Görev Açıklaması</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDescription}
              onChange={handleChangeTaskDesc}
            />
            <button
              className="task-button"
              type="submit"
              onClick={handleSubmit}
            >
              Görev Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
