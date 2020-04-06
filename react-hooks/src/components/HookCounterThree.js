import React, {useState} from 'react'

export default function HookCounterThree() {

    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <form>
            <input 
                onChange={e => setName({...name, firstName: e.target.value})} type="text" 
                value={name.firstName}
            />
            <input 
                onChange={e => setName({...name,lastName: e.target.value})} type="text" 
                value={name.lastName}
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
        </form>
    )
}
