import React, { useState, useEffect } from "react";

const RateLimiter = () => {
  const [isAllowed, setIsAllowed] = useState(true);
  const [counter, setCounter] = useState(0);

  const limitRequests = () => {
    if (isAllowed) {
      setIsAllowed(false);
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    if (!isAllowed) {
      const timer = setTimeout(() => {
        setIsAllowed(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isAllowed]);

  return (
    <div>
      <button onClick={limitRequests} disabled={!isAllowed}>
        Make Request
      </button>
      <p>Requests Made: {counter}</p>
      <p>{isAllowed ? "make a request" : "Wait"}</p>
    </div>
  );
};

export default RateLimiter;
