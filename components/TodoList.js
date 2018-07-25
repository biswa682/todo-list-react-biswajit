import React from 'react';
var checkList = {
  'textDecoration': 'line-through'
}
var unCheckList = {
  'textDecoration': 'none'
}
class TodoList extends React.Component{
   
    render(){
      const todos=this.props.todosData;
      let listItems = todos.map(todo => {
        var toggleStatus = todo.status ? checkList : unCheckList;
  
        return (<li style={toggleStatus} key={todo._id} id={todo._id} ><input type="checkbox" onChange={this.props.checkStatus} defaultChecked={todo.status}/>{todo.text}<button onClick={this.props.checkDeletedItem}>X</button></li>)
      })
      return(
        <div className="navigation">
         <ul>
          {listItems}
         </ul>
        </div>
      )
    }
  }
export default TodoList


// (event)=>this.checkStatus(event)
// const toggleStatus = todo.status ? 'checkList' : 'checkList'
// style={()=> this.checkStatusList()}

// const toggleStatus = todo.status ? 'checkList' : 'checkList' ;