const CardComponent = (props) => (
  <div className="border border-none p-2 h-100 d-flex flex-column">
    <img
      src={props.image}
      className="card-img-top cover-lg-3"
      alt={props.title}
      style={{ height: "15rem", objectFit: "cover" }}
    />
    <div className="card-body d-flex flex-column flex-grow-1">
      <div className="card-header text-center bg-secondary text-white py-2 mb-3">
        <h5 className="card-title m-0">{props.title}</h5>
      </div>
      <div className="mt-auto d-flex justify-content-between align-items-center">
        <button
          onClick={() => alert(`${props.title} ¡Comprado!\n -${props.price}€`)}
          className="btn btn-success px-4"
        >
          BUY
        </button>
        <h3 className="text-white bg-dark border border-dark px-3 py-1 mb-0 rounded">
          {props.price}€
        </h3>
      </div>
    </div>
  </div>
);

export default CardComponent;
