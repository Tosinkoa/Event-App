import { useField } from "formik";

export default function MyInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        <div className="mylabel">{label}</div>
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="form_error">{meta.error}</div> : ""}
    </>
  );
}

export function MyTextArea({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        <div className="mylabel">{label}</div>
        <textarea {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="form_error">{meta.error}</div> : ""}
    </>
  );
}
export function MyDate({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        <div className="mylabel">{label}</div>
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="form_error">{meta.error}</div> : ""}
    </>
  );
}
