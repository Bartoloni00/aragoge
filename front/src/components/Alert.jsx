import React, { useState, useEffect } from "react";

const Alert = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  let alertClass = "";
  
  if (type === "success") {
    alertClass = "text-green-800 bg-green-300";
  } else if (type === "info") {
    alertClass = "text-yellow-800 bg-yellow-300";
  } else if (type === "danger") {
    alertClass = "text-red-800 bg-red-300";
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {visible && (
        <div className={`absolute bottom-5 right-5 px-4 py-4 w-[300px] rounded shadow-lg ${alertClass}`} role="alert">
            <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Alert;