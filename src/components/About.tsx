import { site } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="rv">
      <p className="kick">About</p>
      <h2>Me, talking about <span>myself</span>.</h2>
      <div className="about">
        <div>{site.about.map((p, i) => <p key={i}>{p}</p>)}</div>
        <div>
          <p className="kick">Education</p>
          <div className="tl">
            {site.education.map((e) => (
              <div key={e.title}><h3>{e.title}</h3><p>{e.school}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
