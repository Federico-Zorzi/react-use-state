export default function Card({ title, description }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
}
