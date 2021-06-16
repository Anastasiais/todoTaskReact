import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos]=useState([]);
  const [status, setStatus]= useState('all');
  const [filteredTodos, setFilteredTodos] =useState([])

 const filterHandler= () => {
   switch(status) {
     case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
     case 'uncompleted':
     setFilteredTodos(todos.filter(todo => todo.completed === false))
     break;
     default:
      setFilteredTodos(todos)
   }
 }

  return (
    <div className="App">
      <header>
      <h1>My ToDo List</h1>
      </header>
      <Form
      setInputText={setInputText}
      setTodos={setTodos}
      todos={todos}
      inputText={inputText}
      setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
