import Delete from './Delete.js';
import LikeDislike from './Rating.js';


function Action(props) {
    return (

        <div className="Action">
            <LikeDislike
                movie={props.movie}
                onLikeDislike={props.onLikeDislike}
            />
            <Delete />
        </div>
    );
};
export default Action;     
