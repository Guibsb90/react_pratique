
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [nivel, setNivel] = useState('');
  const [imc, setImc] = useState(null);

      useEffect(() => {
    const aoQuadrado = parseFloat(altura * altura);
    const resultado = parseFloat(peso / aoQuadrado).toFixed(2);

    switch (true) {
      case (imc < 18.5):
        setNivel('Abaixo do peso');
        break;
      case (imc >= 18.5 && imc < 24.9):
        setNivel('Peso normal');
        break;
      case (imc >= 25 && imc < 29.9):
        setNivel('Sobrepeso');
        break;
      case (imc >= 30 && imc < 34.9):
        setNivel('Obesidade grau 1');
        break;
      case (imc >= 35 && imc < 39.9):
        setNivel('Obesidade grau 2');
        break;
      case (imc >= 40):
        setNivel('Obesidade grau 3');
        break;
      default:
        setNivel('Valor inválido');
    
  }
    
    return setImc(resultado)
})

    

  return (
    <>
    <h1>Calculadora de IMC </h1> <br />

    <div>
    <input onChange={evento => setPeso(evento.target.value)} type="number" placeholder='Seu peso' />
    </div> <br />
    <div>
    <input onChange={evento => setAltura(evento.target.value)} type="number" placeholder='Sua altura em metros' /> 
    </div>
    <div>
      <br />
    {`Seu IMC é `+ imc +` e seu nível é `+ nivel}
    </div>
    </>
  )
}

export default App
