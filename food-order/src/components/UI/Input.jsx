export default function Input({ label, id, ...pros }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...pros} />
    </p>
  );
}
