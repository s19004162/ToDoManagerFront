import React, { useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoContext';
import EditToDo from './EditToDo';

function ToDoItem ( {item} ) {

    const { checked, setChecked, modalStatus, currentItemId,
            checkToDo, deleteToDo, setModalStatus, setCurrentItemId } = useContext(ToDoContext)

    useEffect(() => {
        console.log("Initializing in the ToDoItem.jsx")
    }, [])

    const handleModal = (e) => {
        setModalStatus(!modalStatus)
        setCurrentItemId(item.id)
    }

    const doNothing = () => {
        // Dummy handler to avoid an error
        // console.log("Do Nothing")
    }

    if(!modalStatus) {
        return (
            <>
                <div className="tile is-child is-4 box">
                    <div className="container">
                        <div className="card">
                            <header className="card-header card-header-color is-primary">
                                <p className="card-header-title is-dark">
                                    {item.subject}
                                </p>
                                    <button onClick={handleModal} className="button is-primary has-text-right btn-right-margin">Edit</button>
                                    <button onClick={() => deleteToDo(item.id)} className="delete is-large has-text-right" >
                                        <span>Delete</span>
                                    </button>
                            </header>
    
                            <div className="card-content">
                                <div className="content">
                                    <input
                                        type="checkbox"
                                        value="checkBoxStatus"
                                        checked={item.done}
                                        onChange={doNothing}
                                        onClick={() => checkToDo(item.id)}
                                    />
                                    <span className={item.done ? 'has-text-grey-light' : ''}>
                                        {item.text}
                                    </span>
                                </div>
                            </div>
    
                        </div>
                        <br />
                    </div>
                </div>
            </>
        )
    } else if (item.id === currentItemId) {
        return (
            <EditToDo item={item} />
        )
    } else {
        return null
    }
}

export default ToDoItem ;
    
