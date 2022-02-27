import React, { useContext, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDoContext from '../context/ToDoContext';

function ToDoItemList() {

    const { toDos } = useContext(ToDoContext)

    const numberOfTilesInOneRow = 3

    useEffect(() => {
        console.log("Initializing in the ToDoItemList.jsx")
    }, [toDos])

    const sliceToDos = (toDos, numberOfTilesInOneRow) => {
        const tempToDos = toDos
        const length = Math.ceil(tempToDos.length / numberOfTilesInOneRow)
        const toDosForTails = Array(length).fill().map((_, i) =>{
            // To devide array to 3 ToDo List item in order to show tails for each 3 items
            return tempToDos.slice(i*numberOfTilesInOneRow, (i+1)*numberOfTilesInOneRow)
        })
        return toDosForTails
    }

    return (
        <>
            {/*  Start ToDoItemList section */}     
            <section className="section">
                <div className="container">
                        {/*  Check if the number of ToDo List is 0
                            if it is 0 then showing error message */}     
                        {toDos.length !== 0 ? (         
                                    sliceToDos(toDos, numberOfTilesInOneRow).map((toDoList, index) => {
                                        return (
                                            <div className="tile is-ancestor" key={index}>
                                                <div className="tile is-parent">
                                                {toDoList.map(item => (
                                                    <ToDoItem key={item.id} item={item}/>  
                                                ))}
                                                </div>
                                            </div>
                                        )
                                    })

                            ) : (
                                    <div className="section">
                                        <div className="tags">
                                            <span className="tag is-warning is-large">No Item is registered.</span>
                                        </div>
                                    </div>
                                )
                        }
                </div>
            </section>
            {/*  End ToDoItemList section */}     
        </>
    );
}

export default ToDoItemList;
