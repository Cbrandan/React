import React from 'react'
import Cuentas from './Cuentas';

class Cliente extends React.Component{
    agregarCuenta(){
        alert("Agregando cuenta!!");
    }
    constructor(props){
        super(props);
        this.agregarCuenta = this.agregarCuenta.bind(this);
    }
    render(){
    return(    
        <div>
            <h2>El cliente {this.props.nombre} tiene las siguientes cuentas: </h2>
            <Cuentas/>
            <button className="btn btn-primary" onClick={this.agregarCuenta}>Agregar Cuenta</button>
        </div>
        );

    }

}

export default Cliente;