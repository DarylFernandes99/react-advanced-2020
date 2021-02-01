export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'Item Added'
      };
    }
    if (action.type === 'NO_VALUE') {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Please enter Value'
      };
    }
    if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
  
      return {
        ...state,
        people: newPeople,
      };
    }
    if (action.type === 'CLOSE_MODAL') {
      return {
        ...state,
        isModalOpen: false,
        modalContent: 'Modal Closed'
      };
    }
    throw new Error('No Matching Action Types');
  }