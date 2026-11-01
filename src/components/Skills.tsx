import { site } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="rv">
      <p className="kick">Capabilities</p>
      <h2>The stack behind <span>the work</span>.</h2>
      <p className="sub">Grouped the way I actually use them.</p>
      <div className="g3">
        {site.skills.map((s) => (
          <div key={s.group} className="card sk">
            <h3>{s.group}</h3>
            <div className="chips">
              {s.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
