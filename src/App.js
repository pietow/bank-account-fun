import { useState } from 'react'
import './App.css'

const BankInput = ({ balance, onBalanceChange, name, addOrMinus }) => {
    const [input, setInput] = useState('')

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleChange() {
        const result = addOrMinus(balance, parseInt(input))
        if (!Number.isNaN(result)) {
                onBalanceChange(result)	
                localStorage.balance = result
        }  
    }

    return (
        <fieldset>
            <input value={input} onChange={handleInput} />
            <button onClick={handleChange}>{name}</button>
        </fieldset>
    )
}

const add = (x, y) => x + y
const minus = (x, y) => x - y

function App() {
    const [balance, setBalance] = useState(parseInt(localStorage.balance) || 1000)
    return (
        <div className="App">
            <h2>Your current balance is {balance}</h2>
            <BankInput
                balance={balance}
                onBalanceChange={setBalance}
                name = "Deposite"
                addOrMinus = {add}
            ></BankInput>
            <BankInput
                balance={balance}
                onBalanceChange={setBalance}
                name = "Withdraw"
                addOrMinus = {minus}
            ></BankInput>
        </div>
    )
}

export default App
