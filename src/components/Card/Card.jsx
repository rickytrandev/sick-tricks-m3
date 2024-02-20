import './Card.css'
import { deleteTrick } from '../../apiCalls'

function removeTrick(id) {
  deleteTrick(id)
    .then(res => {
      if (res.ok) {
        console.log('Trick deleted successfully');
      } else {
        console.log(res.status);
        throw new Error('Failed to delete trick');
      }
    })
    .catch(err => {
      console.log(err.message);
    });
}
export function Card({ trick }) {
  return (
    <div id={trick.id} key={trick.id} className="trick">
      <p>{trick.name}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>{trick.stance}</p>
      <a href={trick.tutorial}>tutorial</a>
      <button onClick={() => removeTrick(trick.id)} >🚮</button>
    </div>
  )
}