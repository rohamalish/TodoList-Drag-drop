import React, { Fragment, useEffect, useState } from 'react';
import { TodoListContext } from './context/context';
import CreateTaks from './Components/CreateTaks';
import ListTasks from './Components/ListTasks/Components/ListTasks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {
  const [tasks, setTasks] = useState<any>([])
  useEffect(() => {
    const value = localStorage.getItem("tasks");
    setTasks(value && JSON.parse(value))
  }, [])
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-32 gap-10">
        <h1 className='flex justify-center  bg-slate-100 w-screen'>ToDo List with Darag and Drop</h1>
          <TodoListContext.Provider value={{
            tasks,
            setTasks
          }}>
            <CreateTaks />
            <ListTasks />
          </TodoListContext.Provider>
        </div>
      </DndProvider>
    </Fragment>
  )
}

export default App;
