import React, {createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ToDoContext = createContext()

export const ToDoProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [subject, setSubject] = useState("")
    const [text, setText] = useState("")
    const [updateSubject, setUpdateSubject] = useState("")
    const [updateText, setUpdateText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [checked, setChecked] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [toDos, setToDos] = useState([])
    const [currentItemId, setCurrentItemId] = useState(0)

    const baseURL = 'https://todomanagerback123.herokuapp.com/todo'

    useEffect(() => {
        setIsLoading(false)
        fetchToDo()
        console.log("Initializing in Context")
    }, [])

    // Fetch ToDo
    const fetchToDo = () => {
        axios.get(`${baseURL}`)
        .then(res => {
            console.log(`fetchToDo is executed.`)
            const newToDos = res.data
            setToDos(newToDos)
        })
    }

    const addToDo = ([subject, text]) => {
        const todo = {id: null, subject: subject, text: text, done: false}
        axios.post(`${baseURL}`, todo)
        .then(res => {
            console.log(`addToDo is executed. Response header : ${res}`)
            fetchToDo()
        })
    };

    const updateToDo = (todo) => {
        console.log(`In the UpdateToDo 'todo' : ${todo}`)
        console.log(todo)
        axios.put(`${baseURL}`, todo)
        .then(res => {
            console.log(`updateToDo is executed. Response header : ${res}`)
            fetchToDo()
        })
    };

    const checkToDo = (checkedKey) => {
        toDos.map((item) => {
            if(item.id === checkedKey){
                item.done = !item.done
                axios.put(`${baseURL}`, item)
                .then(res => {
                    console.log(`checkToDo is executed.`)
                    fetchToDo()
                })        
            }            
        })
    };

    const deleteToDo = (item_id) => {
        axios.delete(`${baseURL}/${item_id}`)
        .then(res => {
            console.log(`deleteToDo is executed. Response header : ${res}`)
            fetchToDo()
        })
    }

    return <ToDoContext.Provider
            value={{
                isLoading,
                toDos,
                subject,
                updateSubject,
                text,
                updateText,
                btnDisabled,
                message,
                checked,
                modalStatus,
                currentItemId,
                fetchToDo,
                addToDo,
                updateToDo,
                deleteToDo,
                checkToDo,
                setSubject,
                setUpdateSubject,
                setText,
                setUpdateText,
                setBtnDisabled,
                setMessage,
                setChecked,
                setModalStatus,
                setCurrentItemId,
            }}
        >
        {children}
        </ToDoContext.Provider>
}

export default ToDoContext
