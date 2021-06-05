const initialState = {
  list: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGE_DATA":
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
