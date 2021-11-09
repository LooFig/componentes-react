import { useState } from "react";
import Button from "../Button";

const Card = () => {
    
    const [valor, setValor] = useState(0)
    
    function Adicionar() {
        setValor(valor + 1)
    }

    function remover() {
        setValor(valor - 1)
    }
    
    return ( 
        <div classNameName="card">
            <div className="card-header">
                Meu texto no card
            </div>
            <div className="card-body">
                <Button 
                    className='btn btn-success'
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                <Button 
                    className='btn btn-danger'
                    onClick={remover}
                >
                    remover
                </Button>
                
                <p>{valor}</p>
            </div>
        </div>
    );
}
 
export default Card;