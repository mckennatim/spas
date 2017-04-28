
const geniot=(state, action) =>{
  switch (action.type) {
    case 'UR_APPS_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case "UR_APPS_LOADED" :
      return{
        ...state,
        isLoading: false,   
        devices: action.payload
      }
    default:
      return state;
  }
}

export {geniot}