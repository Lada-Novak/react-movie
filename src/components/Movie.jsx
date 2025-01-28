function Movie(props) {
  const{
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return <div id={id} className="card">
    <div className="card-image waves-effect waves-block waves-light">
      {
        poster === 'N/A' ?
          <img className="activator" src={`https://avatar.iran.liara.run/public/300x430?text=${title}`} />
          :
          <img className="activator" src={poster} />
      }
      
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="!#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{title}</span>
        <p>{year}
          <span className="right">{type}</span>
        </p>
    </div>
  </div>
}
export {Movie}