const positions = (state = { top:0, left:0, right: null, bottom:null, transform: 'translate(0, 0)'}, action) =>{
    switch (action.type) {
      case 'SET_BOX_POSITION':
        const {payload} = action;
        const {top, bottom, left, right, transform} = payload;
        return {top, bottom, left, right, transform};
      default:
        return state
    }
  }

  export default positions