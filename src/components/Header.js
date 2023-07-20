export default function Header(props) {
  return (
    <header>
      <img src={props.header.image} alt={props.header.alt} />
      <h1>{props.header.title}</h1>
      <p>{props.header.description}</p>
    </header>
  );
}
