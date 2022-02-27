import React, { useContext, useEffect } from 'react';
import Input from './Input';
import ToDoItemList from './ToDoItemList';
import ToDoItemNumber from './ToDoItemNumber';

function ToDo() {

    useEffect(() => {
        console.log("Initializing in the ToDo.jsx")
    }, [])

    return (
        <>
            {/*  Start Header section */}            
            <section className="hero is-small is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            TK ToDo Manager
                        </h1>
                        <h3 className="subtitle">
                            This is the application to manage personal ToDo TASK  
                        </h3>
                    </div>
                </div>
            </section>
            {/*  End Header section */}            

            {/*  Start Input field section */}     
            <Input />
            {/*  End Input field section */}     

            {/*  Start ToDoItemList section */}     
            <ToDoItemList />
            {/*  End ToDoItemList section */}     

            {/*  Start Footer section */}     
            <ToDoItemNumber />
            {/*  End Footer section */}     

        </>
    );
}

export default ToDo;
