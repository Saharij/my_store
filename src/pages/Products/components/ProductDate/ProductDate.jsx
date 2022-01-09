import './ProductDate.scss';

const monthAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ProductDate = () => {
  const date = new Date().toDateString().split(' ');
  const month = monthAll.find(item => item.includes(date[1]));
  const day = date[2];

  const correctDay = () => {
    switch (day) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';

      default:
        return `${day}th`;
    }
  };

  const finishedDate = `${correctDay()} ${month} ${date[3]}`;

  return (
    <p className="date">
      {finishedDate}
    </p>
  );
};

export default ProductDate;
