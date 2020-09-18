import React from "react"
import Soda from "./Soda"

function SodaList(){
  return (
    <React.Fragment>
      <hr/>
      {masterSodaList.map((soda, index) =>
      <Soda names={soda.names}
        location={soda.price}
        issue={soda.slogan}
        key={index}/>
    )}
    </React.Fragment>
  );
}

export default SodaList