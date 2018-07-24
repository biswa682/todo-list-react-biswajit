import React from 'react';
import ReactDom from 'react-dom';
import Render from './Render';

class CreateHeader extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos: [],
			noOfTodos:0,
			inputText:''
		}
	}
	addInList(){
		let elements=this.state.todos;
		let inputData = {
			status:false,
			text:this.state.inputText,
			id:this.state.noOfTodos++
		} 
		elements.push(inputData);	
		this.setState(() => ({
      		todos: elements
    	}));
	}

	getValue(event){
		{this.setState({inputText: event.target.value})}
		if(event.key === 'Enter'){
			this.addInList();
			event.target.value = "";
		}
	}

	getStatus(event){
		let elements=this.state.todos;
		if(event.target.checked){
			for(let i of elements){
				if(i.id === Number(event.target.parentNode.id)){
					i.status = true
				}
			}
		}
		else{
			for(let i of elements){
				if(i.id === Number(event.target.parentNode.id)){
					i.status = false
				}
			}
		}
		this.setState(()=>({
			todos: elements
		}));
	}
	getDeletedItem(event){
		let elements = this.state.todos;
		let newElement = elements.filter(function(item){
			return item.id != Number(event.target.parentNode.id)
		});
		this.setState(()=>({
			todos: newElement
		}));
	}
	render(){
		return(
			<div>
				<input type="text" name="data" onKeyPress={((event) => this.getValue(event))}/>
			 	<button onClick={() => this.addInList()}>Click me</button>	
				<Render todosData={this.state.todos} checkStatus={(event) => this.getStatus(event)} checkDeletedItem={(event) => this.getDeletedItem(event)}/>	 	
			</div>
			)
	}
}

export default CreateHeader;
