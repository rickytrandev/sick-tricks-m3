import { useState } from 'react'
import './Form.css'

export function Form({ addTrick }) {
  const [stance, setStance] = useState('')
  const [trick, setTrick] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  function submitTrick(e) {
    e.preventDefault()
    const newTrick = {
      stance,
      trick,
      obstacle,
      tutorial
    }

    addTrick(newTrick)
    setStance('')
    setTrick('')
    setObstacle('')
    setTutorial('')
  }

  return (
    <form>
      <select value={stance} name="stance" id="stance" onChange={e => setStance(e.target.value)}>
        <option value="" disabled hidden>Choose your stance</option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input value={trick} type="text" placeholder="Name of Trick" name='trick' onChange={e => setTrick(e.target.value)}/>
      <select value={obstacle} name="obstacle" id="obstacle" onChange={e => setObstacle(e.target.value)}>
        <option value="" disabled hidden>Choose your obstacle</option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>
      <input value={tutorial} type="text" placeholder="Link to tutorial" name='link to tutorial' onChange={e => setTutorial(e.target.value)}/>
      <button onClick={e => submitTrick(e)}>Send it!</button>
    </form>
  )
}