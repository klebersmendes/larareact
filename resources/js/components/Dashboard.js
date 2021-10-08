import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends Component {

    constructor(props){
        super(props);    
        this.state = {
            pinCode : ''
        }

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({pinCode : event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        if(this.state.pinCode == '123'){
            this.props.history.push('/first');
            console.log("Acesso pertimitido para o pin: " + this.state.pinCode)
        } else {
            console.log("Acesso negado para o pin: " + this.state.pinCode)
        }  
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">                   
                        <div className="brand">ShopFree</div>                        
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="title">Sign in.</div>
                            <div>
                                <label><input className="form-input" type="text" placeholder="* * * *" name="pin" onChange={this.updateInput} /></label>
                                <button className="submit" type="submit" onClick={this.handleSubmit}>Enviar</button>
                            </div>
                            {/* <div className="card-body">Aqui estamos usando Laravel8 + React</div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
