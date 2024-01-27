import { useState } from 'react'
import './App.css'
import List from './List.jsx';
import Alert from './Alert.jsx';


function App() {
const [name, setName] = useState('');
const [list, setList] = useState([]);
const [isEditing, setIsEditing] = useState(false);
const [editID, setEditID] = useState(null);
const [alert, setAlert] = useState({show: true, msg:'',type:''});

const handleSubmit = (e) => {
  e.preventDefault()
if(!name){
  //display alert
}
else if(name && isEditing) {
  //deal with edit
} else {
  //show alert
  const newItem = {id: new Date().getTime().toString(), title:name};
  setList([...list, newItem]);
  setName('');
}

  return (
    <section className='form-container'>
      <form className="" action="" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
              <h2>Grocery Bud</h2>
              <div className='form-control'>
              <input className="input" type="text" placeholder='e.g. egg' value={name} onChange={(e) => setName(e.target.value)}/>
              <button type="submit" className='input-btn'>
                {isEditing ? 'edit' : 'submit' }Add item</button>
              </div>
            </form>

      <div className='grocery-container'>
        <List items={list}/>
        

        </div>

     
    </section>
  )
}

export default App
