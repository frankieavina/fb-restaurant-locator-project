import React from 'react';
import { useNavigate } from "react-router-dom";


function ListCard({name, description, rating, phone, address,location_id}) {

    //navigate to different page with Router useNavigate
    const navigate = useNavigate(); 

  const onHandleClick = () => {
    navigate(`/place-details/${parseInt(location_id)}`);
  }


  return (
    <article onClick={onHandleClick} >
      <div>
          <form>
          <inputLabel>{name}</inputLabel>
          <p>{rating}</p>
          <p>{phone}</p>
          <p>{address}</p>
          <p>{description}</p>
        </form>      
      </div>
    </article>
  )
}

export default ListCard