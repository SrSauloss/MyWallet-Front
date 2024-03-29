import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    margin-top: 30px;
    color: #fff;
  }
`;

const DashboardBox = styled.div`
  margin: 0 25px 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  h1 {
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    color: #fff;
  }
  p {
    font-family: Raleway;
    font-size: 20px;
    padding-bottom: 15px;
    text-align: center;
    color: #fff;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  height: 58px;
  width: 100%;
  max-width: 100%;
  border: none;
  border-radius: 5px;
  margin-bottom: 13px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: #000;

  :focus {
    border: none;
    outline: none;
  }
`;

const Button = styled.button`
  height: 46px;
  width: 100%;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  color: #fff;
  background: #a328d6;
  border: none;
`;

const Link = styled.p`
  font-family: Raleway;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  margin-top: 30px;
  color: #fff;
`;

export { DashboardBox, Container, Box, Form, Input, Button, Link };
