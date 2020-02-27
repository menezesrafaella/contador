import React, {Component} from 'react';
import { Button } from 'reactstrap';

import "./contador.css"

class Contador extends Component{
    state = {
    numero: 0
    }


    aumentar = () => {
    
    let novoNumero = this.state.numero  //um jeito de incremento
    novoNumero++
    this.setState({ numero: novoNumero})
    }

    diminuir = () => {
    if (this.state.numero === 0) {
        alert("Hoje não faro")
    }
    
    
    this.setState({
    numero : this.state.numero-1 //outro jeito de incremento
    })

    this.setState({
        numero : 0 
    })
    

    }
    
    render() {
    return (
    <div>
        <h1 className="contador-titulo">
        {this.state.numero}
        </h1>
       <Button className="mr-2" color="success" outline onClick={this.aumentar} > Aumentar </Button>
       <Button color="warning" outline onClick={this.diminuir} > Diminuir </Button>
    </div>
    )
}
}

export default Contador