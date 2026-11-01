import { site } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="rv">
      <p className="kick">Experience</p>
      {site.experience.map((e) => (
        <div key={e.title} className="card exp">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/genmorphics.png" alt="Genmorphics AI Solution logo" />
          <div><h3>{e.title}</h3><small>@ {e.org}</small></div>
          <span className="when">{e.when}</span>
        </div>
      ))}
    </section>
  );
}
