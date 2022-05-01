import React, { useContext } from 'react'
import Name from './Name'
import { NamesContext } from '../store/NamesContext'

const Names = () => {
  const nameCtx = useContext(NamesContext)
  return (
      <>
        {nameCtx.names.map((name) => <Name name={name} key={name.id}/>)}
      </>
  )
}

export default Names