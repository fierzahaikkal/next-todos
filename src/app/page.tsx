"use client";
import Card from "@/components/Card";
import { FilterButton } from "@/components/FilterButton";
import { TaskList } from "@/components/TaskList";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useState } from "react";
import { Bungee } from "next/font/google";
import { TaskProvider, useTasks } from "@/taskStore";

const font = Bungee({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useTasks();

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleEditTask = (taskId: number, newTitle: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TaskProvider>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-white bg-gradient-to-b from-medium-purple-300 to-medium-purple-500">
        <h1 className={`mt-6 text-3xl font-bold text-center ${font.className}`}>
          List your daily todos
        </h1>
        <p className="w-1/2 text-center text-md">
          Discover a new level of productivity with our game-changing ToDo app.
          Effortlessly manage tasks, turning chaos into organized success.
          Experience the thrill of mastering your schedule as you navigate tasks
          seamlessly. Unleash your inner superhero with supercharged features
          that eliminate procrastination. Embrace a world where dreams meet
          deadlines and seize each moment with our extraordinary app. Join the
          productivity revolution today.
        </p>

        <Card>
          <Card.Title>Lists</Card.Title>
          <div className="flex gap-x-2">
            <Input
              type="text"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleAddTask();
                }
              }}
              placeholder="what would you like to do now..."
            ></Input>
            <Button onClick={handleAddTask}>Add</Button>
            {/* <Button
            onClick={handleClick}
            className="bg-rose-500 hover:bg-rose-700 active:bg-rose-600"
          >
            Delete
          </Button> */}
          </div>
          <FilterButton
            selectedFilter={filter}
            onFilterChange={handleFilterChange}
          ></FilterButton>
          <TaskList
            tasks={tasks}
            filter={filter}
            onTaskEdit={handleEditTask}
            onTaskDelete={handleDeleteTask}
            onTaskToggleComplete={handleToggleComplete}
          />
        </Card>
      </div>
    </TaskProvider>
  );
}
