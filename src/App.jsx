import { useState } from 'react'
import './App.css'
import List from './List.jsx';

function App() {
const [name, setName] = useState('');
const [list, setList] = useState([]);
const [isEditing, setIsEditing] = useState(false);
const [editID, setEditID] = useState(null);
const [alert, setAlert] = useState({show:false,msg:'',type:''});

  return (
    <section className='form-container'>
      <div className='grocery-container'></div>
      <form action="">
        <h2>Grocery Bud</h2>
        <input className="input" type="text"  />
        <button className='input-btn'>Add item</button>
      </form>
    </section>
  )
}

export default App
