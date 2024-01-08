import { useState } from "react"
import { handleAdd, status } from "../../utils"
import './style.css'
import { IToDo } from "../../types"

interface propsFormTodo {
    setToDo: (param: IToDo[]) => void
    setLoading: (param: boolean) => void
}

const FormTodo = ({ setToDo, setLoading }: propsFormTodo) => {
    const [text, setText] = useState<string>('')
    const [description, setDescriptiont] = useState<string>('')
    const [statusValue, setStatusValue] = useState<string>(status[0].status)
    const [valid, setValid] = useState<boolean>(true)

    const validTask = () => {
        if (!text) {
            setValid(false)
            return
        } else {
            setValid(true)
        }
    }
    const onSubmit = (e: any) => {
        e.preventDefault()
        if (!text) {
            setValid(false)
            return
        }
        handleAdd(text, description, statusValue, setToDo, setLoading)
        setText('')
        setDescriptiont('')
    }

    return (
        <div className="form">
            <form onSubmit={onSubmit} >
                <span>Задача:</span>
                <div className="form__task">
                    <input
                        className={!valid ? 'error' : ''}
                        placeholder="Задача"
                        type='text'
                        value={text}
                        onFocus={() => setValid(true)}
                        onBlur={validTask}
                        onChange={(e) => setText(e.target.value)}
                    ></input>
                    {!valid && <span>Напишите задачу</span>}
                </div >
                <span>Описание:</span>
                <textarea
                    rows={4}
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescriptiont(e.target.value)}
                ></textarea>
                <span>Статус:</span>
                <select>
                    {status.map(e =>
                        <option
                            key={e.status}
                            onClick={() => setStatusValue(e.status)}
                        >{e.status}</option>)}
                </select>
                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}

export default FormTodo