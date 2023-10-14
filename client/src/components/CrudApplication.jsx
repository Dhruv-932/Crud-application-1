import React from "react";

const CrudApplication = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/image2.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Set the height of the div as needed
      }} 
    >
      {/* Content of the component */}
    </div>
  );
};

export default CrudApplication;

// import React from "react";

// import background from "../assets/background_night_1.jpg";

// const CrudApplication = () => {
//   let imageStyle = {
//     height: "350px",
//     width: "600px",
//     backgroundImage: 'url("")',
//     backgroundSize: "contain",
//     backgroundRepeat: "no-repeat",
//     color: "white",
//   };
//   console.log(background);
//   return (
//     <div
//       Style={
//         {
//           // backgroundImage: `url(${background})`,
//         }
//       }
//     >
//       <img src={background} />
//       <div class="image" style={imageStyle}>
//         This div contains a background image.
//       </div>
//     </div>
//   );
// };

// export default CrudApplication;
