import React from "react";
import Header from "./header/header";
import Sidebar from "./Sidebar/sidebar";
import styled from "styled-components";
import Body from "./Body/body";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative; 
`;

const Layout = ({children}) => {
  return (
    <StyledLayout>
      <Header />
      <MainContent>
        <Sidebar />
        <Body>{children}</Body>
      </MainContent>
    </StyledLayout>
  );
};

export default Layout;
