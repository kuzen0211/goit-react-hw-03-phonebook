import styled from 'styled-components';

export const Wraper = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 10px 10px;
  margin-bottom: 20px;
  background-color: #94b59d;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 400px;
  margin-top: 5px;
  outline: none;
`;

export const Button = styled.button`
  width: fit-content;
  cursor: pointer;
  margin: 0;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  :hover {
    background-color: #cccccc;
  }
`;
