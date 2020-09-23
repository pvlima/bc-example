import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;

  h2 {
    display: flex;
    align-items: center;
    margin-top: 16px;

    svg {
      margin-right: 16px;
    }
  }
`;

export const GridProducts = styled.div`
  margin-top: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  a {
    text-decoration: none;
  }
`;
