import Like from './Like.js';
import Dislike  from './Dislike.js';
import Delete from './Delete.js';


function Action(){
    return(
 
          <div className="Action">
              <Delete />  
              <Like />
              <Dislike />
             
           </div>
              
                 
    );
};
export default Action;     
