import React from 'react'

function ListCard({name, description, rating, phone, address}) {
  return (
    <div>
        <form>
          <inputLabel>{name}</inputLabel>
          <p>{rating}</p>
          <p>{phone}</p>
          <p>{address}</p>
          <p>{description}</p>
        </form>
    </div>
  )
}

export default ListCard