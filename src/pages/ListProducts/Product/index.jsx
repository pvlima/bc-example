import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import getCurrency from '../../../utils/getCurrency';

import { Container, ProductImg, ProductData } from './styles';

const Product = ({ product }) => {
  const formattedProduct = useMemo(() => {
    return {
      ...product,
      formattedPrice: getCurrency(Number(product.price)),
    };
  }, [product]);

  return (
    <Container>
      <ProductImg
        src={formattedProduct.photo_url}
        alt={formattedProduct.name}
      />

      <ProductData>
        <h3>{formattedProduct.name}</h3>
        <span>{formattedProduct.formattedPrice}</span>
      </ProductData>
    </Container>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photo_url: PropTypes.string,
  }).isRequired,
};

export default Product;
