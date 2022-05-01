import { createContext, useState } from 'react'

export const NamesContext = createContext({})

export const NamesContextProvider = (props) => {
    
    const [names, setNames] = useState([])

    const addName = (name) => {
        setNames(prevName => prevName.concat({
        id: Math.floor(Math.random() * 100000),
        name: name
        }))
    }

    const deleteName = (names) => {
        setNames(prevName => prevName.filter(name => name.id !== names.id))
    }

    const context = {
        names: names,
        addName: addName,
        deleteName: deleteName
    }

    return(
        <NamesContext.Provider value={context}>
            {props.children}
        </NamesContext.Provider>
    )
}
