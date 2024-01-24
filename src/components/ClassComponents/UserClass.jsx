import React from "react";

// Class based React component for learning purpose
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    componentDidMount(){
      console.log("Component did mount called");
    }

    componentDidUpdate(prevState,prevProps){
      console.log("Component updation called");
    }

    render(){
        const {name,about} = this.props;
        return (
          <>
            <h1>{name}</h1>
            <h2>{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            <p>{about}</p>
          </>
        );
    }
}

export default User;