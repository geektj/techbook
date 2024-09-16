import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: ${theme.colors.background2};
  padding: 20px 50px;
  height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  left: 0;
`;

export const ContentTitle = styled.div` 
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.white};
`;

export const ContentList = styled.ul`
  list-style: none; 
  padding: 10px 0px;
  margin: 0;
`;


export const ContentListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.white};
  padding: 10px 0px;
  margin: 20px 0px;
`;  
