import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Product from './Product';
import { Container, GridProducts } from './styles';

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('example/products');

      setProducts(response.data);
    };

    loadProducts();
  }, []);

  return (
    <Container>
      <h2>
        <FiShoppingCart />
        <span>Lista de Produtos</span>
      </h2>

      <GridProducts>
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Product product={product} />
          </Link>
        ))}
      </GridProducts>
    </Container>
  );
};

export default ListProducts;
