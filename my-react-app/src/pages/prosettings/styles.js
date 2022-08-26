import styled from "styled-components";

export const Prosetting = styled.div`
  h2 {
    text-align: center;
    margin-top: 100px;
    font-size: 36px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
  }

  img {
    width: 600px;
    height: 400px;
  }
  .list {
    display: flex;
    margin-top: 80px;
  }
  .list-content {
    background-color: #2e4f24;
    height: 400px;
    border: 2px solid #ddd;
  }
  .list-content p {
    font-weight: 600;
    font-size: 18px;
    padding: 20px;
    border: 2px solid #ddd;
    color: #fff;
  }
  @media (min-width: 0) and (max-width: 676px) {
    ul {
      width: 100%;
    }
    .list {
      display: block;
      margin-top: 50px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .list-content {
      height: 40px;
    }
    .list-content p {
      font-size: 14px;
      text-align: center;
      padding: 10px;
    }
    .list-content {
      height: 100%;
    }
  }
`;
