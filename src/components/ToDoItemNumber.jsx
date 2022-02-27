import React, { useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoContext';

function ToDoItemNumber() {

    const { toDos } = useContext(ToDoContext)

    useEffect(() => {
        console.log(`Initializing in the ToDoItemNumber.jsx: ${toDos.length}`)
    }, [toDos])

    return (
        <section className="section">
            <div className="container">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            The Number of item
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {toDos.length} items
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ToDoItemNumber;
