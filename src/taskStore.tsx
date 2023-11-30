import { Provider, atom, useAtom } from "jotai";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// const tasksData: Task[] = [
//   { id: 1, title: "Task1", completed: false },
//   { id: 2, title: "Task2", completed: true },
//   { id: 3, title: "Task3", completed: true },
//   { id: 4, title: "Task4", completed: false },
// ];

export const taskAtom = atom<Task[]>([]);

export function useTasks() {
  return useAtom(taskAtom);
}

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};
