import styled, { keyframes } from "styled-components";

const typeWriterAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const Container = styled.div`
  background: #a9e974;
  padding: 20px;
  border-radius: 20px;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 20rem;

  &::-webkit-scrollbar {
    width: 14px;
  }
  
  &::-webkit-scrollbar-track {
    background: #a9e974;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1d6627;
    border-radius: 50px;
    border: 4px solid #a9e974;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0e471a;
  }

  h1 {
    display: flex;
    align-items: center;
    color: #454444;
    font-weight: bold;

    svg {
      margin-right: 10px;
    }

    overflow: hidden;
    white-space: nowrap;

    animation: ${typeWriterAnimation} 2s steps(40) forwards;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-family: "Lato", sans-serif;

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 10px;
    margin-right: 8px;
    flex: 1;
  }

  button {
    background: #1d6627;
    color: #fff;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-family: "Lato", sans-serif;
    font-size: 11.5px;

    &:hover {
      opacity: 0.8;
    }
  }
`;


export const CustomCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #1d6627;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #1d6627;
    color: #fff;
  }

  &:checked::before {
    content: "✔";
    font-size: 14px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #fff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0px 7px;

  ${CustomCheckbox} {
    margin-right: 10px;
  }

  p {
    text-transform: capitalize;
    font-weight: bold;
    flex: 1;
    margin-right: 10px;
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  }
`;

export const ClearButton = styled.button`
  color: #fff;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 8px;
  background: #ff4949;
  font-family: "Lato", sans-serif;

  &:hover {
    opacity: 0.8;
  }
`;

export const AddButton = styled.button`
  background: #6cf000;
  color: #000;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const QuantityButton = styled.button`
  height: 15px;
  width: 15px;
  background-color: #1d6627;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const QuantityBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const QuantityInput = styled.input`
  width: 30px;
  height: 25px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 5px;
  padding: 5px;
  outline: none;
`;

export const IncrementButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: #1d6627;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const DecrementButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: #ff4949;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceInput = styled.input`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 0 5px;
  padding: 5px;
  text-align: center;
  outline: none;
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  outline: none;
`;

export const Total = styled.div`
  margin-top: 20px;

  p {
    font-size: 18px;
    font-weight: bold;
    color: #454444;
    margin-bottom: 0;
  }
`;
