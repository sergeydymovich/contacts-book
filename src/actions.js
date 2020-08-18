import { v4 as uuidv4 } from 'uuid';

export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const CHANGE_CONTACT = "CHANGE_CONTACT";

export const addContact = (value, number, email) => {
	return {
		type: ADD_CONTACT,
		payload: {
			value,
			id: uuidv4(),
			number,
			email,
		},
	}
}

export const removeContact = (id) => {
	return {
		type: REMOVE_CONTACT,
		payload: {
			id,
		}
	}
}

export const changeContact = (id, newValue, type) => {
	return {
		type: CHANGE_CONTACT,
		payload: {
			id,
			newValue,
      type,
		}
	}
}