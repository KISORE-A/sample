import React from 'react'

function Student(props){
  return (
    <div>
    <h3>Name:{props.name}</h3>
    <p>Course:{props.course}</p>
    <p>Batch:{props.batch}</p>
    <p>Department:{props.department}</p>
    <p>Year:{props.year}</p>
        
    </div>
  )
}

export default Student