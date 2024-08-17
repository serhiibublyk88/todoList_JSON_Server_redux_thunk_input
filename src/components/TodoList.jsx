import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { selectTodos } from "../selectors/todosSelectors";
import { selectSearchTerm, selectIsSorted } from "../selectors/uiSelectors";
import styles from "../App.module.css";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const searchTerm = useSelector(selectSearchTerm);
  const isSorted = useSelector(selectIsSorted);

 
  const filteredTodos = todos.filter((todo) =>
    todo.title
      ? todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  
  const sortedTodos = isSorted
    ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
    : filteredTodos;

  return (
    <ul className={styles.todoList}>
      {sortedTodos.map(({ id, title, completed }) => (
        <TodoItem key={id} id={id} title={title} completed={completed} />
      ))}
    </ul>
  );
};

export default TodoList;
