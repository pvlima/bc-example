import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);

  display: flex;
`;

export const ProductImg = styled.img`
  width: 120px;
  height: 120px;
  background-size: cover;
  border-radius: 8px 0 0 8px;
`;

export const ProductData = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 8px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
    margin-left: auto;
  }
`;
