export default function Button({ text, to }) {
  return (
    <button className="button">
        <a className="button__link" href={to ? to : "#/"}> {text}</a>
    </button>
  );
}
