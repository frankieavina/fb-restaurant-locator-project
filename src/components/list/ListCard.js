import React from 'react'
import styled from "styled-components";

const ListCardWrapper = styled.div`
  align-items:flex-start;
  background-color:white;  
  padding-left:20px;
  border: 1px solid #666;
  border-radius: 5px;
  align-self: flex-end;
  `;
function ListCard({name, description, rating, phone, address}) {
  return (
    <ListCardWrapper>
        <form>
          <inputLabel>{name}</inputLabel>
          <p>{rating}</p>
          <p>{phone}</p>
          <p>{address}</p>
          <p>{description}</p>
        </form>
    </ListCardWrapper>
  )
}

export default ListCard