import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const ListCardWrapper = styled.div`
  /* display:flex;  */
  /* flex-wrap:wrap;
  border: 2px solid #666;
  float:right; */
  padding-left:40px;

 form{
  display:flex;
  /* display: inline-block; */
  align-self:flex-end;
  flex-direction:column;
  background-color:white;   
  border: 1px solid #666;
  border-radius: 5px; 
  flex-wrap:wrap;
  /* width:40%; */
  
 }

 form:hover{
   cursor:pointer; 
 }

   `;
function ListCard({name, description, rating, phone, address,location_id}) {


  //navigate to different page with Router useNavigate
  const navigate = useNavigate(); 

  const onHandleClick = () => {
    navigate(`/place-details/${parseInt(location_id)}`);
  }


  return (
    <ListCardWrapper onClick={onHandleClick}>
        <form>
          <inputLabel>{name}</inputLabel>
          <p>{rating}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </form>
    </ListCardWrapper>
  )
}

export default ListCard