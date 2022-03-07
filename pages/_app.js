import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import AppHeader from "../components/AppHeader";

const ParentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.section`
  width: ${(props) => props.width || "100%"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5px;
`;

const NextBoard = ({ Component }) => {
  return (
    <>
      {/* Header Place */}
      <AppHeader />

      {/* Content Place */}
      <ParentWrapper>
        {/* LEFT */}
        <Wrapper width="calc((100% - 1300px) / 2)"></Wrapper>

        {/* CONTENT */}
        <Wrapper width="1300px">
          <Component />
        </Wrapper>

        {/* RIGHT */}
        <Wrapper width="calc((100% - 1300px) / 2)"></Wrapper>
      </ParentWrapper>
    </>
  );
};

export default NextBoard;
