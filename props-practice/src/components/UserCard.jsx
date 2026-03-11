export default function UserCase({ name, age, city }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", color: "red" }}>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}
