import { useEffect, useState } from "react"
import { FormTodo, Todos } from "../../containers/"
import { getAllToDo } from "../../utils"
import { IToDo } from "../../types"
import './style.css'

const Main = ():JSX.Element => {
    const [todos, setToDo] = useState<IToDo[]>([])
    const [loading, setLoading] = useState(false)

    useEffect((): void => {
        getAllToDo(setToDo, setLoading)
    }, [])


    return (
        <>
            <h2>Добавить задачу</h2>
            <FormTodo setToDo={setToDo} setLoading={setLoading}/>
            <h2>Задачи</h2>           
            <Todos todos={todos} setToDo={setToDo} loading={loading} setLoading={setLoading} />
        </>
    )
}
export default Main