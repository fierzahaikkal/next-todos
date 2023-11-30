import React from "react";
import Task from "./Task";

interface TaskListProps {
  tasks: { id: number; title: string; completed: boolean }[];
  filter: string;
  onTaskEdit: (taskId: number, newTitle: string) => void;
  onTaskDelete: (taskId: number) => void;
  onTaskToggleComplete: (taskId: number) => void;
}

export const TaskList = ({
  tasks,
  filter,
  onTaskToggleComplete,
  onTaskEdit,
  onTaskDelete,
}: TaskListProps) => {
  const filteredTasks =
    filter === "All"
      ? tasks
      : filter === "Doing"
      ? tasks.filter((task) => !task.completed)
      : tasks.filter((task) => task.completed);
  return (
    <div className=" text-medium-purple-700">
      <ul className="flex flex-col px-2 py-2 gap-y-4 ">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEdit={onTaskEdit}
            onDelete={onTaskDelete}
            onToggleComplete={onTaskToggleComplete}
          />

          // <li
          //   key={task.id}
          //   className={`flex gap-x-2  px-2 border-b border-medium-purple-400`}
          // >
          //   <Checkbox
          //     checked={task.completed}
          //     onChange={() => onTaskComplete(task.id)}
          //   />
          //   {task.title} - {task.completed ? "Completed" : "Doing"}
          // </li>
        ))}
      </ul>
    </div>
  );
};
