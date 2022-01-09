import './ProductDate.scss';

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ProductDate = () => {
  const date = new Date();

  console.log(date.toDateString())
  return (
    <>
    </>
  );
};

export default ProductDate;
