export type Project = {
  number: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  visual: string;
  caseStudy: string | null;
  livePreview: string | null;
  repository: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "G.G STRATEGY",
    year: "01",
    description: "A productivity and strategy management application for tasks, notes, calendar planning. Created by - Getuar ",
    technologies: ["REACT", "NODE.JS", "MYSQL"],
    visual: "devsync",
    caseStudy: null,
    livePreview: "https://gg-strategy.netlify.app/",
    repository: "https://github.com/Getuar333/gg-strategy",    
  },
  {
    number: "02",
    title: "UBT-FINDPOINT",
    year: "02",
    description: "A web application that allows users to find points of interest and navigate through them using an interactive map interface. Created by - Group Project",
    technologies: ["REACT NATIVE", "NODE.JS", "MYSQL"],
    visual: "launchgrid",
    caseStudy: null,
    livePreview: null,
    repository: "https://github.com/ertihoxha5/UBT-FindPoint",
  },
  {
    number: "03",
    title: "FREELANCER-MARKETPLACE",
    year: "03",
    description: "A web application that connects freelancers with clients, allowing them to showcase their skills, find projects, and collaborate effectively. Created by - Group Project",
    technologies: ["REACT", "NODE.JS", "MYSQL"],
    visual: "codeboard",
    caseStudy: null,
    livePreview: null,
    repository: "https://github.com/ertihoxha5/Freelancer-MarketPlace",
  },
  {
    number: "04",
    title: "JOURNEYSYNC",
    year: "04",
    description: "A web application that helps users plan and synchronize their journeys, providing features for itinerary management, travel recommendations, and collaborative trip planning. Created by - Group Project",
    technologies: ["NEXT.JS", "NODE.JS", "MONGODB"],
    visual: "pixelcart",
    caseStudy: null,
    livePreview: null,
    repository: "https://github.com/ertihoxha5/JourneySync",
  },
  {
    number: "05",
    title: "SMART HOSPITAL SYSTEM",
    year: "05",
    description: "A web application that streamlines hospital operations, providing features for patient management, appointment scheduling, and medical record keeping. Created by - Group Project",
    technologies: ["REACT", "NODE.JS", "MYSQL"],
    visual: "devsync",
    caseStudy: null,
    livePreview: null,
    repository: "https://github.com/ertihoxha5/SmartHospital-System",
  },
  {
    number: "06",
    title: "RESTAURANT SYSTEM",
    year: "06",
    description: "A web application for managing restaurant operations, including menu management, order processing, and inventory control. Created by - Group Project",
    technologies: ["HTML5", "CSS3", "ASP.NET Core MVC", "MYSQL"],
    visual: "launchgrid",
    caseStudy: null,
    livePreview: null,
    repository: "https://github.com/ertihoxha5/RestaurantSystem",
  },
  {
    number: "07",
    title: "UNITED STADIUM SEAT SELECTION",
    year: "07",
    description: "This project is a web application for ticket management in a football stadium. It was created with passion and creativity by the developer. Created by - Getuar ",
    technologies: ["REACT", "ASP.NET CORE", "C#", "MYSQL"],
    visual: "codeboard",
    caseStudy: null,
    livePreview: null,
    repository: "https://github.com/Getuar333/united",
  },
  {
    number: "08",
    title: "COURSE CLICKER",
    year: "08",
    description: "This project is a web application for Manage course and literature per college. Created by - Group Project",
    technologies: ["HTML5", "CSS", "JAVASCRIPT", "PHP"],
    visual: "pixelcart",
    caseStudy: null,
    livePreview: null,
    repository: "https://github.com/rDiti/Web-Projekti",
  },
];

export const repositories = [
  { name: "G.G Strategy", description: "A productivity and strategy management application.", repository: "https://github.com/Getuar333/gg-strategy" },
  { name: "UBT-FindPoint", description: "A university lost-and-found application for the UBT community.", repository: "https://github.com/ertihoxha5/UBT-FindPoint" },
  { name: "Freelancer-MarketPlace", description: "A freelancer marketplace group project.", repository: "https://github.com/ertihoxha5/Freelancer-MarketPlace" },
  { name: "JourneySync", description: "A travel-related group application.", repository: "https://github.com/ertihoxha5/JourneySync" },
];

export const sections = [
  { id: "profile", number: "001", label: "PROFILE" },
  { id: "biography", number: "002", label: "BIOGRAPHY" },
  { id: "principles", number: "003", label: "PRINCIPLES" },
  { id: "performance", number: "004", label: "PERFORMANCE" },
  { id: "stack", number: "005", label: "TECH STACK" },
  { id: "education", number: "006", label: "EXPERIENCE" },
  { id: "projects", number: "007", label: "PROJECTS" },
  { id: "repositories", number: "008", label: "OPEN SOURCE" },
  { id: "contact", number: "009", label: "CONTACT" },
];

export const codeSample = 

`import { projects } from "./data";

export default function Portfolio() {
  const stack = ["React", "Node.js", "TypeScript"]
  const status = "Available" 

  return (
    <main className="developer-cv">
      <Hero name="Getuar Gashi" status={status} />
      <Skills items={stack} />
      <Projects data={projects} />
      <Contact email="getuar.gaming@gamil.com" />
    </main>
  )
}`;