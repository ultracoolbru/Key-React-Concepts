import Concept from "./Concept";

export default function Concepts(props) {
  return (
    <ul id="concepts">
      {props.concepts.map((concept) => (
        <Concept concept={concept} />
      ))}
    </ul>
  );
}
