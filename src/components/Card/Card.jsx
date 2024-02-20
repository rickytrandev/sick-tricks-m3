import './Card.css'

export function Card({ trick }) {
  return (
    <div key={trick.id} className="trick">
      <p>{trick.name}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>{trick.stance}</p>
      <a href={trick.tutorial}>tutorial</a>
    </div>
  )
}