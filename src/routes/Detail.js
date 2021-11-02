import React from "react";
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movieDetail">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <div className="movieDetail__date">
            <h3 className="movieDetail__title">{location.state.title}</h3>
            <h5 className="movieDetail__year">{location.state.year}</h5>
            <ul className="movieDetail__genres">
              {location.state.genres.map((genre) => {
                return <li className="movieDetail__genre">{genre}</li>;
              })}
            </ul>
            <p className="movieDetail__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;