const positions = (state = { top:0, left:0, right: null, bottom:null }, action) =>{
    switch (action.type) {
      case 'SET_BOX_POSITION':
        const {payload} = action;
        const {top, bottom, left, right} = payload;
        return {top, bottom, left, right};
      default:
        return state
    }
  }


  export default positions