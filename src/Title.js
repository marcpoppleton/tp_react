import React from 'react'
import { useSelector} from 'react-redux'
import { selectedCharacter } from './characters-slice'

export function Title() {

  const surname = useSelector(selectedCharacter)

  return (
    <div>
      <h1>Reading about {surname}</h1>
    </div>
  )
}