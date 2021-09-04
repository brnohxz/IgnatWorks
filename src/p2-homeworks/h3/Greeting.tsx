import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass}/>

                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
            <div>{error && <span>{error}</span>}</div>
        </div>
    )
}

export default Greeting
