import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { codeSample, projects, repositories, sections } from "./portfolio-data";

const baseUrl = import.meta.env.BASE_URL;

const principles = [

  "Build with clarity",

  "Reduce unnecessary complexity",

  "Design reusable systems",

  "Prioritize speed and usability",

  "Ship stable and maintainable solutions",

  "Think in components, not pages",
];


const techIcons: Record<string, { slug: string; color: string }> = {
  React: { slug: "react", color: "61DAFB" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Next.js": { slug: "nextdotjs", color: "FFFFFF" },
  "ASP.NET Core MVC": { slug: "dotnet", color: "512BD4" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  HTML5: { slug: "html5", color: "E34F26" },
  CSS3: { slug: "css", color: "1572B6" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  Java: { slug: "openjdk", color: "FFFFFF" },
  PHP: { slug: "php", color: "777BB4" },
  MySQL: { slug: "mysql", color: "4479A1" },
  "C#": { slug: "sharp", color: "9B4F96" },
  Git: { slug: "git", color: "F05032" },
  GITHUB: { slug: "github", color: "FFFFFF" },
  FIGMA: { slug: "figma", color: "F24E1E" },
  "VS CODE": { slug: "visualstudiocode", color: "007ACC" },
  POSTMAN: { slug: "postman", color: "FF6C37" },
  EXPO: { slug: "expo", color: "FFFFFF" },
};

function TechIcon({ name }: { name: string }) {
  const icon = techIcons[name] ?? techIcons[name.toUpperCase()];

  if (!icon) {
    return (
      <span className="tech-icon-fallback" aria-hidden="true">
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      className="tech-icon"
      src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
      alt=""
      aria-hidden="true"
      loading="lazy"/>
  );
}

type Skill = {

  name: string;

  level: string;

  years: string;

  score: number;

};

const frontendSkills: Skill[] = [

  { name: "React", level: "Project use", years: "Web", score: 65 },

  { name: "TypeScript", level: "Project use", years: "Web", score: 45 },

  { name: "Next.js", level: "Project use", years: "Web", score: 40 },

  { name: "JavaScript", level: "Project use", years: "Web", score: 73 },

  { name: "HTML5", level: "Project use", years: "Web", score: 100 },

  { name: "CSS3", level: "Project use", years: "Web", score: 93 },

  { name: "Tailwind CSS", level: "Project use", years: "Web", score: 45 },

];

const backendSkills: Skill[] = [

  { name: "Node.js", level: "Project use", years: "Backend", score: 64 },

  { name: "ASP.NET Core MVC", level: "Project use", years: "Backend", score: 64 },

  { name: "Java", level: "Project use", years: "Backend", score: 90 },

  { name: "PHP", level: "Project use", years: "Backend", score: 58 },

  { name: "MySQL", level: "Project use", years: "Data", score: 74 },

  { name: "C#", level: "Project use", years: "Backend", score: 60 },

];

const tools = ["GIT", "GITHUB", "FIGMA", "VS CODE", "POSTMAN", "EXPO"];

const engineering = ["DESIGN SYSTEMS","RESPONSIVE DEV", "ACCESSIBILITY", "DATABASE DESIGN", "REST APIS", "API INTEGRATION"];

const experience = [

  {

    dates: "2025 — PRESENT",

    title: "Freelancer Software Developer",

    detail: "Working as a freelance software developer, I work in collaboration with clients to build web applications, focusing on delivering high-quality solutions that meet their needs.",

  },
  {
  dates: "2023 - PRESENT",
  title: "CSE Student at University for Business and Technology - UBT",
  description: "BSc studies in Computer Science and Engineering, focused on software development, web technologies, and mobile applications.",
},

];

const performanceStats = [
  { value: "3+", label: "YEARS OF CODING EXPERIENCE" },
  { value: "2", label: "Production Systems Launched" },
  { value: "10+", label: "PROJECTS DEVELOPED" },
  { value: "42%", label: "Average Performance Improvement" },
  { value: "10+", label: "TECHNOLOGIES USED" },
  { value: "∞", label: "CONTINUOUS IMPROVEMENT" },
];

const repositoryStats = [

  { value: "23", label: "CONTRIBUTIONS THIS YEAR" },

  { value: "04", label: "PUBLIC REPOSITORIES" },

  { value: "2", label: "PROJECTS LIVE" },

  { value: "10", label: "STARS RECEIVED PER PROJECTS" },

];

const sectionNames: Record<string, string> = {

  "001": "DEVELOPER_PROFILE",

  "002": "BIOGRAPHY",

  "003": "PRINCIPLES",

  "004": "PERFORMANCE_DATA",

  "005": "TECH_STACK",

  "006": "EXPERIENCE_LOG",

  "007": "PROJECT_ARCHIVE",

  "008": "OPEN_SOURCE",

  "009": "CONTACT_PROTOCOL",

};

function CornerMarks() {

  return (

    <>

      <span className="corner-mark corner-mark--tl" aria-hidden="true" />

      <span className="corner-mark corner-mark--tr" aria-hidden="true" />

      <span className="corner-mark corner-mark--bl" aria-hidden="true" />

      <span className="corner-mark corner-mark--br" aria-hidden="true" />

    </>

  );

}

function CornerPanel({

  children,

  className = "",

  id,

  label,

}: {

  children: ReactNode;

  className?: string;

  id?: string;

  label?: string;

}) {

  return (

    <section id={id} className={`panel corner-panel ${className}`}>

      {label && <div className="section-label">{label}</div>}

      <CornerMarks />

      {children}

    </section>

  );

}

function SectionHeading({
  number,
  title,
  note,
}: {
  number: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <h2>
        <span className="section-heading__number">
          [ {sectionNames[number]} / {number} ]
        </span>

        {title && (
          <span className="section-heading__title">{title}</span>
        )}
      </h2>

      {note && <p>{note}</p>}
    </div>
  );
}

function ArrowMark() {

  return <span className="arrow-mark" aria-hidden="true">↗</span>;

}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: Skill[];
}) {
  return (
    <div className="skill-group">
      <div className="skill-group__heading">
        <h3>{title}</h3>
        <span>{String(items.length).padStart(2, "0")} ITEMS</span>
      </div>

      <div className="skill-grid">
        {items.map((item) => (
          <article className="skill-item" key={item.name}>
            <span className="skill-item__logo" aria-hidden="true">
              <TechIcon name={item.name} />
            </span>

            <strong className="skill-item__name">
              {item.name}
            </strong>

            <span className="skill-item__usage">
              {item.level} / {item.years}
            </span>

            <span
              className="skill-segments"
              role="img"
              aria-label={`${item.score}%`}
            >
              {Array.from({ length: 20 }, (_, index) => (
                <i
                  className={
                    index < Math.round(item.score / 5)
                      ? "is-filled"
                      : ""
                  }
                  key={index}
                />
              ))}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

function BadgeGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="skill-group badge-group">
      <div className="skill-group__heading">
        <h3>{title}</h3>
        <span>{String(items.length).padStart(2, "0")} ITEMS</span>
      </div>

      <div className="badge-grid">
        {items.map((item) => (
          <span className="tag" key={item}>
            <TechIcon name={item} />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {

  const links = [

    project.caseStudy && { label: "CASE STUDY", href: project.caseStudy },

    project.livePreview && { label: "LIVE PREVIEW", href: project.livePreview },

    { label: "GITHUB", href: project.repository },

  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (

    <article className="project-card">

      <CornerMarks />

      <div className="project-visual">

        <div className={`project-visual__art project-visual__art--${project.visual}`} aria-hidden="true">

          <span className="project-visual__cross project-visual__cross--one" />

          <span className="project-visual__cross project-visual__cross--two" />

          <span className="project-visual__shape" />

        </div>

      </div>

      <div className="project-card__body">

        <div className="project-card__title-row">

          <h3>{project.title}</h3>

          <span>{project.number} / {project.year}</span>

        </div>

        <p>{project.description}</p>

        <div className="project-tags" aria-label="Technologies">

          {project.technologies.map((technology) => (

            <span className="tag" key={technology}>{technology}</span>

          ))}

        </div>

        <div className="project-links">

          {links.map(({ label, href }) => (

            <a className="text-link" href={href} target="_blank" rel="noreferrer" key={label}>

              {label} <ArrowMark />

            </a>

          ))}

        </div>

      </div>

    </article>

  );

}

function DecodedStat({ value, label }: { value: string; label: string }) {

  const [display, setDisplay] = useState(value);

  useEffect(() => {

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let step = 0;

    const interval = window.setInterval(() => {

      step += 1;

      setDisplay(

        value

          .split("")

          .map((character, index) => {

            if (!/\d/.test(character) || index < Math.floor(step / 1.25)) return character;

            return String(Math.floor(Math.random() * 10));

          })

          .join(""),

      );

      if (step >= value.length * 1.25 + 2) {

        window.clearInterval(interval);

        setDisplay(value);

      }

    }, 70);

    return () => window.clearInterval(interval);

  }, [value]);

  return (

    <div className="performance-stat">

      <strong aria-label={value}>{display}</strong>

      <span>{label}</span>

    </div>

  );

}

function tokenizeCode(value: string) {

  const pattern =
    /(\/\/.*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:import|from|const|export|function|return|as)\b|\b(?:Hero|Skills|Projects|Contact)\b|\b(?:React|PortfolioOverview|string|number)\b|\b\d+\b)/g;

  const result: ReactNode[] = [];

  let lastIndex = 0;

  for (const match of value.matchAll(pattern)) {

    const index = match.index ?? 0;

    if (index > lastIndex) result.push(value.slice(lastIndex, index));

    const token = match[0];

    let className = "code-token";

    if (token.startsWith("//")) className += " code-token--comment";

    else if (token.startsWith('"') || token.startsWith("'")) className += " code-token--string";

    else if (/^\d+$/.test(token)) className += " code-token--number";

    else if (/^(Hero|Skills|Projects|Contact)$/.test(token)) className += " code-token--function";

    else if (/^(React|PortfolioOverview|string|number)$/.test(token)) className += " code-token--type";

    else className += " code-token--keyword";

    result.push(<span className={className} key={`${index}-${token}`}>{token}</span>);

    lastIndex = index + token.length;

  }

  if (lastIndex < value.length) result.push(value.slice(lastIndex));

  return result;

}

function NotFound() {

  return (

    <main className="not-found">

      <div className="not-found__panel">

        <CornerMarks />

        <span className="section-label">[ ROUTE_NOT_FOUND ]</span>

        <strong>404</strong>

        <h1>PAGE NOT FOUND</h1>

        <p>The requested portfolio route does not exist.</p>

        <a className="button" href={baseUrl}>RETURN TO PROFILE <ArrowMark /></a>

      </div>

    </main>

  );

}

function PortfolioApp() {

  const [loading, setLoading] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("profile");

  const [time, setTime] = useState(() => new Date());

  const [openExperience, setOpenExperience] = useState(0);

  const [codeVisible, setCodeVisible] = useState(false);

  const [typedCode, setTypedCode] = useState("");

  const codePanelRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useMemo(

    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,

    [],

  );

  useEffect(() => {

    if (prefersReducedMotion) {

      setLoading(false);

      return;

    }

    const timeout = window.setTimeout(() => setLoading(false), 2400);

    return () => window.clearTimeout(timeout);

  }, [prefersReducedMotion]);

  useEffect(() => {

    const interval = window.setInterval(() => setTime(new Date()), 1000);

    return () => window.clearInterval(interval);

  }, []);

  useEffect(() => {

    const closeOnEscape = (event: KeyboardEvent) => {

      if (event.key === "Escape") setMenuOpen(false);

    };

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);

  }, []);

 useEffect(() => {
  const updateActiveSection = () => {
    const marker = window.innerHeight * 0.35;
    const positions = sections
      .map(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return null;

        const rect = element.getBoundingClientRect();

        return {
          id,
          top: rect.top,
          bottom: rect.bottom,
        };
      })
      .filter(
        (section): section is {
          id: string;
          top: number;
          bottom: number;
        } => section !== null
      );

    const current = positions.find(
      (section) =>
        section.top <= marker && section.bottom > marker
    );

    if (current) {
      setActiveSection(current.id);
      return;
    }

    const previous = positions
      .filter((section) => section.top <= marker)
      .at(-1);

    if (previous) {
      setActiveSection(previous.id);
    } else if (positions.length > 0) {
      setActiveSection(positions[0].id);
    }
  };

  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });

  window.addEventListener("resize", updateActiveSection);

  return () => {
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("resize", updateActiveSection);
  };
}, []);

  useEffect(() => {

    const panel = codePanelRef.current;

    if (!panel) return;

    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setCodeVisible(true);

          observer.disconnect();

        }

      },

      { threshold: 0.2 },

    );

    observer.observe(panel);

    return () => observer.disconnect();

  }, []);

  useEffect(() => {

    if (!codeVisible) return;

    if (prefersReducedMotion) {

      setTypedCode(codeSample);

      return;

    }

    let index = 0;

    let timeout: number | undefined;

    const typeNext = () => {

      index += 1;

      setTypedCode(codeSample.slice(0, index));

      if (index < codeSample.length) {

        const previous = codeSample[index - 1];

        const delay = previous === "\n" ? 180 : /[.,;:]/.test(previous) ? 70 : 24;

        timeout = window.setTimeout(typeNext, delay * (0.9 + Math.random() * 0.2));

      }

    };

    timeout = window.setTimeout(typeNext, 400);

    return () => window.clearTimeout(timeout);

  }, [codeVisible, prefersReducedMotion]);

  useEffect(() => {

    const updatePointer = (event: PointerEvent) => {

      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);

      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);

    };

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => window.removeEventListener("pointermove", updatePointer);

  }, []);

  const clock = time.toLocaleTimeString("en-GB", {

    hour: "2-digit",

    minute: "2-digit",

    second: "2-digit",

    hour12: false,

  });

  return (

    <>

      <a className="skip-link" href="#profile">SKIP TO CONTENT</a>

      <div className={`preloader${loading ? " preloader--visible" : " preloader--hidden"}`} aria-hidden={!loading}>

        <div className="preloader__content">

          <div className="brand brand--large"><span className="brand__glyph">{"</>"}</span>GG / OS</div>

          <div className="preloader__log">

            <span>OS v1.0.26</span>

            <span>Initializing profile...</span>

            <span>Loading experience data...</span>

            <span>Syncing project archive...</span>

            <span>Connecting developer node...</span>

            <strong>ACCESS GRANTED_</strong>

          </div>

          <div className="preloader__track"><span /></div>

        </div>

      </div>

      <div className="technical-grid" aria-hidden="true" />

      <header className="topbar">

        <a className="brand" href="#profile" aria-label="Getuar Gashi home">

          <span className="brand__glyph">{"</>"}</span>

          <span>GETUAR GASHI</span>

        </a>

        <nav

          id="main-navigation"

          className={`topbar__nav${menuOpen ? " topbar__nav--open" : ""}`}

          aria-label="Main navigation"

        >

          {sections.map(({ id, number, label }) => (

            <a

              className={activeSection === id ? "is-active" : ""}

              href={`#${id}`}

              key={id}

              aria-current={activeSection === id ? "location" : undefined}

              onClick={() => setMenuOpen(false)}

              aria-label={`Go to section ${number} ${label}`}

            >

            <span>{number}</span>
            </a>

          ))}

          <a className="button button--mobile-download" href={`${baseUrl}documents/CV.pdf`} download>

            DOWNLOAD CV <ArrowMark />

          </a>

        </nav>

        <div className="topbar__meta">

          <span>LIPJAN, KOSOVË</span>

          <time>{clock}</time>

        </div>

        <a className="button button--download" href={`${baseUrl}documents/CV.pdf`} download>

          DOWNLOAD CV <ArrowMark />

        </a>

        <button

          className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}

          type="button"

          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}

          aria-controls="main-navigation"

          aria-expanded={menuOpen}

          onClick={() => setMenuOpen((open) => !open)}

        >

          <span /><span />

        </button>

      </header>

      <main className="page-shell">

        <div className="intro-grid">

           <CornerPanel id="profile" className="profile-panel" label="[ DEVELOPER_PROFILE / 001 ]">

            <div className="profile-photo-wrap" role="img" aria-label="Getuar Gashi profile portrait">

              <img src={`${baseUrl}images/profile-photo.jpg`} alt="Getuar Gashi profile portrait" />

              <span className="profile-photo__matrix" aria-hidden="true">



              </span>

              <span className="profile-photo__scanline" aria-hidden="true" />

              <span className="profile-photo__index">GG-001</span>

            </div>

            <div className="profile-name-row">
              <h1>GETUAR GASHI</h1>
              <span className="barcode" aria-hidden="true" />
            </div>
            <p className="profile-role">FULL-STACK DEVELOPER &amp; MOBILE</p>

            <div className="profile-details">

              <div><span>EXPERIENCE</span><strong>3+ Years</strong></div>

              <div><span>FOCUS</span><strong>Product Engineering</strong></div>

              <div><span>Response Time</span><strong className="status-value">&lt; 24h</strong></div>

              <div><span>STATUS</span><strong className="status-value"><i /> Online</strong></div>

            </div>
          </CornerPanel>

          <div className="intro-right">
            <CornerPanel id="biography" className="biography-panel" label="[ BIOGRAPHY / 002 ]">
              <h2 className="display-title"style={{ fontSize: "clamp(1.4rem, 1.6vw, 2rem)",color: "#B8C0BA" }}>ENGINEERING CLARITY THROUGH CODE, SYSTEMS, AND INTERFACES.</h2>
          
              <p>I’m a full-stack developer passionate about building modern, scalable, and user-focused applications. I combine clean engineering with thoughtful design, focusing on performance, maintainability, and meaningful digital experiences.</p>
              <p>From responsive websites to full-stack platforms and mobile applications, I enjoy turning ideas into practical software using modern technologies.</p>

              <div className="quote-line"style={{fontSize: "clamp(0.3rem, 0.6vw, 0.8rem)",color: "#C5D4C8",background: "#142014",padding: "14px 15px",borderRadius: "3px"}}>My strongest work happens where product thinking, technical structure, and visual precision meet.</div>            </CornerPanel>

            <div className="intro-lower">

              <CornerPanel id="principles" className="principles-panel" label="[ PRINCIPLES / 003 ]">

                <div className="principles-list">

                  {principles.map((principle, index) => (

                    <div className="principle" key={principle}>

                      <span>{String(index + 1).padStart(2, "0")}</span>

                      <p>{principle}</p>

                    </div>

                  ))}

                </div>

              </CornerPanel>

              <CornerPanel id="performance" className="performance-panel" label="[ PERFORMANCE_DATA / 004 ]">

                <div className="performance-orbit" aria-hidden="true">

                  {Array.from({ length: 14 }, (_, index) => <span key={index} />)}

                </div>

                <div className="performance-stats">

                  {performanceStats.map((stat) => (

                    <DecodedStat key={stat.label} value={stat.value} label={stat.label} />

                  ))}

                </div>

              </CornerPanel>

            </div>

          </div>

        </div>

        <section id="stack" className="content-section">

          <SectionHeading number="005" title="" />
          

          <CornerPanel className="stack-panel">
                  
            <div className="stack-main">

              <SkillGroup title="FRONTEND" items={frontendSkills} />

              <SkillGroup title="BACKEND" items={backendSkills} />

            </div>

            <div className="stack-secondary">

              <BadgeGroup title="TOOLS" items={tools} />

              <BadgeGroup title="ENGINEERING" items={engineering} />

            </div>

          </CornerPanel>

        </section>

        <section id="education" className="content-section">

          <SectionHeading number="006" title="" note="PRODUCTS, PLATFORMS, AND TEAMS." />

          <div className="education-list">

            {experience.map((item, index) => {

              const expanded = openExperience === index;

              return (
  <article
    className={`education-item${expanded ? " education-item--open" : ""}`}
    key={item.title}
  >
    <button
      className="education-item__toggle"
      type="button"
      aria-expanded={expanded}
      onClick={() => setOpenExperience(expanded ? -1 : index)}
    >
      <span className="education-item__date">{item.dates}</span>

      <span className="education-item__main">
        <strong>{item.title}</strong>
      </span>

      <span className="education-item__icon" aria-hidden="true">
        {expanded ? "−" : "+"}
      </span>
    </button>
    {item.title === "CSE Student at University for Business and Technology - UBT" && (
  <details className="education-certificates">
    <summary className="experience-certificate-btn">
      <span>CERTIFICATES</span>
      <span aria-hidden="true">↓</span>
    </summary>

    <div className="education-certificates__menu">
      <a
        href={`${baseUrl}documents/GLOBAL%20UBT%20FEST%202025.pdf`}
        download="GLOBAL UBT FEST 2025.pdf"
      >
        <span>GLOBAL UBT FEST 2025</span>
        <span aria-hidden="true">↓</span>
      </a>

      <a
        href={`${baseUrl}documents/Mindluster_Certificate.pdf`}
        download="Mindluster_Certificate.pdf"
      >
        <span>Mindluster Certificate</span>
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  </details>
)}

    <div
      className="education-item__content"
      aria-hidden={!expanded}
      inert={!expanded}
    >
      <div className="education-item__inner">
        <p>{item.description}</p>
      </div>
    </div>
  </article>
);

            })}

          </div>

        </section>

        <section id="projects" className="content-section">

          <SectionHeading

            number="007"

            title=""

            note="SELECTED PRODUCTS, SYSTEMS, AND DIGITAL EXPERIENCES."

          />

          <div className="projects-grid">

            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}

          </div>

        </section>

        <section id="repositories" className="content-section">

          <SectionHeading

            number="008"

            title=""

            note="BUILDING IN PUBLIC AND CONTRIBUTING TO THE ECOSYSTEM."

          />

          <CornerPanel className="repositories-panel">

            <div className="repository-stats" aria-label="Sample repository statistics">

              {repositoryStats.map((stat) => (

                <div className="repository-stat" key={stat.label}>

                  <strong>{stat.value}</strong><span>{stat.label}</span>

                </div>

              ))}

            </div>

            <div className="contribution-map" role="img" aria-label="Decorative GitHub-style contribution map">

              <span className="contribution-map__label">[ CONTRIBUTION_MAP ]</span>

              <div className="contribution-map__cells" aria-hidden="true">

                {Array.from({ length: 7 * 85 + 5}, (_, index) => (

                  <i

                    className={`contribution-cell contribution-cell--${(index * 5 + Math.floor(index / 7)) % 4}`}

                    key={index}

                    style={{ animationDelay: `${-(Math.floor(index / 8) * 0.33).toFixed(2)}s` }}

                  />

                ))}

              </div>

            </div>

            <div className="repository-grid">

              {repositories.map((repository) => (

                <article className="repository-card" key={repository.name}>
                <span className="repository-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"> <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.62 5.23-5.11 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" /></svg></span>
                  <div className="repository-card__body">

                    <div className="repository-card__title">

                      <strong>{repository.name}</strong>

                      <small>PROJECT ARCHIVE</small>

                    </div>

                    <p>{repository.description}</p>

                    <a className="text-link" href={repository.repository} target="_blank" rel="noreferrer">

                      VIEW REPOSITORY <ArrowMark />

                    </a>

                  </div>

                </article>

              ))}

            </div>

          </CornerPanel>

          <CornerPanel className="code-panel">

            <div

              className={`code-window${codeVisible ? " code-window--visible" : ""}`}

              ref={codePanelRef}

              role="region"

              aria-label="Animated TypeScript portfolio code sample"

            >

              <div className="code-lines">

                {typedCode.split("\n").map((line, index) => (

                  <div className="code-line" key={index}>

                    <span className="code-line__number">{String(index + 1).padStart(2, "0")}</span>

                    <code>

                      {tokenizeCode(line)}

                      {index === typedCode.split("\n").length - 1 && codeVisible && <i className="code-cursor" />}

                    </code>

                  </div>

                ))}

              </div>

            </div>

          </CornerPanel>

        </section>

        <section id="contact" className="content-section">

          <SectionHeading number="009" title="" note="LET’S BUILD SOMETHING USEFUL." />

          <div className="contact-grid">

            <CornerPanel className="contact-info">

              <p className="contact-intro">

                Have a product idea, technical challenge, or digital experience that needs clean execution? Send a message with your goals, timeline, and project context.
                <br />
                <br />
                Available for freelance projects, remote roles, product collaborations, and technical consulting.

              </p>

              <div className="contact-links">

                <div><span>GITHUB</span><a href="https://github.com/Getuar333" target="_blank" rel="noreferrer">github.com/Getuar333</a></div>

                <div><span>LINKEDIN</span><a href="https://www.linkedin.com/in/getuar-gashi-5490b4336/" target="_blank" rel="noreferrer">linkedin.com/getuar-gashi</a></div>

                <div><span>FACEBOOK</span><a href="https\://www\.facebook.com/getuar.gashi.94801" target="_blank" rel="noreferrer">facebook.com/getuar.gashi</a></div>

                <div><span>EMAIL</span><a href="mailto:getuar.gaming@gmail.com" target="_blank" rel="noreferrer">getuar.gaming@gmail.com</a></div>

                <div><span>PHONE</span><a href="tel:+383 45 367 137" target="_blank" rel="noreferrer">+383 45 367 137</a></div>

                <div><span>LOCATION</span><a href="https://www.google.com/maps/search/?api=1&query=Lipjan,14000" target="_blank" rel="noreferrer">Lipjan, 14000</a></div>

              </div>

            </CornerPanel>

          </div>

        </section>

      </main>

      <footer className="footer">

        <p>© 2026 <strong>GETUAR GASHI</strong></p>

        <div className="footer__status">

          <a href="#profile">JUMP TO PROFILE</a>

        </div>

      </footer>

    </>

  );

}

function App() {
  const pathname = typeof window === "undefined" ? undefined : window.location?.pathname;

  if (
    pathname &&
    pathname !== baseUrl &&
    pathname !== baseUrl.slice(0, -1)
  ) {
    return <NotFound />;
  }

  return <PortfolioApp />;
}

export default App;
