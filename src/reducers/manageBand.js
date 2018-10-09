export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let bandObj = {
        id: Math.random()*10000000000000000,
        name: action.name
      }
      return { ...state, bands: [...state.bands, bandObj] };

    case 'DELETE_BAND':
    console.log(action)
      return {...state, bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
