import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, category, images } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={images} alt="" className="card-top-img" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>

          <p class="card-text">
            <span class="badge badge-secondary">{category?.name}</span>
          </p>
          <h2>
            {" "}
            <span>&#8377;</span> {price}
          </h2>
          <Link to={'/products/detail/'+id} class="btn btn-primary btn-block">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
