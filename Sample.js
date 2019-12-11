import React, { Component } from 'react';

export default class Sample extends Component
{
  constructor()
  {
    this.state={value:[ ],
    textval:""
    };
    //event binding
    this.handleAddToDoItem=this.handleAddToDoItem.bind(this);
    this.handleChange=this.handleChange.bind(this);
      
  }
      handleChange(e){
            this.setState({textval: e.target.value });

      }
       


   handleAddToDoItem()
   {
    //  adding data
      this.state.value.push(this.state.textval );
      this.setState(this.state);
   }   

   delete(id){
    this.setState(prevState => ({
        data: prevState.data.filter(el => el != id )
    }));
}

 _handleDelete(id){
        this.props._handleDelete(id);
    }








  render()
  {
    return(
      <div>
    <div>
      <input type='text' placeholder="Enter item text" onChange={this.handleChange} />
      
      </div>
      <div>
      <br />
      <button onClick={this.handleAddToDoItem}>Add Item </button>
      &nbsp;





      {this.state.value.map((result) => (
        <div>
        <p> {result} </p>
        </div>
    ))}
    </div>

      
{
  // map code goes here

  
}


    </div>
    );
  }
}
// also extend 