import { createContext } from "react";
import { ITodoList } from "./meta/types";

export const TodoListContext = createContext<ITodoList>({
    tasks: [{
        id:0,
        name:"",
        status:"todo"
    }],
    setTasks: ()=>{}
});
