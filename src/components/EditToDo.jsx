import React, { useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoContext';

function EditToDo( {item} ) {

    const { updateSubject, updateText, btnDisabled, message, modalStatus, 
            setUpdateSubject, setUpdateText,  setBtnDisabled, setMessage, setModalStatus, updateToDo } = useContext(ToDoContext)

    useEffect(() => {
        console.log("Initializing in the EditToDo, itemId is : ", item.id)
        setUpdateSubject(item.subject)
        setUpdateText(item.text)
    }, [])

    //Handle modal view for testing purpose
    const handleModal = (e) => {
        setModalStatus(!modalStatus)
    }

    const handleSubjectChange = (e) => {
        if(updateSubject === '') {
            setMessage('')
            setBtnDisabled(true)
        } else if (updateSubject !== '' && updateSubject.trim().length <= 5) {
            setBtnDisabled(true)
            setMessage('Subject must be at least 5 characters')
        } else if (updateSubject.trim().length > 30) { 
            setBtnDisabled(true)
            setMessage('Subject must be less than 30 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setUpdateSubject(e.target.value)
    }

    const handleTextChange = (e) => {
        if(updateText === '') {
            setMessage('')
            setBtnDisabled(true)            
        } else if (updateText !== '' && updateText.trim().length <= 5) {
            setBtnDisabled(true)
            setMessage('Text must be at least 5 characters and less than 50 characters')
        } else if (updateText.trim().length > 50) { 
            setBtnDisabled(true)
            setMessage('Text must be less than 50 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setUpdateText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ((updateSubject !== '' && updateSubject.trim().length > 5) && (updateText !== '' && updateText.trim().length > 5)) {
            const todo = {id:item.id, subject: updateSubject, text: updateText, done: false}
            updateToDo(todo)
            setUpdateSubject('')
            setUpdateText('')
            setBtnDisabled(true)
            handleModal()
         } else {
            setMessage('Please complete input form.')
         } 
    }

    return (
        <>
            <div id="overlay">
                <div className="container is-fluid" id="content">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                            EDIT FORM
                            </p>
                        </header>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input 
                                    className='input'
                                    onChange={handleSubjectChange}  
                                    type='text'
                                    placeholder='Write a ToDo subject'
                                    value={updateSubject}
                                />
                                <input
                                    className='input'
                                    onChange={handleTextChange} 
                                    type='text' 
                                    placeholder='Write a ToDo content'
                                    value={updateText}
                                />
                                <div className="has-text-right">
                                    <button className="button is-primary" 
                                        type="submit" disabled={btnDisabled}>Update</button>
                                    <button onClick={handleModal} className="button is-warning">close</button>
                                </div>
                            </div>
                        </form>
                        {message && <div className='message'>{message}</div>}
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditToDo;
