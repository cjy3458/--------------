import React from "react";
import { Wrapper } from "../components/layout/common";
import FormSection from "../components/home/FormSection";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <FormSection />
      <CustomLink to="/signup">회원가입→</CustomLink>
    </Wrapper>
  );
};

export default Home;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: grey;
  &:visited {
    color: black;
  }
`;
