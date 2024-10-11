import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons

export default function TodoCard(props) {
    const { todos,handleDeleate,index,handleEdit } = props;
  
    return (
        <li style={{ 
            backgroundColor: 'whitesmoke', 
            margin: '5px', 
            padding: '12px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{todos}</span>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={()=>{handleEdit(index)}}>

                <FontAwesomeIcon  icon={faPenToSquare} style={{ cursor: 'pointer', color: '#4CAF50' }} />
              </button>
              <button onClick={()=>{handleDeleate(index)}}>

                <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer', color: '#F44336' }} />
              </button>
            </div>
        </li>
    );
}
