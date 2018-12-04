import React from "react"


const Todo = ({ name, id, complete, todoClick }) => (
  <li 
  onClick={() => todoClick(id)}
  style={complete ? {...styles.todo, ...styles.complete} : styles.todo } 
  >
    { name }
  </li>


)

const styles = {
  todo: { cursor: "pointer" },
  complete: {color: "grey", textDecoration: "line-through", },


}

export default Todo;