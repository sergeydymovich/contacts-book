import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './actions.js';


const ContactForm = () => {
	
	const [value, setValue] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(addContact(value, number, email));
		setValue("");
		setNumber("");
		setEmail("");
	}

	 
	return (
		<>
		<h3>Введите данные о пользователе</h3>
		<form onSubmit={handleClick}>
			<label>Имя</label>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
			<label>Номер</label>
			<input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			<label>Email</label>
			<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<button type="submit" disabled={!number || !value || !email}  >Отправить</button>
		</form>
		</>
	)
}

export default ContactForm;