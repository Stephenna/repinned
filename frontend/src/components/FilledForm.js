import { Star,} from "@material-ui/icons";
import { format } from "timeago.js";

const FilledForm = ({ title, desc, rating, id, username, createdAt }) => {
  return (
    <div className="card" key={id}>
      <label>Title:</label>
      <h4>{title}</h4>
      <label>Review:</label>
      <p className="desc">{desc}</p>
      <label>Rating:</label>
      <div className="star">
        {Array(rating).fill(<Star className="star" />)}
      </div>
      <label>Info:</label>
      <span className="username">
        Created by <b>{username}</b>
      </span>
      <span className="date">{format(createdAt)}</span>
    </div>
  );
};

export default FilledForm;
