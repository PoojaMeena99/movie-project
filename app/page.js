import styles from './movie.css';
import Head from './head.js';
import Row from './movie_row.js';
import Footer from'./footer.js';
import {movie_list}  from './movie_list.js';

function Page(){
    return(
            <div>
                <Head />
                {movie_list.map((movie) => (
                <Row
                    image={movie.image}
                    name={movie.movie}
                    year={movie.year}
                    time={movie.time}
                    junor={movie.junor}
                    description={movie.description}
                 / >
     
                ))}
                <Footer />
                
           </div>
    
   );
};
export default Page;      

