import { useContext } from "react";
import TaskContext from "./taskContext";

const useTasks = () => useContext(TaskContext);

export default useTasks;
