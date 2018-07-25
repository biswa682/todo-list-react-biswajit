import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './TodoList';
const API = "/api/todos";
class TodoContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos: [],
			inputText:''
		}
	}
	componentDidMount(){
		fetch(API).then(res => res.json())
		.then(data=>this.setState({todos: data}));
	}
	getValue(event){
		if(event.key === 'Enter'){
			const inputData = {
			"status":false,
			"text":event.target.value,
			"_id": new Date().getTime()
		}
		fetch(API, {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(inputData)
		});
		this.setState({todos: this.state.todos.concat(inputData)})
		event.target.value = "";
		}
	}

	getStatus(event){
		let newStatus;
		let elements=this.state.todos;
		if(event.target.checked){
			for(let i of elements){
				if(i._id === Number(event.target.parentNode.id)){
					i.status = true;
					newStatus = true;
				}
			}
		}
		else{
			for(let i of elements){
				if(i._id === Number(event.target.parentNode.id)){
					i.status = false;
					newStatus = false;
				}
			}
		}
		let obj = {"status": newStatus}
		fetch(API+"/"+event.target.parentNode.id, {
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(obj)
		});
		this.setState(()=>({
			todos: elements
		}));
	}
	getDeletedItem(event){	
		fetch(API+"/"+event.target.parentNode.id, {
			method: 'delete',
			headers: {'Content-Type':'application/json'}
		})
		let elements = this.state.todos;
		let newElement = elements.filter(function(item){
			return item._id != Number(event.target.parentNode.id);
		});
		this.setState(()=>({
			todos: newElement
		}));
	}
	render(){
		return(
			<div>
				<input type="text" name="data" onKeyPress={((event) => this.getValue(event))}/>
				<TodoList todosData={this.state.todos} checkStatus={(event) => this.getStatus(event)} checkDeletedItem={(event) => this.getDeletedItem(event)}/>	 	
			</div>
			)
	}
}

export default TodoContainer;