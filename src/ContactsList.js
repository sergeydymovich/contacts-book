import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removeContact, changeContact}  from "./actions.js"

const ContactList = () => {
	
	const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
	return (		
		<ul className="list">
			{ contacts.map((elem) => (
				
				<li className="list-item">
				<label>Имя:</label>
				<input type="text" value={elem.value} onChange={e => dispatch(changeContact(elem.id, e.target.value, e.target.type))} />
				<label>Номер:</label>
				<input type="number" value={elem.number} onChange={e => dispatch(changeContact(elem.id, e.target.value, e.target.type))} />
				<label>Email:</label>
				<input type="email" value={elem.email} onChange={e => dispatch(changeContact(elem.id, e.target.value, e.target.type))} />
				<button id="delete-button" onClick={() => dispatch(removeContact(elem.id))}>Удалить</button>
				</li>
			))}

    </ul>  
		
		
	)
}

export default ContactList;