import React, {useState, useEffect} from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';

function App () {
  const [allTodos, setAllTodos] = useState ([]);
  const [newTodoTitle, setNewTodoTitle] = useState ('');
  const [newDescription, setNewDescription] = useState ('');
  const [completedTodos, setCompletedTodos] = useState ([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);

  const handleAddNewToDo = () => {
    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
    // console.log (newToDoObj);
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push (newToDoObj);
    // console.log (updatedTodoArr);
    setAllTodos (updatedTodoArr);
    localStorage.setItem ('todolist', JSON.stringify (updatedTodoArr));
    setNewDescription ('');
    setNewTodoTitle ('');
  };

  useEffect (() => {
    let savedTodos = JSON.parse (localStorage.getItem ('todolist'));
    let savedCompletedToDos = JSON.parse (
      localStorage.getItem ('completedTodos')
    );
    if (savedTodos) {
      setAllTodos (savedTodos);
    }

    if (savedCompletedToDos) {
      setCompletedTodos (savedCompletedToDos);
    }
  }, []);

  const handleToDoDelete = index => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice (index,1);
    // console.log (index);

    // console.log (reducedTodos);
    localStorage.setItem ('todolist', JSON.stringify (reducedTodos));
    setAllTodos (reducedTodos);
  };

  const handleCompletedTodoDelete = index => {
    let reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice (index);
    // console.log (reducedCompletedTodos);
    localStorage.setItem (
      'completedTodos',
      JSON.stringify (reducedCompletedTodos)
    );
    setCompletedTodos (reducedCompletedTodos);
  };

  const handleComplete = index => {
    const date = new Date ();
    var dd = date.getDate ();
    var mm = date.getMonth () + 1;
    var yyyy = date.getFullYear ();
    var hh = date.getHours ();
    var minutes = date.getMinutes ();
    var ss = date.getSeconds ();
    var finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    // console.log (filteredTodo);

    let updatedCompletedList = [...completedTodos, filteredTodo];
    console.log (updatedCompletedList);
    setCompletedTodos (updatedCompletedList);
    localStorage.setItem (
      'completedTodos',
      JSON.stringify (updatedCompletedList)
    );
    // console.log (index);

    handleToDoDelete (index);
  };

  const [allTodoss, setAllTodoss] = useState ([]);
  const [newTodoTitlee, setNewTodoTitlee] = useState ('');
  const [newDescriptionn, setNewDescriptionn] = useState ('');
  const [completedTodoss, setCompletedTodoss] = useState ([]);
  const [isCompletedScreenn, setIsCompletedScreenn] = useState (false);
 
  const handleAddNewToDoo = () => {

    let newToDoObj = {
      title: newTodoTitlee,
      description: newDescriptionn,
    };
    // console.log (newToDoObj);
    let updatedTodoArr = [...allTodoss];
    updatedTodoArr.push (newToDoObj);
    // console.log (updatedTodoArr);
    setAllTodoss (updatedTodoArr);
    localStorage.setItem ('todolist', JSON.stringify (updatedTodoArr));
    setNewDescriptionn ('');
    setNewTodoTitlee ('');
  };
 
  useEffect (() => {
    let savedTodoss = JSON.parse (localStorage.getItem ('todolistt'));
    let savedCompletedToDoss = JSON.parse (
      localStorage.getItem ('completedTodos')
    );
    if (savedTodoss) {
      setAllTodos (savedTodoss);
    }

    if (savedCompletedToDoss) {
      setCompletedTodoss (savedCompletedToDoss);
    }
  }, []);

  const handleToDoDeletee = index => {
    let reducedTodoss = [...allTodoss];
    reducedTodoss.splice (index,1);
    // console.log (index);

    // console.log (reducedTodos);
    localStorage.setItem ('todolistt', JSON.stringify (reducedTodoss));
    setAllTodoss (reducedTodoss);
  };

  const handleCompletedTodoDeletee = index => {
    let reducedCompletedTodoss = [...completedTodoss];
    reducedCompletedTodoss.splice (index);
    // console.log (reducedCompletedTodos);
    localStorage.setItem (
      'completedTodoss',
      JSON.stringify (reducedCompletedTodoss)
    );
    setCompletedTodoss (reducedCompletedTodoss);
  };

  const handleCompletee = index => {
    const date = new Date ();
    var dd = date.getDate ();
    var mm = date.getMonth () + 1;
    var yyyy = date.getFullYear ();
    var hh = date.getHours ();
    var minutes = date.getMinutes ();
    var ss = date.getSeconds ();
    var finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTodoo = {
      ...allTodoss[index],
      completedOnn: finalDate,
    };

    // console.log (filteredTodo);

    let updatedCompletedList = [...completedTodos, filteredTodoo];
    console.log (updatedCompletedList);
    setCompletedTodos (updatedCompletedList);
    localStorage.setItem (
      'completedTodos',
      JSON.stringify (updatedCompletedList)
    );
    // console.log (index);

    handleToDoDelete (index);
  };

  function updateTotalItems(basketNumber) {
        const totalItems = document.getElementById(`totalItems${basketNumber}`);
        const itemsList = document.getElementById(`itemsList${basketNumber}`);

        const itemCount = itemsList.children.length;
        totalItems.textContent = itemCount;
    }
  return (
    <div className="App"  class="container">
    
    <div class="row">
    <div className="todo-wrapper" >
      <h1>Basket A </h1> 
      
      <div className="todo-listt">

          {isCompletedScreenn === false &&
            allTodoss.map ((item, index) => (
              <div className="todo-list-item" key={index}>
                
                  <h3>{item.title}</h3>
                  <h3>QTY: {item.description}</h3>

                
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleToDoDeletee (index)}
                  />
               
                </div>
              </div>
            ))}

         
        </div>

        <div className="todo-input" class="col-sm-10">
          <div className="todo-input-item">

            <input
              type="text"
              value={newTodoTitlee}
              onChange={a => setNewTodoTitlee (a.target.value)}
              placeholder="Input Fruit"
            />
          </div>
          <div className="todo-input-item">
            <input
              type="number"
              value={newDescriptionn}
              onChange={a => setNewDescriptionn (a.target.value)}
              placeholder="Quantity"
            />
          </div>
          <div className="todo-input-item">
            <button
              className="primary-btn"
              type="button"
              onClick={handleAddNewToDoo}
            >
              Add
            </button>
          </div>
        </div>
       
        
      </div>
      <div className="todo-wrapper" >
      <h1>Basket B</h1>
      <div className="todo-list">

          {isCompletedScreen === false &&
            allTodos.map ((item, index) => (
              <div className="todo-list-item" key={index}>
                
                  <h3>{item.title}</h3>
                  <h3>QTY: {item.description}</h3>

                
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleToDoDelete (index)}
                  />
               
                </div>
              </div>
            ))}

         
        </div>

        <div className="todo-input" class="col-sm-10">
          <div className="todo-input-item">

            <input
              type="text"
              value={newTodoTitle}
              onChange={e => setNewTodoTitle (e.target.value)}
              placeholder="Input Fruit"
              
            />
          </div>
          <div className="todo-input-item">
            <input
              type="number"
              value={newDescription}
              onChange={e => setNewDescription (e.target.value)}
              placeholder="Quantity"
            />
          </div>
          <div className="todo-input-item">
            <button
              className="primary-btn"
              type="button"
              onClick={handleAddNewToDo}
            >
              Add
            </button>
          </div>
        </div>
       
        
      </div>
      </div>
    </div>
  );
}

export default App;