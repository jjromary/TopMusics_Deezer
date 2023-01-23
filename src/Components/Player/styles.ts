import styled from "styled-components";

export const PlayContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  input {
    width: 330px;
  }
`;

export const ButtonPlayer = styled.button`
  border: none;
  background: none;

  :hover {
    color: ${(props) => props.theme["green500"]};
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

export const ProgressBar = styled.div`
  margin-top: -1px;
  width: 100%;

  input[type="range"] {
    height: 24px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000;
    background: #041418;
    border-radius: 5px;
    border: 1px solid #000000;
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #ffffff;
    border: 1px solid #000000;
    height: 17px;
    width: 11px;
    border-radius: 5px;
    background: #008f7f;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5.5px;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #041418;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000;
    background: #041418;
    border-radius: 5px;
    border: 1px solid #000000;
  }

  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #ffffff;
    border: 1px solid #000000;
    height: 17px;
    width: 11px;
    border-radius: 5px;
    background: #008f7f;
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-ms-fill-lower {
    background: #041418;
    border: 1px solid #000000;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #000000;
  }

  input[type="range"]::-ms-fill-upper {
    background: #041418;
    border: 1px solid #000000;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #000000;
  }

  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #ffffff;
    border: 1px solid #000000;
    height: 17px;
    width: 11px;
    border-radius: 5px;
    background: #008f7f;
    cursor: pointer;
  }

  input[type="range"]:focus::-ms-fill-lower {
    background: #041418;
  }

  input[type="range"]:focus::-ms-fill-upper {
    background: #041418;
  }
`;

export const CurrentTime = styled.div`
  margin-top: -3px;
`;

export const Duration = styled.div`
  margin-top: -6px;
`;
