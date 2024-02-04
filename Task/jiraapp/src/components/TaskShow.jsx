import { useState } from "react"
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskShow({task}) {
    const [showEdit, setShowEdit] = useState(false)
    const {deleteTaskById, editTaskById} = useContext(TasksContext);

    const handleDeleteClick = () => {
        //onDelete(task.id);
        deleteTaskById(task.id);
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    const handleSubmit = (id, updatedTitle, updatedTaskDesc) =>{
        setShowEdit(false);
        //onUpdate(id, updatedTitle, updatedTaskDesc);
        editTaskById(id, updatedTitle, updatedTaskDesc);
    }

    return (  
    <div className="task-show">
        {showEdit ? (
            <TaskCreate task={task} taskFormUpdate = {true} onUpdate={handleSubmit}/>
) : (
        <div>
        <h3>Görev İsmi</h3>
        <p>{task.taskName}</p>
        <h3>Görev Açıklaması</h3>
        <p>{task.taskDescription}</p>
        <div>
        <button className="delete-button" onClick={handleDeleteClick}>Görevi Sil</button>
        <button className="task-edit" onClick={handleEditClick}>Görevi Düzenle</button>
        </div>
      
    </div>)}
    </div>
    );
}

export default TaskShow;