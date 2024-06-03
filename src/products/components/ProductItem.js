import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from "../../shared/components/UIElements/Card";

import './ProductItem.css';

const ProductItem = (props) => {
  return (
    <li className="product-item">
      <Card>
        <div className="product-item__content">
          <Link to={`/products/${props.id}`}>
            <div className="product-item__image">
              <Avatar image={props.images ? `http://localhost:5000/${props.images[0]}`: ""} alt={props.name}/>
            </div>
            
            <div className="product-item__info">
              <h2>{props.name}</h2>
              <h4>
                单价 Unit Price: ${props.price}
              </h4>
              <h4>
                存量 Quantity: {props.quantity}
              </h4>
              <h4>
                最早可取日期 Date Available: {props.available_date}
              </h4>
            </div>
          </Link>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
