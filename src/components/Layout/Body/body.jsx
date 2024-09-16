import React from "react";
import { BodyContainer, BodyContent, CardContent } from "./body.styled";
import { Card } from "../../UI/card/card.jsx";
import { theme } from "../../../styles/theme";

const Body = () => {
  return (
    <BodyContainer>
      <BodyContent>
        <Card
          width="100%"
          height="70px"
          backgroundColor={theme.colors.white}
          borderRadius="10px"
          boxShadow="none"
        >
            <CardContent>
                <div>Question 1</div>
                <div>What is HTML ?</div>
            </CardContent>
          
        </Card>
        <Card
          width="100%"
          height="70px"
          backgroundColor={theme.colors.white}
          borderRadius="10px"
          boxShadow="none"
          
        >
            <CardContent>
                <div>Question 2</div>
                <div>What is diff between HTML and HTML5 ?</div>
            </CardContent>
          
        </Card>
        <Card
          width="100%"
          height="70px"
          backgroundColor={theme.colors.white}
          borderRadius="10px"
          boxShadow="none"
        >
            <CardContent>
                <div>Question 3</div>
                <div>What is Async and defer in HTML ?</div>
            </CardContent>
          
        </Card>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
