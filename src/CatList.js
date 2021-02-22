// write your CatList component here
import React from 'react'
const CatList = props => {
  if (props.loading) {
    return 'Loading....'
  } else {
    return(
      <div>
        {props.cats.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}></img>)}
      </div>
    )
  }

}

export default CatList