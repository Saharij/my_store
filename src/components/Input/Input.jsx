import T from 'prop-types';

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

Input.propTypes = {
  type: T.string,
  name: T.string,
  value: T.string.isRequired,
  placeholder: T.string,
  onChange: T.func.isRequired,
}
