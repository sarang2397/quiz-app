import React, { useState, useEffect } from "react";


import ProgressBar from "./progress";

export default function Progresslogic() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 10;
        

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []);
  return (
    <ProgressBar color={"#ff7979"} width={"100%"} value={value} max={100} />
  );
}
