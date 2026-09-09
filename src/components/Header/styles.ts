import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: #21212150;
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
      position: relative;
    }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px){
    padding: 1.8rem 3rem;
  }
`