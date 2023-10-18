import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext({} as TaskContextType);

export default TaskContext;
