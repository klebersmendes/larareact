function Products(props) {
    const products = props.products;
    const listItems = Object.keys(products).map((item, i) =>     
        <div key={i} className="itemProduct">
            <div className="titleProduct">{ products[item].name }</div>
            <div className="image">{ products[item].image }</div>
            <div className="price">R$ { products[item].price }</div>
            <button className="buy" type="submit" data-id={ products[item].id }>Comprar</button>
        </div>
    );
    return (
      <div>{listItems}</div>
    );
}

export default Products;