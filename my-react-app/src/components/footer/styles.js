import styled from "styled-components";

export const Footercss = styled.div`
  background-color: #333;
  padding: 10px;
  margin-top: 150px;

  ul {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  .lista {
    margin: 4px;
  }
  span {
    font-size: 20px;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
