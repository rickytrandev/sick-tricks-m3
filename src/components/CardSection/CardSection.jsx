import './CardSection.css'
import { Card } from '../Card/Card'

export function CardSection({ tricks }) {
  return (
    <section className="card-section">
      {tricks.map(trick => {
       return <Card trick={trick} />
      })}
    </section>
  )
}