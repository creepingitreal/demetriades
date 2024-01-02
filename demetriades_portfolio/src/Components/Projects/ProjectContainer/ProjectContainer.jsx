import "./ProjectContainer.css"

function ProjectContainer ({className}) {
    return (
      <section className={className}>
        <img src="https://www.primrose.co.uk/media/wysiwyg/house_plant_blog_2_1_.jpg" className="project-image"/>
        <div className="project-details">
          <h1>hello</h1>
          <p>It's me, a Mario</p>
          <button className="read-more">Read More</button>
        </div>
      </section>
    );
  }

export default ProjectContainer