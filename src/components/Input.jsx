import React, {useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoContext';

function Input() {

    const { subject, text, btnDisabled, message,  
        setText, setSubject, setBtnDisabled, setMessage, addToDo } = useContext(ToDoContext)

    useEffect(() => {
        setSubject("")
        setText("")
    }, [])

    const handleSubjectChange = (e) => {
        if(subject === '') {
            setMessage('')
            setBtnDisabled(true)
        } else if (subject !== '' && subject.trim().length <= 5) {
            setBtnDisabled(true)
            setMessage('Subject must be at least 5 characters')
        } else if (subject.trim().length > 30) { 
            setBtnDisabled(true)
            setMessage('Subject must be less than 30 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setSubject(e.target.value)
    }

    const handleTextChange = (e) => {
        if(text === '') {
            setMessage('')
            setBtnDisabled(true)            
        } else if (text !== '' && text.trim().length <= 5) {
            setBtnDisabled(true)
            setMessage('Text must be at least 5 characters and less than 50 characters')
        } else if (text.trim().length > 50) { 
            setBtnDisabled(true)
            setMessage('Text must be less than 50 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ((subject !== '' && subject.trim().length > 5) && (text !== '' && text.trim().length > 5)) {
            addToDo([subject, text])
            setSubject('')
            setText('')
            setBtnDisabled(true)
         } else {
            setMessage('Please complete input form.')
         } 
    }

    return (
        <section className="section">
            <div className="tile">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                        Adding a ToDo item
                        </p>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                className='input is-link'
                                onChange={handleSubjectChange}  
                                type='text' 
                                placeholder='Write a ToDo subject'
                                value={subject}
                            />
                            <input
                                className='input is-link'
                                onChange={handleTextChange} 
                                type='text' 
                                placeholder='Write a ToDo content'
                                value={text}
                            />
                            <div className="has-text-right">
                                <button className="button is-info" 
                                    type="submit" disabled={btnDisabled}>Send</button>
                            </div>
                        </div>
                        {message && <div className='message'>{message}</div>}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Input;