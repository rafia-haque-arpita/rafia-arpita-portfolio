import { site } from "@/content/site";

export default function Projects() {
  return (
    <section id="projects" className="rv">
      <p className="kick">Selected Work</p>
      <h2>Projects, built <span>from scratch</span>.</h2>
      <p className="sub">Academic and personal software projects. Every card links to its repository on GitHub.</p>
      <div className="g3">
        {site.projects.map((p) => (
          <a key={p.title} className="card" href={p.url}>
            <div className="t"><span>Software</span><span>↗</span></div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        <a className="pill" href={site.links.github}>All repositories →</a>
      </p>
    </section>
  );
}
