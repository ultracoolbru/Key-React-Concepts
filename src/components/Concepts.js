import Concept from "./Concept";

export default function Concepts(props) {
  const concepts = [...props.concepts];
  return (
    <ul id="concepts">
      {concepts.map((concept) => (
        <Concept concept={concept} />
      ))}
    </ul>
  );
}
