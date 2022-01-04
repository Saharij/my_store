import T from 'prop-types';
import './Button.scss';
import classNames from 'classnames';

export const Button = ({
  type='button',
  className,
  content,
  onClick
}) => (
  <button
    type={type}
    className={classNames('btn', className)}
    onClick={onClick}
  >
    {content}
  </button>
);

Button.propTypes = {
  type: T.string,
  className: T.string,
  content: T.string.isRequired,
  onClick: T.func.isRequired,
}
