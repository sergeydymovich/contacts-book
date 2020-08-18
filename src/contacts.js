import { ADD_CONTACT, REMOVE_CONTACT, CHANGE_CONTACT } from "./actions";

const contacts = (state = [], action) => {
	switch (action.type) {
		case ADD_CONTACT: 
		  return [{
				id: action.payload.id,
				value: action.payload.value,
				number: action.payload.number,
				email: action.payload.email,
			}, 
			...state, ];

			case REMOVE_CONTACT:
				return state.filter(elem => elem.id !== action.payload.id);

			case CHANGE_CONTACT:

				if (action.payload.type === "text") {
					return state.map(elem => (
						elem.id === action.payload.id ? {...elem, value : action.payload.newValue } : elem
					));
				}
				if (action.payload.type === "number") {
					return state.map(elem => (
						elem.id === action.payload.id ? {...elem, number : action.payload.newValue } : elem
					));
				}
				if (action.payload.type === "email") {
					return state.map(elem => (
						elem.id === action.payload.id ? {...elem, email : action.payload.newValue } : elem
					));
				}
        break;
				default: 
					return state;

	}
}

export default contacts;