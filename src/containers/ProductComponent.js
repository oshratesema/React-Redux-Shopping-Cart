import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function ProductComponent() {
  const products = useSelector((state) => state.products)
  const renderProducts = products.map((product) => {
    const {id,title,image,category,price} = product;
    return(
      <div className='four column wide' key={id}>
        <Link to={`/product/${id}`}>
      <div className='ui link cards'>
        <div className='image'>
          <img src={image} alt={title}/>
        </div>
        <div className='content'>
          <div className='header'>{title}</div>
          <div className='header'>{price}$</div>
          <div className='header'>{category}</div>
        </div>
      </div>
      </Link>
    </div>
    );
  })
  console.log(products);
  return (
    <>
    {renderProducts}
    </>
  )
}
