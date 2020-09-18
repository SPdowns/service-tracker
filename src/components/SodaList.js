import React from "react"
import Soda from "./Soda"

const masterSodaList = [
  {
    names: 'Pepsi',
    price: '1.50',
    slogan: "Hey, Why not? It's the 90's!"
  }
]

function SodaList(){
  return (
    <React.Fragment>
      <hr/>
      {masterSodaList.map((soda, index) =>
      <Soda names={soda.names}
            price={soda.price}
            slogan={soda.slogan}
            key={index}/>
    )}
    </React.Fragment>
  );
}

export default SodaList