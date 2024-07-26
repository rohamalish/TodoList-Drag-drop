import React, { useContext, useState } from 'react'
import { TodoListContext } from '../context/context'

type Props = {}

function CreateTaks({ }: Props) {
    const { setTasks } = useContext(TodoListContext)
    const [task, setTask] = useState<any>({
        id: "",
        name: "",
        status: "todo"
    })
    const id = Math.random().toString(36).substring(2, 10);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setTasks((prev: any) => {
            const list = [...prev, task]
            localStorage.setItem("tasks", JSON.stringify(list))
            return list
        })
    }

    return (
        
        <form
            onSubmit={handleSubmit}>
            <input
                type='text'
                className='border-2 border-slate-420 bg-slate-100 rounded-md mr-3 h-10 w-64 px-1 '
                value={task?.name}
                onChange={(e) => setTask({ ...task, id: id, name: e.target?.value })}
                maxLength={24}
            />
            <button className='bg-green-800 rounded-md px-4 h-10 text-white'>
                Create
            </button>
        </form>
    )
}

export default CreateTaks