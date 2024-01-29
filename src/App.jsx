import React, { useState } from 'react';
import './App.css';
import List from './List.jsx';
import Alert from './Alert.jsx';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: 'hello world', type: 'danger' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true,'danger', 'please enter value')
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
        showAlert(true, 'success', 'item added to the list')


      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show , type, msg});
  }

  const clearList = () => {
    showAlert(true,'danger', 'empty list');
    setList([]);
  }

const removeItem = (id) => {
  showAlert(true,'danger', 'item removed');
  setList(list.filter((item) => item.id !== id )

  )
}

  return (
    <section className='form-container'>
      <form className='form' action='' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h2>Grocery List</h2>
      
          <input
            className='input'
            type='text'
            placeholder='e.g. egg'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='input-btn'>
            Add item
          </button>
          
          
          {/* <button type='submit' className='input-btn'>
            {isEditing ? 'edit' : 'submit'} Add item
          </button> */}
      
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} />
          <button className='clear-btn' onClick={clearList}>Clear Items</button>
        </div>
      )}
    </section>
  );
}

export default App;
