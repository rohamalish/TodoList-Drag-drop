import { Fragment } from "react/jsx-runtime"
import Header from "./Header"
import { STAUS_TYPE } from "../../statusTypes"
import Task from "./Task"
import { useDrop } from "react-dnd"
interface Props {
    status?: string
    tasks?: any,
    setTasks?: any,
    inprogress?: []
    todos?: []
    done?: []
}
function Section({ ...props }: Props) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop:(item:any)=>addItemToSection(item?.id),
        collect: (monitor) => ({
            isOver: !!monitor?.isOver()
        })
    }))

    let text = "Todo";
    let bg = "bg-slate-400";
    let tasksToMap = props?.todos;

    if (props?.status === STAUS_TYPE.inprogress) {
        text = "In Propgress";
        bg = "bg-blue-500";
        tasksToMap = props?.inprogress
    }
    if (props?.status === STAUS_TYPE.done) {
        text = "Done";
        bg = "bg-green-500";
        tasksToMap = props?.done
    }
    if (props?.status === STAUS_TYPE.todo) {
        text = "Todo";
        bg = "bg-red-500";
        tasksToMap = props?.todos
    }

const addItemToSection = (id:number)=>{
    const setTasks=props?.setTasks
    setTasks((prev:any)=>{
        const mTasks = prev?.map((item:any)=>{
            if(item?.id === id){
                return {...item,status:props?.status}
            }
            return item
        });
        localStorage.setItem("tasks",JSON.stringify(mTasks))

        return mTasks;
    })
}

    return (
        <Fragment>
            <div ref={drop} className={`w-64 ${isOver ? "bg-slate-200" : " "}`}>
                <Header
                    text={text}
                    bg={bg}
                    count={tasksToMap?.length}
                />
                {tasksToMap && tasksToMap?.length > 0 && tasksToMap?.map((task: any) =>
                    <Task
                        task={task}
                        tasks={props?.tasks}
                        setTasks={props?.setTasks}
                        key={task?.id} />)}
            </div>

        </Fragment>
    )
}


export default Section