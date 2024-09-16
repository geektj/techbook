import React from "react";
import {
  SidebarContainer,
  ContentTitle,
  ContentList,
  ContentListItem,
} from "./sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ContentTitle>Topics</ContentTitle>
      <ContentList>
        <ContentListItem>HTML</ContentListItem>
        <ContentListItem>CSS</ContentListItem>
        <ContentListItem>JavaScript</ContentListItem>
        <ContentListItem>React</ContentListItem>
        <ContentListItem>Node</ContentListItem>
        <ContentListItem>Express</ContentListItem>
        <ContentListItem>MongoDB</ContentListItem>
        <ContentListItem>Mongoose</ContentListItem>
      </ContentList>
    </SidebarContainer>
  );
};

export default Sidebar;
