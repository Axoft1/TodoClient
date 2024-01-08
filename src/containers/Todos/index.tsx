import Loader from "../../components/Loader";
import Todo from "../../components/Todo"
import { IToDo } from "../../types";
import { handleDelete, handleStatus, handleTitle, handleDescription, status } from "../../utils";
import './style.css'

interface PropsTodos {
    todos: IToDo[] | []
    setToDo: (param: IToDo[]) => void
    loading: boolean
    setLoading: (param: boolean) => void
}

const Todos = ({ todos, setToDo, loading, setLoading }: PropsTodos) => {

    const deleted = (id: string) => {
        handleDelete(id, setToDo, setLoading)
    }
    const updadeStatus = (id: string, text: string, isShow: any) => {
        handleStatus(id, text, setToDo, isShow, setLoading)
    }
    const updateTask = (id: string, task: string, isShow: any) => {
        handleTitle(id, task, setToDo, isShow, setLoading)
    }
    const updateDescription = (id: string, task: string, isShow: any) => {
        handleDescription(id, task, setToDo, isShow, setLoading)
    }

    return (
        <div className="todos">
            <div className="todos__body">
                {loading ? <Loader /> :                    
                    todos.length !== 0 
                            ?
                            todos.map((todo: any) =>
                                <Todo
                                    key={todo._id}
                                    todo={todo}
                                    deleted={deleted}
                                    updadeStatus={updadeStatus}
                                    updateTask={updateTask}
                                    status={status}
                                    updateDescription={updateDescription}
                                />)
                            :
                            'Нет задач'                    
                }
            </div>
        </div>
    )
}

export default Todos