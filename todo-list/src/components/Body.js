import TodoItem from "./TodoItem"
import todoData from '../todoData'

function Body() {
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
        <div>
            {todoItems}
        </div>
    )
  }

  export default Body