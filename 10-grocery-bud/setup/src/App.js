import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName ] = useState('');
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});
  
  const handleSubmit = (e) => {
    e.preventDefault();
  } 

  const clearItem = () => {
    console.log('clear')
  }
  return (
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={handleSubmit}></form>
      {alert.show && <Alert/>}
      <h3>grocery bug</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="eggs" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="submit-btn" type="submit">
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
      <div className="grocery-container">
        <List/>
        <button className="clear-btn" onClick={() => clearItem()}>clear items</button>
      </div>
    </section>
  )
}

export default App
