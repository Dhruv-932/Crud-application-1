import React, { useEffect, useState } from "react";
import "./CrudApplication.css"; 

const CrudApplication = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    
    setAnimationClass("animate-text");
  }, []);

  return (
    <div className="crud-container">
      <div
        className="crud-content"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/image2.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <h1 className={`crud-title ${animationClass}`}>A User Data Hub</h1>
        <p className={`crud-subtitle ${animationClass}`}>
          Empowering You to Create..
        </p>
       
      </div>
    </div>
  );
};

export default CrudApplication;
