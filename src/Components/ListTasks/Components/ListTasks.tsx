import React, { Fragment, useContext, useEffect, useState } from 'react'
import { TodoListContext } from '../../../context/context'
import Section from './Section'
import { STAUS_TYPE } from '../../statusTypes'


type Props = {}

function ListTasks({ }: Props) {
  const { tasks, setTasks } = useContext(TodoListContext)
  const [todos, setTodos] = useState<any>([])
  const [inprogress, setInProgress] = useState<any>([])
  const [done, setDone] = useState<any>([])

  useEffect(() => {
    const fTodos = tasks?.filter((task: any) => task.status === STAUS_TYPE.todo)
    const fInprogress = tasks?.filter((task: any) => task.status === STAUS_TYPE.inprogress)
    const fDone = tasks?.filter((task: any) => task.status === STAUS_TYPE.done)

    setTodos(fTodos)
    setInProgress(fInprogress)
    setDone(fDone)
  }, [tasks])

  const statuses = [STAUS_TYPE.todo, STAUS_TYPE.inprogress, STAUS_TYPE.done]
  return (
    <div className='flex gap-16'>
      
      {
        statuses.map((status: any, index) =>
          <Section
            key={index}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            inprogress={inprogress}
            todos={todos}
            done={done}
          />

        )
      }
    </div>
  )
}

export default ListTasks


