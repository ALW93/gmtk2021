import React from 'react'
import { useSelector } from 'react-redux'
import images from '../images/images';


export default function Tallyboard() {

  const {
    requestsFulfilled, 
    potionsDiscovered, 
    potionsBrewed
  } = useSelector(state => state.active.count)

  return (
    <aside className="tallyBoardContainer">
      <h2>Achievements</h2>

      <Tally type="Happy Customers" count={requestsFulfilled} tallyType="tally-heart" />
      <Tally type="Potions Discovered" count={potionsDiscovered} tallyType="tally-star" />
      <Tally type="Total Potions Made" count={potionsBrewed} tallyType="tally-potion" />

    </aside>
  )
}

function Tally({type, count, tallyType}) {
  const range = n => [...Array(n).keys()]


  return (
    <section style={{padding: "10px"}}>

    <h3>{type}:</h3>

    {count === 0 && <div style={{height: "25px"}} />}
    
    {range(count).map(_ => (
      <img src={images[tallyType]} height="25px" alt={tallyType} />
    )
    )}

    </section>
  )
}