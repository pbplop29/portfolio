export type Persona = "software" | "embedded";
export type Lang = "en" | "de";
export type L = { en: string; de: string };

export type SkillCategory =
  | "Languages"
  | "Backend"
  | "Frontend"
  | "Testing"
  | "Messaging & Data"
  | "DevOps"
  | "Tools"
  | "Embedded & Hardware"
  | "OS";

export interface Skill {
  name: string;
  category: SkillCategory;
  personas: Persona[];
  /** ids of experience / education / project entries where this was actually used */
  sourceIds: string[];
}

export interface Bullet {
  text: L;
  personas: Persona[];
}

export interface DocumentLink {
  label: L;
  file: string;
}

export interface ExperienceEntry {
  id: string;
  org: string;
  role: L;
  location: string;
  period: L;
  personas: Persona[];
  blurb: L;
  bullets: Bullet[];
  skills: string[];
  documents?: DocumentLink[];
}

export interface EducationEntry {
  id: string;
  school: string;
  degree: L;
  location: string;
  period: L;
  personas: Persona[];
  detail: L;
  skills: string[];
  documents?: DocumentLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  period: L;
  personas: Persona[];
  tagline: L;
  description: L[];
  skills: string[];
  links?: ProjectLink[];
  featured: boolean;
}

export const profile = {
  name: "Biplov Pokhrel",
  location: "Chemnitz, Germany",
  taglineSoftware: {
    en: "Backend engineer who ships, reviews, and occasionally argues with Kafka.",
    de: "Backend-Entwickler, der ausliefert, reviewt und sich gelegentlich mit Kafka streitet.",
  } as L,
  taglineEmbedded: {
    en: "Currently trading REST APIs for CAN buses and interrupt vectors.",
    de: "Tauscht gerade REST-APIs gegen CAN-Busse und Interrupt-Vektoren ein.",
  } as L,
  heroIntro: {
    en: "Software Engineer out of Bangalore, now doing a master's in Automotive Software Engineering in Chemnitz. I write backend systems and, lately, code that talks directly to silicon. Flip the toggle up top — same person, different register.",
    de: "Software Engineer aus Bangalore, mache gerade einen Master in Automotive Software Engineering in Chemnitz. Ich schreibe Backend-Systeme und neuerdings auch Code, der direkt mit Silizium spricht. Der Schalter oben wechselt die Perspektive — gleiche Person, anderes Register.",
  } as L,
  email: "biplov.tuchemnitz@gmail.com",
  emailAlt: "biplov.nitrkl@gmail.com",
  phone: "+49 1633922349",
  linkedin: "https://linkedin.com/in/biplov-nitrkl",
  github: "https://github.com/pbplop29",
  discord: "kominatchuu",
  steam: "sakuni_thoplo",
  steamUrl: "https://steamcommunity.com/id/sakuni_thoplo",
  resumeUrl: "/resume/Biplov_Pokhrel.pdf",
};

export interface Interest {
  emoji: string;
  label: L;
}

export const interests: Interest[] = [
  { emoji: "📷", label: { en: "Photography", de: "Fotografie" } },
  { emoji: "🎨", label: { en: "Painting", de: "Malerei" } },
  { emoji: "🎮", label: { en: "Video Games", de: "Videospiele" } },
  { emoji: "🏓", label: { en: "Table Tennis", de: "Tischtennis" } },
  { emoji: "🥾", label: { en: "Hiking", de: "Wandern" } },
];

export const experience: ExperienceEntry[] = [
  {
    id: "exp-lowes-se",
    org: "Lowe's India",
    role: { en: "Software Engineer", de: "Software Engineer" },
    location: "Bangalore, India",
    period: { en: "May 2025 – Oct 2025", de: "Mai 2025 – Okt. 2025" },
    personas: ["software"],
    blurb: {
      en: "Went from writing tickets to writing the tickets other people write tickets about.",
      de: "Vom Tickets-Schreiben zum Schreiben der Tickets, über die andere Tickets schreiben.",
    },
    bullets: [
      {
        text: {
          en: "Owned features end-to-end — planning, design, implementation, testing, deployment, and production support.",
          de: "Verantwortete Features end-to-end — Planung, Design, Implementierung, Tests, Deployment und Produktionssupport.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Partnered with product to turn fuzzy asks into technical solutions that actually shipped.",
          de: "Arbeitete eng mit dem Produktteam zusammen, um vage Anforderungen in technische Lösungen zu verwandeln, die tatsächlich ausgeliefert wurden.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Wrote architectural design docs and guided teammates through implementation.",
          de: "Schrieb Architektur-Design-Dokumente und leitete Teammitglieder durch die Implementierung.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Integrated OpenAI APIs into existing architecture to digitize handwritten data.",
          de: "Integrierte OpenAI-APIs in die bestehende Architektur zur Digitalisierung handschriftlicher Daten.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Built migration tooling to replace an Apache NiFi pipeline, adding visualization and validation along the way.",
          de: "Baute Migrationswerkzeuge zum Ersatz einer Apache-NiFi-Pipeline, inklusive Visualisierung und Validierung.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Lived in production: deployments, bug fixes, incident response, stability management.",
          de: "Lebte in der Produktion: Deployments, Bugfixes, Incident Response, Stabilitätsmanagement.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Kept Confluence honest and PRs reviewed — planning, design, refinement, the whole loop.",
          de: "Hielt Confluence aktuell und PRs reviewt — Planung, Design, Refinement, der ganze Kreislauf.",
        },
        personas: ["software"],
      },
    ],
    skills: ["Java", "Spring Boot", "Spring WebFlux", "Apache NiFi", "Apache Superset", "Kibana", "Grafana", "Git", "Jira", "Jenkins", "Docker"],
    documents: [
      { label: { en: "Experience Letter", de: "Arbeitszeugnis" }, file: "/docs/lowes-experience-letter.pdf" },
      { label: { en: "Spot Award", de: "Spot Award" }, file: "/docs/lowes-spot-award-certificate.pdf" },
      { label: { en: "Table Tennis Certificate", de: "Tischtennis-Zertifikat" }, file: "/docs/lowes-table-tennis-certificate.pdf" },
    ],
  },
  {
    id: "exp-lowes-ase",
    org: "Lowe's India",
    role: { en: "Associate Software Engineer", de: "Associate Software Engineer" },
    location: "Bangalore, India",
    period: { en: "June 2023 – May 2025", de: "Juni 2023 – Mai 2025" },
    personas: ["software"],
    blurb: {
      en: "Two years of backend microservices, React glue code, and learning what \"enterprise retail scale\" actually means.",
      de: "Zwei Jahre Backend-Microservices, React-Klebecode und die Erkenntnis, was \"Enterprise-Retail-Skala\" wirklich bedeutet.",
    },
    bullets: [
      {
        text: {
          en: "Built and maintained backend microservices in Java, Spring Boot, and Spring WebFlux for enterprise retail systems.",
          de: "Entwickelte und pflegte Backend-Microservices in Java, Spring Boot und Spring WebFlux für Enterprise-Retail-Systeme.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Implemented RESTful APIs and business logic alongside senior engineers.",
          de: "Implementierte RESTful APIs und Geschäftslogik gemeinsam mit Senior Engineers.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Built React frontend components wired straight into backend REST APIs.",
          de: "Baute React-Frontend-Komponenten, direkt verdrahtet mit Backend-REST-APIs.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Bridged frontend and backend teams to ship end-to-end features together.",
          de: "Verband Frontend- und Backend-Teams, um Features gemeinsam end-to-end auszuliefern.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Ran event-driven integrations on Apache Kafka, Camel, and NiFi.",
          de: "Betrieb ereignisgesteuerte Integrationen mit Apache Kafka, Camel und NiFi.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Wrote the SQL and the JPA — PostgreSQL persistence, done properly.",
          de: "Schrieb das SQL und das JPA — PostgreSQL-Persistenz, ordentlich gemacht.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Unit and integration tests, defect triage, code review — the unglamorous stuff that keeps prod calm.",
          de: "Unit- und Integrationstests, Fehleranalyse, Code-Reviews — die unglamouröse Arbeit, die die Produktion ruhig hält.",
        },
        personas: ["software"],
      },
      {
        text: {
          en: "Agile, Git, Jenkins, Docker, Jira, CI/CD — the full enterprise toolbelt.",
          de: "Agile, Git, Jenkins, Docker, Jira, CI/CD — der volle Enterprise-Werkzeuggürtel.",
        },
        personas: ["software"],
      },
    ],
    skills: ["Java", "Spring Boot", "Spring WebFlux", "React", "HTML", "CSS", "Tailwind", "Storybook", "PostgreSQL", "MongoDB", "Apache Kafka", "Apache Camel", "Apache NiFi", "JUnit", "Mockito", "Cypress", "Karate", "Jest", "Docker", "Kubernetes", "Jenkins", "Sonar", "Snyk", "Git", "Jira", "Postman", "Swagger/OpenAPI", "RapidAPI", "JavaScript"],
    documents: [
      { label: { en: "Experience Letter", de: "Arbeitszeugnis" }, file: "/docs/lowes-experience-letter.pdf" },
      { label: { en: "Spot Award", de: "Spot Award" }, file: "/docs/lowes-spot-award-certificate.pdf" },
      { label: { en: "Table Tennis Certificate", de: "Tischtennis-Zertifikat" }, file: "/docs/lowes-table-tennis-certificate.pdf" },
    ],
  },
  {
    id: "exp-drdo",
    org: "Proof and Experimental Establishment Lab, DRDO",
    role: { en: "Intern", de: "Praktikant" },
    location: "Chandipur, India",
    period: { en: "2022", de: "2022" },
    personas: ["embedded", "software"],
    blurb: {
      en: "Pointed cameras at featureless terrain and asked machine learning to find coordinates anyway.",
      de: "Richtete Kameras auf merkmalsloses Gelände und ließ Machine Learning trotzdem Koordinaten finden.",
    },
    bullets: [
      {
        text: {
          en: "Extracted object coordinates from featureless terrain using photogrammetry, image processing, feature extraction, and camera calibration.",
          de: "Extrahierte Objektkoordinaten aus merkmalslosem Gelände mittels Photogrammetrie, Bildverarbeitung, Feature-Extraktion und Kamerakalibrierung.",
        },
        personas: ["embedded"],
      },
      {
        text: {
          en: "Applied machine learning for analysis and optimization of the extracted data.",
          de: "Wendete Machine Learning zur Analyse und Optimierung der extrahierten Daten an.",
        },
        personas: ["embedded", "software"],
      },
      {
        text: {
          en: "Tech stack: Python, PyTorch, OpenCV, Skimage, NumPy, Matplotlib.",
          de: "Tech-Stack: Python, PyTorch, OpenCV, Skimage, NumPy, Matplotlib.",
        },
        personas: ["embedded", "software"],
      },
    ],
    skills: ["Python", "PyTorch", "OpenCV", "Photogrammetry", "Camera Calibration", "NumPy", "Matplotlib"],
    documents: [
      { label: { en: "Internship Certificate", de: "Praktikumszertifikat" }, file: "/docs/drdo-internship-certificate.pdf" },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: "edu-tuc",
    school: "Technische Universität Chemnitz",
    degree: { en: "M.Sc., Automotive Software Engineering", de: "M.Sc., Automotive Software Engineering" },
    location: "Chemnitz, Germany",
    period: { en: "Oct 2025 – Present", de: "Okt. 2025 – heute" },
    personas: ["embedded"],
    detail: {
      en: "Courses: Hardware Software Codesign, Embedded Systems, Hardware Development with VHDL, Automotive Software Engineering, Design of Software for Embedded Systems, Advanced Platforms for Automotive Systems, Automotive Sensor Systems, Neurocomputing, Realtime Systems.",
      de: "Kurse: Hardware-Software-Codesign, Embedded Systems, Hardwareentwicklung mit VHDL, Automotive Software Engineering, Design von Software für eingebettete Systeme, fortgeschrittene Plattformen für Automobilsysteme, automobile Sensorsysteme, Neurocomputing, Echtzeitsysteme.",
    },
    skills: [
      "Hardware Software Codesign",
      "Embedded Systems",
      "VHDL",
      "Automotive Software Engineering",
      "Design of Software for Embedded Systems",
      "Advanced Platforms for Automotive Systems",
      "Automotive Sensor Systems",
      "Neurocomputing",
      "Realtime Systems",
      "C",
    ],
    documents: [
      { label: { en: "Transcript", de: "Notenübersicht" }, file: "/docs/msc-transcript.pdf" },
    ],
  },
  {
    id: "edu-nitrkl",
    school: "National Institute of Technology, Rourkela",
    degree: {
      en: "B.Tech., Electronics and Communication Engineering — Grade 1.6",
      de: "B.Tech., Elektronik- und Nachrichtentechnik — Note 1.6",
    },
    location: "Rourkela, India",
    period: { en: "June 2019 – May 2023", de: "Juni 2019 – Mai 2023" },
    personas: ["embedded", "software"],
    detail: {
      en: "Thesis: IoT Interface For Real-Time Voltage Mode Pulse Oximetry Using FERN Stack.",
      de: "Abschlussarbeit: IoT-Schnittstelle für Echtzeit-Spannungsmodus-Pulsoxymetrie mit dem FERN-Stack.",
    },
    skills: ["C++", "React", "Firebase"],
    documents: [
      { label: { en: "Degree", de: "Urkunde" }, file: "/docs/btech-degree.pdf" },
      { label: { en: "Migration Certificate", de: "Migrationszertifikat" }, file: "/docs/btech-migration-certificate.pdf" },
      { label: { en: "Transcript", de: "Notenübersicht" }, file: "/docs/btech-transcript.pdf" },
      { label: { en: "Thesis", de: "Abschlussarbeit" }, file: "/docs/btech-thesis.pdf" },
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    id: "proj-canbusdrive",
    name: "CANbusDrive — Multi-ECU CAN Bus Vehicle Simulator",
    period: { en: "2026", de: "2026" },
    personas: ["embedded"],
    tagline: {
      en: "A racing game where the \"engine\" is four ECUs arguing over a CAN bus.",
      de: "Ein Rennspiel, dessen „Motor\" eigentlich vier ECUs sind, die sich über einen CAN-Bus streiten.",
    },
    description: [
      {
        en: "Built a 4-ECU automotive network — Input, Powertrain, Dashboard, Multimedia — communicating over a virtual CAN bus, mirroring real vehicle electronics architecture end to end.",
        de: "Baute ein automobiles 4-ECU-Netzwerk — Input, Powertrain, Dashboard, Multimedia — das über einen virtuellen CAN-Bus kommuniziert und die Architektur echter Fahrzeugelektronik end-to-end nachbildet.",
      },
      {
        en: "Defined every message through a DBC database (the industry-standard automotive signal format) and encoded/decoded it with python-can and cantools.",
        de: "Definierte jede Nachricht über eine DBC-Datenbank (das automobile Industriestandardformat für Signale) und kodierte/dekodierte sie mit python-can und cantools.",
      },
      {
        en: "Mapped Xbox controller input (triggers, stick, buttons) to throttle/brake/steering plus music/media toggling on the Multimedia ECU, driving a simplified longitudinal physics model — acceleration, drag, speed-derived RPM — at a 20Hz ECU tick rate.",
        de: "Bildete Xbox-Controller-Eingaben (Trigger, Stick, Tasten) auf Gas-/Brems-/Lenksignale sowie Musik-/Medienumschaltung über die Multimedia-ECU ab, die ein vereinfachtes Längsdynamik-Modell — Beschleunigung, Luftwiderstand, geschwindigkeitsabhängige Drehzahl — mit 20Hz ECU-Taktrate antreiben.",
      },
      {
        en: "Applied hardware-level CAN ID filtering so the Powertrain ECU wakes only on relevant frames, with the full pipeline visualized live through a Pygame-rendered dashboard.",
        de: "Wendete Hardware-CAN-ID-Filterung an, sodass die Powertrain-ECU nur bei relevanten Frames aufwacht, mit der gesamten Pipeline live visualisiert über ein Pygame-gerendertes Dashboard.",
      },
    ],
    skills: ["Python", "CAN Bus", "Embedded Systems"],
    links: [{ label: "Code", href: "https://github.com/pbplop29/canbusdrive" }],
    featured: true,
  },
  {
    id: "proj-raspnet",
    name: "RASPNet — Multi-Node Ring Network Firmware",
    period: { en: "May – Jul 2026", de: "Mai – Jul. 2026" },
    personas: ["embedded"],
    tagline: {
      en: "Bare-metal C, zero dynamic memory, and a ring of ATmega328Ps arguing over a shared clock.",
      de: "Bare-Metal-C, null dynamischer Speicher, und ein Ring aus ATmega328Ps, die sich über einen gemeinsamen Takt streiten.",
    },
    description: [
      {
        en: "Implemented a 3-layer bit-serial ring network protocol stack in C for the ATmega328P — custom framing, streaming CRC-32 validation, cut-through packet relaying.",
        de: "Implementierte einen 3-Schicht-Bit-seriellen Ringnetzwerk-Protokollstack in C für den ATmega328P — eigenes Framing, Streaming-CRC-32-Validierung, Cut-Through-Paketweiterleitung.",
      },
      {
        en: "Built ISR-driven bit-level clock/data synchronization with sliding-window preamble detection for reliable inter-node comms.",
        de: "Baute ISR-gesteuerte Bit-Level-Takt-/Datensynchronisation mit Sliding-Window-Präambel-Erkennung für zuverlässige Inter-Node-Kommunikation.",
      },
      {
        en: "Squeezed the SRAM footprint down by killing static buffers and redesigning ring-buffer memory management.",
        de: "Reduzierte den SRAM-Fußabdruck durch Entfernen statischer Puffer und Neugestaltung der Ringpuffer-Speicherverwaltung.",
      },
      {
        en: "Wrote a custom Python serial web terminal (SSE streaming, raw termios) for live protocol debugging across nodes.",
        de: "Schrieb ein eigenes serielles Python-Web-Terminal (SSE-Streaming, raw termios) für Live-Protokoll-Debugging über alle Nodes.",
      },
    ],
    skills: ["C", "AVR/ATmega328P", "ISR Programming", "Python"],
    links: [{ label: "Code", href: "https://gitlab.hrz.tu-chemnitz.de/pokb-at-tu-chemnitz.de/embeddedlab" }],
    featured: true,
  },
  {
    id: "proj-oximetry",
    name: "IoT Interface for Real-Time Voltage Mode Pulse Oximetry",
    period: { en: "Apr 2023", de: "Apr. 2023" },
    personas: ["embedded", "software"],
    tagline: {
      en: "A pulse oximeter that phones home — over WiFi, in real time.",
      de: "Ein Pulsoximeter, das nach Hause telefoniert — über WLAN, in Echtzeit.",
    },
    description: [
      {
        en: "Built an IoT-enabled pulse oximeter with a low-power transimpedance amplifier for real-time SpO2 and heart-rate monitoring.",
        de: "Baute ein IoT-fähiges Pulsoximeter mit stromsparendem Transimpedanzverstärker für Echtzeit-SpO2- und Herzfrequenzmessung.",
      },
      {
        en: "Piped live sensor data into Firebase and rendered it in React for real-time visualization.",
        de: "Leitete Live-Sensordaten in Firebase und stellte sie in React zur Echtzeitvisualisierung dar.",
      },
      {
        en: "Handled the messy middle: software-hardware integration and high-frequency data acquisition.",
        de: "Übernahm den unübersichtlichen Mittelteil: Software-Hardware-Integration und hochfrequente Datenerfassung.",
      },
    ],
    skills: ["React", "Firebase", "C++"],
    links: [
      { label: "Firmware", href: "https://github.com/pbplop29/RPArduino" },
      { label: "Website", href: "https://github.com/pbplop29/RPWebsite" },
    ],
    featured: true,
  },
  {
    id: "proj-crowd",
    name: "AI-Powered Crowd and Breach Detection System",
    period: { en: "Apr 2022", de: "Apr. 2022" },
    personas: ["embedded", "software"],
    tagline: {
      en: "92% detection accuracy — the other 8% just really wanted to test the alert system.",
      de: "92% Erkennungsgenauigkeit — die restlichen 8% wollten einfach unbedingt das Alarmsystem testen.",
    },
    description: [
      {
        en: "Built a crowd and perimeter breach detection system with Python, OpenCV, and TensorFlow/PyTorch.",
        de: "Baute ein System zur Erkennung von Menschenmengen und Perimeterverletzungen mit Python, OpenCV und TensorFlow/PyTorch.",
      },
      {
        en: "Shipped a MERN-based UI with real-time anomaly detection and automated alerts.",
        de: "Lieferte eine MERN-basierte UI mit Echtzeit-Anomalieerkennung und automatisierten Alarmen.",
      },
    ],
    skills: ["Python", "OpenCV", "PyTorch", "React"],
    featured: true,
  },
  {
    id: "proj-tvcast",
    name: "TVCast — LAN Media Remote & Vocab Trainer",
    period: { en: "2026", de: "2026" },
    personas: ["software"],
    tagline: {
      en: "Turns any phone on the LAN into a TV remote — and idle downtime into a vocab pop quiz.",
      de: "Verwandelt jedes Handy im LAN in eine Fernbedienung — und Leerlaufzeiten in ein Vokabel-Quiz.",
    },
    description: [
      {
        en: "Built a self-hosted media remote that lets any phone on the LAN control a desktop's video playback — search, queue, seek, volume — in real time, using FastAPI and WebSockets to broadcast playback state at 1Hz with zero page reloads.",
        de: "Baute eine selbst gehostete Medienfernbedienung, mit der jedes Handy im LAN die Videowiedergabe eines Desktops steuert — Suche, Warteschlange, Spulen, Lautstärke — in Echtzeit über FastAPI und WebSockets, die den Wiedergabestatus mit 1Hz an alle Clients senden, ganz ohne Neuladen der Seite.",
      },
      {
        en: "Designed a stateful queue model on top of mpv's native playlist, distinguishing ad-hoc \"play now\" entries from persistent queued ones, driven entirely over mpv's local JSON IPC socket with blocking I/O offloaded to worker threads.",
        de: "Entwarf ein zustandsbehaftetes Warteschlangenmodell auf Basis der nativen mpv-Playlist, das spontane \"jetzt abspielen\"-Einträge von dauerhaft eingereihten trennt — gesteuert über mpv's lokalen JSON-IPC-Socket, mit blockierendem I/O ausgelagert auf Worker-Threads.",
      },
      {
        en: "Implemented a German vocabulary flashcard game that auto-activates whenever the queue goes idle, rendered straight onto the TV via mpv's OSD/ASS overlay, complete with a persistent multiplayer leaderboard and PIN-gated API access.",
        de: "Implementierte ein deutsches Vokabel-Karteikarten-Spiel, das sich automatisch aktiviert, sobald die Warteschlange leerläuft — direkt auf den Fernseher gerendert über mpv's OSD/ASS-Overlay, inklusive persistenter Mehrspieler-Bestenliste und PIN-geschütztem API-Zugriff.",
      },
      {
        en: "Shipped as a single-file Python backend with an embedded vanilla JS/HTML/CSS frontend — no build step, no framework — with config and secrets externalized via environment variables for public release.",
        de: "Ausgeliefert als Single-File-Python-Backend mit eingebettetem Vanilla-JS/HTML/CSS-Frontend — kein Build-Schritt, kein Framework — mit Konfiguration und Secrets ausgelagert in Umgebungsvariablen für die öffentliche Veröffentlichung.",
      },
    ],
    skills: ["Python", "FastAPI", "WebSockets", "mpv", "yt-dlp"],
    links: [{ label: "Code", href: "https://github.com/pbplop29/tvcast" }],
    featured: true,
  },
  {
    id: "proj-sensor-paper",
    name: "Evaluation of Magnetic Rotor Position Sensors for PMSM Control in EVs",
    period: { en: "2026", de: "2026" },
    personas: ["embedded"],
    tagline: {
      en: "A deep dive into how an EV knows which way its motor is spinning — and what it costs to know that precisely.",
      de: "Eine Tiefenanalyse, woher ein E-Auto weiß, in welche Richtung sich sein Motor dreht — und was es kostet, das präzise zu wissen.",
    },
    description: [
      {
        en: "Co-authored a review comparing Hall-effect, AMR, and GMR magnetic rotor position sensors for PMSM drives in electric vehicles, centered on Field-Oriented Control accuracy and torque-ripple mitigation.",
        de: "Ko-Autor einer Review-Arbeit, die Hall-Effekt-, AMR- und GMR-Rotorpositionssensoren für PMSM-Antriebe in Elektrofahrzeugen vergleicht, mit Fokus auf feldorientierte Regelung und die Reduktion von Drehmomentwelligkeit.",
      },
      {
        en: "Built a full comparative analysis across sensitivity, angular precision, temperature tolerance, air-gap range, and cost for each sensing technology.",
        de: "Erstellte eine vollständige Vergleichsanalyse zu Sensitivität, Winkelgenauigkeit, Temperaturtoleranz, Luftspaltbereich und Kosten für jede Sensortechnologie.",
      },
      {
        en: "Evaluated automotive-grade robustness under EMI, extreme temperatures, sensor misalignment, and low-speed/standstill operation.",
        de: "Bewertete die automobiltaugliche Robustheit unter EMI, extremen Temperaturen, Sensor-Fehlausrichtung und Betrieb bei niedriger Drehzahl bzw. Stillstand.",
      },
      {
        en: "Surveyed emerging directions — sensorless control, adaptive observers, and machine-learning-based rotor position estimation — as future research paths.",
        de: "Untersuchte aufkommende Richtungen — sensorlose Regelung, adaptive Beobachter und ML-basierte Rotorpositionsschätzung — als zukünftige Forschungsrichtungen.",
      },
    ],
    skills: ["Automotive Sensor Systems", "Neurocomputing"],
    links: [{ label: "Read Paper", href: "/docs/automotive-sensor-systems-paper.pdf" }],
    featured: true,
  },
  {
    id: "proj-gymgraph",
    name: "GymGraph — Progressive Overload Tracker",
    period: { en: "2026", de: "2026" },
    personas: ["software"],
    tagline: {
      en: "A gym log so obsessed with saving taps that it remembers your last set before you do.",
      de: "Ein Trainingslogbuch, so besessen von Tap-Ersparnis, dass es sich an deinen letzten Satz erinnert, bevor du es tust.",
    },
    description: [
      {
        en: "Built a mobile-first PWA for logging gym workouts — a floating + button opens a bottom sheet pre-filled with last session's weights as placeholders, so progressive overload is a glance away and logging a set takes almost no typing.",
        de: "Baute eine mobile-first PWA zum Loggen von Workouts — ein schwebender Plus-Button öffnet ein Bottom Sheet, vorausgefüllt mit den Gewichten der letzten Session als Platzhalter, sodass progressive Overload auf einen Blick sichtbar ist und ein Satz fast tippfrei geloggt wird.",
      },
      {
        en: "Shipped a GitHub-style consistency heatmap and per-exercise progress charts — Weight/Reps/Volume, one colored line per set — plus swipe-to-delete workout cards.",
        de: "Lieferte eine GitHub-artige Konsistenz-Heatmap und Fortschrittsdiagramme pro Übung — Gewicht/Wiederholungen/Volumen, eine farbige Linie pro Satz — plus Workout-Karten mit Swipe-to-Delete.",
      },
      {
        en: "Deliberately chose Drizzle over Prisma and Turso over Cloudflare D1 to run identical SQL locally and on Workers with zero emulation, then deployed via OpenNext instead of next-on-pages to keep the codebase in plain Node.js instead of an edge-only dialect.",
        de: "Entschied sich bewusst für Drizzle statt Prisma und Turso statt Cloudflare D1, um identisches SQL lokal und auf Workers ohne Emulation laufen zu lassen, und deployte über OpenNext statt next-on-pages, um die Codebase in reinem Node.js statt einem Edge-only-Dialekt zu halten.",
      },
      {
        en: "Hand-wrote a service worker with three caching strategies (network-first for HTML/API, cache-first for hashed static assets) for true offline use, wired to GitHub Actions so every push to main redeploys to Cloudflare Workers automatically.",
        de: "Schrieb einen Service Worker mit drei Caching-Strategien von Hand (network-first für HTML/API, cache-first für gehashte statische Assets) für echte Offline-Nutzung, verdrahtet mit GitHub Actions, sodass jeder Push auf main automatisch auf Cloudflare Workers deployt.",
      },
    ],
    skills: ["Cloudflare Workers"],
    links: [
      { label: "Code", href: "https://github.com/pbplop29/tracker" },
      { label: "Live", href: "https://gym.biplovpokhrel.com.np/" },
    ],
    featured: true,
  },
];

export const personalProjects: L[] = [
  { en: "Calorie Tracker", de: "Kalorien-Tracker" },
  { en: "Expense Tracker", de: "Ausgaben-Tracker" },
  { en: "Task Set Scheduler", de: "Task-Set-Scheduler" },
  { en: "Flashcard Review System", de: "Karteikarten-Lernsystem" },
];

export const skills: Skill[] = [
  // OS
  { name: "Linux", category: "OS", personas: ["software", "embedded"], sourceIds: ["proj-raspnet", "exp-lowes-ase"] },
  { name: "MacOS", category: "OS", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Windows", category: "OS", personas: ["software"], sourceIds: ["exp-lowes-ase"] },

  // Languages
  { name: "Java", category: "Languages", personas: ["software"], sourceIds: ["exp-lowes-se", "exp-lowes-ase"] },
  { name: "C", category: "Languages", personas: ["embedded"], sourceIds: ["proj-raspnet", "edu-tuc"] },
  { name: "C++", category: "Languages", personas: ["embedded", "software"], sourceIds: ["edu-nitrkl", "proj-oximetry"] },
  { name: "Python", category: "Languages", personas: ["software", "embedded"], sourceIds: ["exp-drdo", "proj-crowd", "proj-raspnet", "proj-tvcast", "proj-canbusdrive"] },
  { name: "JavaScript", category: "Languages", personas: ["software"], sourceIds: ["exp-lowes-ase", "proj-oximetry", "proj-crowd"] },

  // Backend
  { name: "FastAPI", category: "Backend", personas: ["software"], sourceIds: ["proj-tvcast"] },
  { name: "WebSockets", category: "Backend", personas: ["software"], sourceIds: ["proj-tvcast"] },
  { name: "Spring Boot", category: "Backend", personas: ["software"], sourceIds: ["exp-lowes-se", "exp-lowes-ase"] },
  { name: "Spring WebFlux", category: "Backend", personas: ["software"], sourceIds: ["exp-lowes-se", "exp-lowes-ase"] },
  { name: "PostgreSQL", category: "Backend", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "MongoDB", category: "Backend", personas: ["software"], sourceIds: ["exp-lowes-ase"] },

  // Frontend
  { name: "React", category: "Frontend", personas: ["software"], sourceIds: ["exp-lowes-ase", "proj-oximetry", "proj-crowd"] },
  { name: "HTML", category: "Frontend", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "CSS", category: "Frontend", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Tailwind", category: "Frontend", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Storybook", category: "Frontend", personas: ["software"], sourceIds: ["exp-lowes-ase"] },

  // Testing
  { name: "JUnit", category: "Testing", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Mockito", category: "Testing", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Cypress", category: "Testing", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Karate", category: "Testing", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Jest", category: "Testing", personas: ["software"], sourceIds: ["exp-lowes-ase"] },

  // Messaging & Data
  { name: "Apache Kafka", category: "Messaging & Data", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Apache Camel", category: "Messaging & Data", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Apache NiFi", category: "Messaging & Data", personas: ["software"], sourceIds: ["exp-lowes-ase", "exp-lowes-se"] },
  { name: "Apache Superset", category: "Messaging & Data", personas: ["software"], sourceIds: ["exp-lowes-se"] },

  // DevOps
  { name: "Cloudflare Workers", category: "DevOps", personas: ["software"], sourceIds: ["proj-gymgraph"] },
  { name: "Docker", category: "DevOps", personas: ["software"], sourceIds: ["exp-lowes-ase", "exp-lowes-se"] },
  { name: "Kubernetes", category: "DevOps", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Jenkins", category: "DevOps", personas: ["software"], sourceIds: ["exp-lowes-ase", "exp-lowes-se"] },
  { name: "Sonar", category: "DevOps", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Snyk", category: "DevOps", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Kibana", category: "DevOps", personas: ["software"], sourceIds: ["exp-lowes-se"] },
  { name: "Grafana", category: "DevOps", personas: ["software"], sourceIds: ["exp-lowes-se"] },

  // Tools
  { name: "Jira", category: "Tools", personas: ["software"], sourceIds: ["exp-lowes-ase", "exp-lowes-se"] },
  { name: "Postman", category: "Tools", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Swagger/OpenAPI", category: "Tools", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "Git", category: "Tools", personas: ["software", "embedded"], sourceIds: ["exp-lowes-ase", "exp-lowes-se", "proj-raspnet"] },
  { name: "RapidAPI", category: "Tools", personas: ["software"], sourceIds: ["exp-lowes-ase"] },
  { name: "mpv", category: "Tools", personas: ["software"], sourceIds: ["proj-tvcast"] },
  { name: "yt-dlp", category: "Tools", personas: ["software"], sourceIds: ["proj-tvcast"] },

  // Embedded & Hardware
  { name: "Hardware Software Codesign", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc"] },
  { name: "Embedded Systems", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc", "proj-canbusdrive"] },
  { name: "CAN Bus", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["proj-canbusdrive"] },
  { name: "VHDL", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc"] },
  { name: "Automotive Software Engineering", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc"] },
  { name: "Design of Software for Embedded Systems", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc"] },
  { name: "Advanced Platforms for Automotive Systems", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc"] },
  { name: "Automotive Sensor Systems", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc", "proj-sensor-paper"] },
  { name: "Neurocomputing", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc", "proj-sensor-paper"] },
  { name: "Realtime Systems", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["edu-tuc"] },
  { name: "AVR/ATmega328P", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["proj-raspnet"] },
  { name: "ISR Programming", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["proj-raspnet"] },
  { name: "Photogrammetry", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["exp-drdo"] },
  { name: "Camera Calibration", category: "Embedded & Hardware", personas: ["embedded"], sourceIds: ["exp-drdo"] },
  { name: "OpenCV", category: "Embedded & Hardware", personas: ["embedded", "software"], sourceIds: ["exp-drdo", "proj-crowd"] },
  { name: "PyTorch", category: "Embedded & Hardware", personas: ["embedded", "software"], sourceIds: ["exp-drdo", "proj-crowd"] },
  { name: "Firebase", category: "Embedded & Hardware", personas: ["embedded", "software"], sourceIds: ["proj-oximetry"] },
];

export const languages: { name: L; level: string; documents?: DocumentLink[] }[] = [
  {
    name: { en: "English", de: "Englisch" },
    level: "C2",
    documents: [{ label: { en: "IELTS Certificate", de: "IELTS-Zertifikat" }, file: "/docs/ielts-certificate.pdf" }],
  },
  { name: { en: "German", de: "Deutsch" }, level: "B1" },
];
