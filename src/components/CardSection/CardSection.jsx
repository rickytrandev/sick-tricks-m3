import './CardSection.css'
import { Card } from '../Card/Card'

export function CardSection({ tricks, addTrick }) {
  return (
    <section className="card-section">
      {tricks.map(trick => {
       return <Card addTrick={addTrick} trick={trick} />
      })}
    </section>
  )
}