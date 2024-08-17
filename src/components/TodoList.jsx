import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { selectTodos, selectSearchTerm, selectIsSorted } from "../selectors";
import styles from "../App.module.css";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const searchTerm = useSelector(selectSearchTerm);
  const isSorted = useSelector(selectIsSorted);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isSorted) {
    filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <ul className={styles.todoList}>
      {filteredTodos.map(({ id, title, completed }) => (
        <TodoItem key={id} id={id} title={title} completed={completed} />
      ))}
    </ul>
  );
};

export default TodoList;
