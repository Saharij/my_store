export const Input = ({
  type = 'text',
  name,
  value,
  placeholder,
  onChange
}) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
