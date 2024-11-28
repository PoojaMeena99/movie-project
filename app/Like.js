// "use client"
// import React from 'react';
// import styles from './movie.css';
// import Head from './head.js';
// import Row from './movie_row.js';
// import Footer from './footer.js';
// import { movie_list } from './movie_list.js';

// const Page = () => {
//   return (
//     <div>
//       <Head />
//       {movie_list.map((movie) => (
//         <Row
//           image={movie.image}
//           name={movie.movie}
//           year={movie.year}
//           time={movie.time}
//           junor={movie.junor}
//           description={movie.description}
//         />
//       ))}
//             const [items, setItems] = useState([
//       { id: 1, likeCount: 10, dislikeCount: 5 },
//       { id: 2, likeCount: 5, dislikeCount: 2 },
//       { id: 3, likeCount: 8, dislikeCount: 3 },
//     ]);
//         const handleSortByLike = () => {
//               const sortedItems = [...items].sort((a, b) => b.likeCount - a.likeCount);
//               setItems(sortedItems);
//             };

//             const handleSortByDislike = () => {
//               const sortedItems = [...items].sort((a, b) => b.dislikeCount - a.dislikeCount);
//               setItems(sortedItems);
//             };

//         return (
//               <div>
//                 <button onClick={handleSortByLike}>Sort by Like</button>
//                 <button onClick={handleSortByDislike}>Sort by Dislike</button>

//                 {items.map((item) => (
//                   <div key={item.id}>
//                     <div>Like Count: {item.likeCount}</div>
//                     <div>Dislike Count: {item.dislikeCount}</div>
//                   </div>
//                 ))}
//               </div>
//             );

      

//       <Footer />
//     </div>
//   );
// };

// export default Page;

