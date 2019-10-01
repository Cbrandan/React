import React from 'react'

class Cuentas extends React.Component{
    render(){
        const saldo = 150;
        return(
            <ul>
                <li>Caja de ahoros con </li>
                <li>Cuenta corriente</li>
            </ul>
        );
    }
}

export default Cuentas;