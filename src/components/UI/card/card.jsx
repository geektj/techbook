import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const CardContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

const StyledCard = styled.div`
  width: ${props => props.width || "200px"};
  height: ${props => props.height || '50px'};
  background-color: ${props => props.backgroundColor || theme.colors.white};
  border-radius: ${props => props.borderRadius || '10px'};
  box-shadow: ${props => props.boxShadow || '0 0 10px 0 rgba(0, 0, 0, 0.1)'};
  padding: ${props => props.padding || '20px 0'};
  /* margin: ${props => props.margin || '20px 0'}; */
`

export const Card = ({children, ...props }) => {
  return (
    <CardContainer>
      <StyledCard {...props}>{children}</StyledCard>
    </CardContainer>
  )
}

