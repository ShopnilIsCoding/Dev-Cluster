import { useState, useEffect } from "react";

const UseDateTime = (interval = 60000) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, interval); 

    return () => clearInterval(timer); 
  }, [interval]);

  const formatDate = (date) => {
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return date.toLocaleDateString('en-GB', options).replace(',', '');
  };

  return formatDate(dateTime);
};

export default UseDateTime;
