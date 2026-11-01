"use client";
import { site } from "@/content/site";

export default function Contact() {
  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const subject = String(f.get("subject") || "") || "Portfolio message";
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="contact rv">
      <p className="kick">Contact</p>
      <h2>Get in <span>touch</span>.</h2>
      <p className="sub">Contact me for opportunities, or let’s build something together.</p>
      <div className="row">
        <a className="ic w" href={site.links.github}>GitHub</a>
        <a className="ic w" href={site.links.linkedin}>LinkedIn</a>
        <a className="ic w" href={site.links.leetcode}>LeetCode</a>
        <a className="ic w" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <input className="f" name="subject" placeholder="Subject" />
        <textarea className="f" name="message" placeholder="Your message" required />
        <button className="cta" type="submit">Send message →</button>
      </form>
    </section>
  );
}
