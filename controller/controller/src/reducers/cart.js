const initialState= {
    card: [],
};

const cardReducer = (state = initialState, action) =>{
    switch(action.type){
      case  'ADD_CART': {
            const newData = action.payload;

            return {
                ...state,
                card: [newData, ...state.card]
            }
        }

        default:
            return state;
    }
};

export default cardReducer;