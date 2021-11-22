import { useState } from 'react'
/* import './App.css' */
import './assets/main.css';

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
        <fieldset className="m-2 flex">
            <input className="border-2 border-black rounded mr-3" value={input} onChange={handleInput} />
            <button className="text-xl bg-green-500 text-white pr-1 pl-1 rounded-md w-2/6 shadow-xl transform hover:translate-y-1" tabIndex="-1" onClick={handleChange}>{name}</button>
        </fieldset>
    )
}

const add = (x, y) => x + y
const minus = (x, y) => x - y

function App() {
    const [balance, setBalance] = useState(parseInt(localStorage.balance) || 1000)
    return (
        <div className="container mx-auto border-2 border-red-500 flex flex-col justify-items-center items-center">
            <h2 className="font-sans text-4xl m-5">Your current balance is {balance} €</h2>
            <div>
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
        </div>
    )
}

export default App
