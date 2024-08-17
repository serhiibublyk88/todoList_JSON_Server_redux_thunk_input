import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_TODOS,
  FETCH_NEXT_TODO_SUCCESS,
} from "../actions/todoActions";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_NEXT_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todosReducer;
