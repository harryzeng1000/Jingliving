import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Jingliving INC</h1>
        <p>A New Way to Purchase Your Sauna Room.</p>
        <DestinationData
          className="first-des"
          heading="Our Goal"
          text="Founded in 2019, JingLiving Inc. stands as a pioneering e-commerce 
          platform in the U.S., revolutionizing the way premium sauna rooms are purchased. 
          Specializing in mid to high-end sauna creations, every piece from JingLiving is exquisitely 
          crafted using either African Okoume or Canadian Hemlock wood, ensuring not just luxury but 
          unparalleled quality for its discerning clientele"
          img1={Mountain1}
          img2={Mountain2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Our Platform"
          text="JingLiving Inc. is a renowned name in the e-commerce landscape with its esteemed presence on major 
          platforms like Amazon, Wayfair, and Walmart. With years of expertise in managing online storefronts, 
          we have not only carved a niche in the digital marketplace but have also cultivated trust among our global 
          clientele. Beyond our robust online operations, our production technology for sauna rooms is at the forefront 
          of global innovation, ensuring that every JingLiving product is a testament to cutting-edge design and 
          superior craftsmanship."
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
