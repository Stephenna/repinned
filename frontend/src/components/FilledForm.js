import { Star,} from "@material-ui/icons";
import { format } from "timeago.js";

const FilledForm = ({ title, desc, rating, id, username, createdAt }) => {
  return (
    // <div className="card" key={id}>
    //   <label>Title:</label>
    //   <h4 className="title">{title}</h4>
    //   <label>Review:</label>
    //   <p className="desc">{desc}</p>
    //   <label>Rating:</label>
    //   <div className="star">
    //     {Array(rating).fill(<Star className="star" />)}
    //   </div>
    //   <label>Info:</label>
    //   <span className="username">
    //     Created by <b>{username}</b>
    //   </span>
    //   <span className="date">{format(createdAt)}</span>
    // </div>
    <div className="card" key={id}>
        <div className="card-header">
          <h1> {title} </h1>
        </div>
        <div className="card-body">
         <span className="user">
         <p className="username">{username} </p>
         <div className="bar"></div>
         <p className="date"> {format(createdAt)}</p>
         </span>
         
        </div>
        <div className="stars">
         {Array(rating).fill(<Star className="star" />)}
        </div>
        <div className="desc">
          <p>" {desc} "</p>
        </div>
    </div>
    
  );
};

export default FilledForm;
