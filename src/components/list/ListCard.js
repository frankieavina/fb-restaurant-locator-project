import React from 'react'
import styled from "styled-components";

const ListCardWrapper = styled.div`
  /* display:flex;  */
  /* flex-wrap:wrap;
  border: 2px solid #666;
  float:right; */
  padding-left:40px;
 form{
  /* display:flex; */
  display: inline-block;
  align-self:flex-end;
  flex-direction:column;
  background-color:white;   
  border: 1px solid #666;
  border-radius: 5px; 
  flex-wrap:wrap;
  
 }

   `;
function ListCard({name, description, rating, phone, address}) {
  return (
    <ListCardWrapper>
        <form>
          <inputLabel>{name}</inputLabel>
          <p>{rating}</p>
          <p>{phone}</p>
          <p>{address}</p>
          {/* <p>{description}</p> */}
        </form>
    </ListCardWrapper>
  )
}

export default ListCard