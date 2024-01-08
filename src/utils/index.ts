import axios from "axios"
import { IStatus, IToDo } from "../types"

const URL = "http://localhost:5000"

const status: IStatus[] = [
    { status: 'Выполнено' },
    { status: 'В работе' },
    { status: 'В ожидании' }
]

const getAllToDo = (setToDo: (e: IToDo[]) => void, setLoading?: (param: boolean) => void) => {
    if (setLoading) {
        setLoading(true)
    }
    axios.get(`${URL}/get/`)
        .then((res) => {
            setToDo(res.data)
            if (setLoading) {
                setLoading(false)
            }
        })
        .catch((err) => {
            console.log(err)
            if (setLoading) {
                setLoading(false)
            }
        })
}
const handleAdd = (task: string, description: string, status: string, setToDo: (e: IToDo[]) => void, setLoading: (param: boolean) => void) => {
    setLoading(true)
    axios.post(`${URL}/add/`, {
        task: task,
        description: description,
        status: status
    })
        .then(() => { 
            getAllToDo(setToDo); 
            setLoading(false) 
        })
        .catch((err) => { 
            console.log(err); 
            alert(err.message); 
            setLoading(false) 
        })
}
const handleDelete = (id: string, setToDo: (e: IToDo[]) => void, setLoading: (param: boolean) => void) => {
    setLoading(true)
    axios.delete(`${URL}/delete/` + id)
        .then(() => { 
            getAllToDo(setToDo); 
            setLoading(false) })
        .catch((err) => {
            console.log(err);
             alert(err.message);
            setLoading(false)
        })
}
const handleStatus = (id: string, status: string, setToDo: (e: IToDo[]) => void, isShow: (e: boolean) => void, setLoading: (param: boolean) => void) => {
    setLoading(true)
    axios.put(`${URL}/updateStatus/`, { _id: id, status })
        .then(() => {
            getAllToDo(setToDo)
            isShow(false)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err); alert(err.message);
            isShow(false)
            setLoading(false)
        })
}
const handleTitle = (id: string, task: string, setToDo: (e: IToDo[]) => void, isShow: (e: boolean) => void, setLoading: (param: boolean) => void) => {
    setLoading(true)
    axios.put(`${URL}/updateTitle/`, { _id: id, task })
        .then(() => {
            getAllToDo(setToDo)
            isShow(false)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err); alert(err.message);
            isShow(false)
            setLoading(false)
        })
}
const handleDescription = (id: string, description: string, setToDo: (e: IToDo[]) => void, isShow: (e: boolean) => void, setLoading: (param: boolean) => void) => {
    setLoading(true)
    axios.put(`${URL}/updateDescription/`, { _id: id, description })
        .then(() => {
            getAllToDo(setToDo)
            isShow(false)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err); alert(err.message);
            isShow(false)
            setLoading(false)
        })
}
export { getAllToDo, handleAdd, handleDelete, handleStatus, handleTitle, handleDescription, status }