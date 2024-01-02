import "./ProjectContainer.css"

function ProjectContainer ({className}) {
    return (
      <section className={className}>
        <div className="project-details">
          <h1>hello</h1>
          <p>It's me, a Mario</p>
          <button className="read-more">Read More</button>
        </div>
        <a href="#" className="project-image"></a>
      </section>
    );
  }

export default ProjectContainer