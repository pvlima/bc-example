import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 30px;
  }
`;
