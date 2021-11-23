import { useState } from 'react'
/* import './App.css' */
import './assets/main.css'

const BankInput = ({ balance, onBalanceChange, name }) => {
    const [input, setInput] = useState('')

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleChange() {
        onBalanceChange(balance, input)
    }

    return (
        <fieldset className="m-2 flex">
            <input
                className="border-2 border-black rounded mr-3"
                value={input}
                onChange={handleInput}
            />
            <button
                className="text-xl bg-green-500 text-white pr-1 pl-1 rounded-md w-2/6 shadow-xl transform hover:translate-y-1"
                tabIndex="-1"
                onClick={handleChange}
            >
                {name}
            </button>
        </fieldset>
    )
}

const add = (x, y) => x + y
const minus = (x, y) => x - y

function App() {
    const [balance, setBalance] = useState(
        parseInt(localStorage.balance) || 1000
    )

    function currySetBalance(func) {
        return function(x, y) {
            const result = func(x, parseInt(y))
            if (!Number.isNaN(result)) {
                setBalance(result)
                localStorage.balance = result
            }
        }
    }

    return (
        <div className="container mx-auto flex flex-col justify-items-center items-center">
            <h2 className="font-sans text-4xl m-5">
                Your current balance is {balance} €
            </h2>
            <div>
                <BankInput
                    balance={balance}
                    onBalanceChange={currySetBalance(add)}
                    name="Deposite"
                ></BankInput>
                <BankInput
                    balance={balance}
                    onBalanceChange={currySetBalance(minus)}
                    name="Withdraw"
                ></BankInput>
            </div>
        </div>
    )
}

export default App
