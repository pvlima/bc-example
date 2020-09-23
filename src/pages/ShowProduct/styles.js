import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
`;

export const Header = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  button {
    margin-right: 16px;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    border: 0;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 16px;
  border-radius: 4px;
  display: flex;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
`;

export const ProductImg = styled.img`
  width: 350px;
  height: 350px;
  background-size: cover;
  border-radius: 8px 0 0 8px;
`;

export const ProductData = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme.colors.text};
  }

  p {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
