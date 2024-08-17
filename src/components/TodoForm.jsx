import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todoActions";
import {
  setSearchTerm,
  toggleSort,
  setLoadingMessage,
} from "../actions/uiActions";
import styles from "../App.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { searchTerm, isSorted, isProcessing } = useSelector(
    (state) => state.ui
  );

  const handleInputChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleAddTodo = () => {
    if (isProcessing) {
      console.warn("Processing, please wait...");
      return;
    }

    if (searchTerm.trim() === "") {
      console.warn("Please enter a todo title.");
      return;
    }

    const newTodo = {
      title: searchTerm,
      completed: false, 
    };

    dispatch(setLoadingMessage("Adding todo..."));
    dispatch(addTodo(newTodo));
    dispatch(setSearchTerm("")); 
  };

  const handleToggleSort = () => {
    dispatch(toggleSort());
  };

  return (
    <div className={styles.controls}>
      <button onClick={handleAddTodo} disabled={isProcessing}>
        Add Todo
      </button>
      <input
        type="text"
        placeholder="Add/Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleToggleSort} disabled={isProcessing}>
        {isSorted ? "Unsort" : "Sort A-Z"}
      </button>
    </div>
  );
};

export default TodoForm;
