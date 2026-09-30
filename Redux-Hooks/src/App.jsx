import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './slice/todoSlice'
import styles from './App.module.css'


function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo.todos)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = ({ title }) => {
    dispatch(addTodo(title))
    reset()
  }

  return (
    <main className={styles.appShell}>
    <section className={styles.todoCard} aria-labelledby="page-title">
    <div className={styles.eyebrow}>Your tasks</div>
    <div className={styles.headingRow}>
      <div>
        <h1 id="page-title">Get things done, one step at a time.</h1>
        <p className={styles.intro}>Add a task to keep track of what you need to do.</p>
      </div>
      <div className={styles.todoCount} aria-label={`${todos.length} tasks`}>
        {String(todos.length).padStart(2, '0')}
      </div>
    </div>

    <form className={styles.todoForm} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="todo-title">New task</label>
      <div className={styles.inputRow}>
        <input
          id="todo-title"
          type="text"
          placeholder="Enter a task..."
          {...register('title', {
            required: 'Please enter a task.',
            validate: (value) => value.trim().length > 0 || 'Please enter a task.',
          })}
        />
        <button type="submit">Add task <span aria-hidden="true">+</span></button>
      </div>
      {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}
    </form>

    <div className={styles.listHeading}>
      <h2>Your tasks</h2>
      <span>{todos.length === 1 ? '1 task' : `${todos.length} tasks`}</span>
    </div>

    {todos.length === 0 ? (
      <div className={styles.emptyState}>
      <span className={styles.emptyIcon} aria-hidden="true">&#10003;</span>
        <p>No tasks yet.</p>
        <span>Add a task above to get started.</span>
      </div>
    ) : (
          <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li className={styles.todoItem} key={todo.id}>
            <span className={styles.taskMark} aria-hidden="true" />
            <span className={styles.taskTitle}>{todo.title}</span>
            <button
              className={styles.removeButton}
              type="button"
              onClick={() => dispatch(removeTodo(todo.id))}
              aria-label={`Remove ${todo.title}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
    </section>

      <footer className={styles.footer}>Built for a calmer, more intentional day.</footer>
    </main>
  )
}

export default App
