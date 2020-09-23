import React, { useEffect, useMemo, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import history from '../../services/history';
import getCurrency from '../../utils/getCurrency';

import { Container, Header, Content, ProductImg, ProductData } from './styles';

const ShowProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const loadProduct = async () => {
      const response = await api.get(`example/products/${id}`);
      setProduct(response.data);
    };

    loadProduct();
  }, [id]);

  const formattedProduct = useMemo(() => {
    return {
      ...product,
      formattedPrice: getCurrency(Number(product.price)),
    };
  }, [product]);

  return (
    <Container>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <FiArrowLeft size={24} /> Voltar
        </button>
        <h2>Detalhes do produto</h2>
      </Header>

      <Content>
        <ProductImg src={formattedProduct.photo_url} />
        <ProductData>
          <h2>{formattedProduct.name}</h2>
          <h3>{formattedProduct.description}</h3>
          <p>
            Categoria: <span>{formattedProduct.category}</span>
          </p>
          <p>
            Preço: <span>{formattedProduct.formattedPrice}</span>
          </p>
        </ProductData>
      </Content>
    </Container>
  );
};

export default ShowProduct;
