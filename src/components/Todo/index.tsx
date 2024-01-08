import { useState } from "react"
import './style.css'
import { IStatus, IToDo } from "../../types"

interface TodoProps {
    todo: IToDo,
    deleted: (_id: string) => void,
    updadeStatus: (_id: string, status: string, isShow: (e: boolean) => void) => void,
    updateDescription: (_id: string, description: string, isDescriptionShow: (e: boolean) => void) => void,
   
    updateTask: (_id: string, task: string, istaskShow: (e: boolean) => void) => void,
    status: IStatus[]
}

const Todo = ({ todo, deleted, updadeStatus, status, updateTask, updateDescription }: TodoProps) => {

    const [show, isShow] = useState<boolean>(false)
    const [taskShow, istaskShow] = useState<boolean>(false)
    const [descriptionShow, isDescriptionShow] = useState<boolean>(false)
    const [task, setTask] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    return <>
        <div className="todo" key={todo._id} >
            <div>
                {!taskShow && <div className="todo__task" onClick={() => { setTask(todo.task); istaskShow(true) }}>{todo.task}</div>}
                {taskShow &&
                    <div className="todo__task">
                        <input
                            autoFocus
                            type="text"
                            value={task}
                            onChange={e => setTask(e.target.value)}
                            onBlur={() => updateTask(todo._id, task, istaskShow)} />
                    </div>
                }
                {!descriptionShow && <div className="todo__description" onClick={() => { setDescription(todo.description); isDescriptionShow(true) }}>{todo.description || 'Добавить описание'}</div>}
                {descriptionShow &&
                    <div className="todo__description">

                        <textarea
                            autoFocus
                            value={description}
                            rows={3}
                            onChange={e => setDescription(e.target.value)}
                            onBlur={() => updateDescription(todo._id, description, isDescriptionShow)} />
                    </div>
                }

            </div>
            <div className="todo__menu">
                <div>
                    Статус: 
                    <button className="todo__menu_button" onClick={() => isShow(!show)}>{todo.status}</button>
                    {show &&
                        status.map((e: any) =>
                            <li key={e.status} className="todo__menu_status" onClick={() => updadeStatus(todo._id, e.status, isShow)}>
                                {e.status}
                            </li>)
                    }
                </div>
                <button onClick={() => deleted(todo._id)}>Удалить</button>
            </div>
        </div></>
}

export default Todo