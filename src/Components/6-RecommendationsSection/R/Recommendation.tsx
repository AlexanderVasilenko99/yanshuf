import RecommendationModel from "../../../Models/RecommendationModel";
import "./Recommendation.scss";

function Recommendation(props: RecommendationModel): JSX.Element {
    return (
        <div className="Recommendation">
            <div className="header">"{props.header}"</div>
            <hr />
            <div className="content">{props.content}</div>
            <div className="author">{props.author}</div>
        </div>
    );
}

export default Recommendation;
