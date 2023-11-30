import React, { useState } from "react";
import { Checkbox } from "./common/Checkbox";
import Button from "./common/Button";
import { IconButton } from "./common/IconButton";
import { IconCheck, IconEdit, IconTrash } from "@tabler/icons-react";

interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onEdit: (taskId: number, newTitle: string) => void;
  onDelete: (taskId: number) => void;
  onToggleComplete: (taskId: number) => void;
}

function Task({ task, onEdit, onDelete, onToggleComplete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(task.id, newTitle);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <li
      className={`flex gap-x-2 w-full px-2 py-2 border-b border-medium-purple-400 leading-4`}
    >
      <Checkbox
        onChange={() => onToggleComplete(task.id)}
        checked={task.completed}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleSaveClick}
            autoFocus
          />
          <IconButton
            onClick={handleSaveClick}
            className="flex float-right items-end justify-end text-right ml-auto"
          >
            <IconCheck />
          </IconButton>
        </>
      ) : (
        <>
          <span className="text-md">{task.title}</span>
          <div className="flex float-right items-end justify-end text-right ml-auto">
            <IconButton onClick={handleEditClick} className={``}>
              <IconEdit />
            </IconButton>
            <IconButton onClick={handleDeleteClick} className={``}>
              <IconTrash />
            </IconButton>
          </div>
        </>
      )}
    </li>
  );
}

export default Task;
