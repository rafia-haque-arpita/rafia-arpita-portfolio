const items = ["about", "projects", "skills", "experience", "contact"];

export default function Nav() {
  return (
    <nav>
      <a className="logo" href="#home">
        <b>✦</b> Arpita <small>.dev</small>
      </a>
      <div className="links">
        {items.map((i) => (
          <a key={i} href={`#${i}`}>{i}</a>
        ))}
      </div>
      <a className="pill" href="#contact">Get in touch</a>
    </nav>
  );
}
