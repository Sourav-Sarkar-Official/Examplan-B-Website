export interface Course {
  id: string
  slug: string
  title: string
  semester: string
  stream: string
  basePrice: number
  discountPercent: number
  description: string
  whatYouWillLearn: string[]
  whoIsThisFor: string
  status: "live" | "coming_soon"
  curriculum: {
    module: string
    topics: string[]
  }[]
}

export const coursesData: Course[] = [
  {
    id: "0",
    slug: "first-semester-all-subjects",
    title: "First Semester All Subjects",
    semester: "1st",
    stream: "All",
    basePrice: 599,
    discountPercent: 25,
    status: "coming_soon",
    description:
      "Complete 1st semester package covering Physics/Chemistry, Mathematics-I, and Basic Electrical Engineering",
    whatYouWillLearn: [
      "Complete coverage of all 1st semester subjects",
      "Integrated approach to related topics across subjects",
      "Practice problems and solved examples",
      "Regular assessments and doubt clearing",
    ],
    whoIsThisFor:
      "MAKAUT 1st semester students who want comprehensive coverage of all subjects in one package",
    curriculum: [
      {
        module: "Module 1: Mechanics (Physics)",
        topics: [
          "Newton's laws and applications",
          "Work, energy and conservation laws",
          "Linear and angular momentum",
          "Oscillations and waves",
        ],
      },
      {
        module: "Module 2: Optics & Modern Physics",
        topics: [
          "Wave optics and interference",
          "Diffraction and polarization",
          "Quantum mechanics basics",
          "Atomic and molecular physics",
        ],
      },
      {
        module: "Module 3: Chemistry Fundamentals",
        topics: [
          "Atomic structure and chemical bonding",
          "Thermodynamics and kinetics",
          "Organic chemistry basics",
          "Spectroscopy and analysis",
        ],
      },
      {
        module: "Module 4: Physical Chemistry",
        topics: [
          "States of matter",
          "Chemical equilibrium",
          "Electrochemistry",
          "Surface chemistry",
        ],
      },
      {
        module: "Module 5: Calculus (Mathematics-I)",
        topics: [
          "Limits and continuity",
          "Differentiation and applications",
          "Integration techniques",
          "Differential equations",
        ],
      },
      {
        module: "Module 6: Linear Algebra",
        topics: [
          "Matrices and determinants",
          "Vector spaces and linear transformations",
          "Eigenvalues and eigenvectors",
          "Linear equations systems",
        ],
      },
      {
        module: "Module 7: DC Circuits (BEE)",
        topics: [
          "Kirchhoff's laws",
          "Network theorems",
          "RC and RL circuits",
          "Nodal and mesh analysis",
        ],
      },
      {
        module: "Module 8: AC Circuits & Machines",
        topics: [
          "Single and three-phase AC",
          "Transformers and motors",
          "Power electronics basics",
          "Electrical installations",
        ],
      },
    ],
  },
  {
    id: "1",
    slug: "basic-electrical-engineering",
    title: "Basic Electrical Engineering",
    semester: "1st",
    stream: "All",
    basePrice: 398,
    discountPercent: 50,
    status: "coming_soon",
    description:
      "Foundational electrical engineering course covering DC/AC circuits, machines, power electronics and practical installation concepts.",
    whatYouWillLearn: [
      "Analysis of DC and AC circuits using Kirchhoff's laws and network theorems",
      "Transformer and machine fundamentals",
      "Basic power electronics and converter operation",
      "Practical aspects of electrical installations and safety",
    ],
    whoIsThisFor:
      "MAKAUT 1st semester students from all streams who want practical and theoretical knowledge in electrical engineering fundamentals",
    curriculum: [
      {
        module: "Module 1: DC Circuits",
        topics: [
          "Resistors, capacitors and inductors in time domain",
          "Kirchhoff's laws, Thevenin and Norton equivalents",
          "Transient response of RL and RC networks",
        ],
      },
      {
        module: "Module 2: AC Circuits",
        topics: [
          "Phasor representation and sinusoidal steady-state analysis",
          "Impedance and admittance, power and power factor",
          "RLC resonance and balanced three-phase systems",
        ],
      },
      {
        module: "Module 3: Transformers",
        topics: [
          "Ideal vs practical transformer models",
          "Core losses, regulation and efficiency",
          "Autotransformers and three-phase connections",
        ],
      },
      {
        module: "Module 4: Electrical Machines",
        topics: [
          "Rotating magnetic fields and construction of induction machines",
          "Synchronous machines and excitation",
          "Torque–speed characteristics and speed control methods",
        ],
      },
      {
        module: "Module 5: Power Converters",
        topics: [
          "DC–DC converters (buck/boost) and PWM control",
          "Single-phase and three-phase inverters and modulation techniques",
          "Basics of rectifiers and converter topologies",
        ],
      },
      {
        module: "Module 6: Electrical Installations",
        topics: [
          "Low-tension switchgear and protection devices",
          "Earthing, wiring practices and battery characteristics",
          "Power factor improvement and basic energy calculations",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "physics",
    title: "Physics",
    semester: "1st",
    stream: "All",
    basePrice: 398,
    discountPercent: 50,
    status: "coming_soon",
    description:
      "In-depth first-semester physics covering classical and modern topics with emphasis on problem-solving and physical intuition.",
    whatYouWillLearn: [
      "Mechanics: kinematics, dynamics, energy and momentum methods",
      "Optics: interference, diffraction and polarization",
      "Electromagnetism: Maxwell's equations and material response",
      "Quantum basics: wave–particle duality and Schrödinger's equation",
      "Statistical mechanics: distributions and macroscopic properties",
    ],
    whoIsThisFor: "MAKAUT 1st semester engineering students who want a strong conceptual and mathematical foundation in physics",
    curriculum: [
      {
        module: "Module 1: Mechanics",
        topics: [
          "Newton's laws and applications",
          "Work, energy and conservation laws",
          "Linear and angular momentum, collisions",
          "Rigid body rotation and moments of inertia",
          "Oscillations and resonance, small oscillation approximations",
          "Non-inertial frames and fictitious forces",
        ],
      },
      {
        module: "Module 2: Optics",
        topics: [
          "Wave optics: interference and diffraction (single-slit, double-slit, grating)",
          "Polarization: types and measurement",
          "Geometrical optics and imaging basics",
          "Lasers: population inversion, gain media and coherence",
        ],
      },
      {
        module: "Module 3: Electromagnetism & Dielectric/Magnetic Properties",
        topics: [
          "Maxwell's equations and boundary conditions",
          "Electrostatics in matter: polarization and dielectrics",
          "Magnetostatics, magnetization and magnetic materials",
          "Domains, hysteresis and magnetic losses",
          "Wave propagation in media",
        ],
      },
      {
        module: "Module 4: Quantum Mechanics",
        topics: [
          "Historical experiments: blackbody radiation, photoelectric and Compton effects",
          "Wave–particle duality and uncertainty principle",
          "Schrödinger equation for simple systems (infinite well, harmonic oscillator)",
          "Basic atomic models and quantization",
        ],
      },
      {
        module: "Module 5: Statistical Mechanics",
        topics: [
          "Microstates, ensembles and the connection to thermodynamics",
          "Maxwell–Boltzmann distribution",
          "Quantum statistics: Bose–Einstein and Fermi–Dirac distributions",
          "Applications to ideal gases and heat capacities",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "chemistry",
    title: "Chemistry",
    semester: "1st",
    stream: "All",
    basePrice: 398,
    discountPercent: 50,
    status: "coming_soon",
    description:
      "Core chemistry topics for first-semester engineering students, blending molecular theory with analytical techniques and practical applications.",
    whatYouWillLearn: [
      "Atomic and molecular structure and electronic configuration",
      "Spectroscopic methods for structural identification (UV-Vis, IR, NMR)",
      "Intermolecular forces and potential energy surfaces",
      "Thermodynamics of chemical equilibria and free energy",
      "Stereochemistry and organic reaction fundamentals",
    ],
    whoIsThisFor: "MAKAUT 1st semester students across engineering streams who need a practical and theoretical chemistry grounding",
    curriculum: [
      {
        module: "Module I: Atomic and Molecular Structure",
        topics: [
          "Schrödinger equation and quantum states of atoms",
          "Atomic orbitals and electronic configuration",
          "Molecular orbitals and bonding models",
          "Crystal field splitting and transition-metal behavior",
          "Doping effects and electronic bands in solids",
        ],
      },
      {
        module: "Module II: Spectroscopic Techniques & Applications",
        topics: [
          "Principles of UV-Visible and IR spectroscopy",
          "NMR basics and chemical shift interpretation",
          "Applications in chemical identification, imaging (MRI) and surface analysis",
          "Diffraction and scattering methods for structure determination",
        ],
      },
      {
        module: "Module III: Intermolecular Forces & Potential Energy Surfaces",
        topics: [
          "Ionic, dipole–dipole and van der Waals interactions",
          "Potential energy surfaces and reaction coordinates",
          "Real gas behavior and critical phenomena",
        ],
      },
      {
        module: "Module IV: Free Energy in Chemical Equilibria",
        topics: [
          "Entropy, enthalpy and Gibbs free energy",
          "Spontaneity and equilibrium constants",
          "Electrochemistry: cell potentials and the Nernst equation",
          "Applications: corrosion, solubility and metallurgical examples (Ellingham diagrams)",
        ],
      },
      {
        module: "Module V: Periodic Properties",
        topics: [
          "Periodic trends: atomic radius, ionization energy, electronegativity",
          "Chemical behavior of s, p, d and f block elements",
        ],
      },
      {
        module: "Module VI: Stereochemistry",
        topics: [
          "Chirality and optical activity",
          "Isomerism and conformational analysis",
          "Stereochemical behavior in coordination complexes",
        ],
      },
      {
        module: "Module VII: Organic Reactions & Drug Synthesis",
        topics: [
          "Key reaction types: substitution, addition, elimination, oxidation/reduction",
          "Functional group transformations and protecting groups",
          "Simple drug-synthesis planning and retrosynthetic thinking",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "mathematics-i",
    title: "Mathematics-I",
    semester: "1st",
    stream: "All",
    basePrice: 398,
    discountPercent: 50,
    status: "coming_soon",
    description: "Mathematics I focusing on calculus, matrices and vector spaces with applications in engineering",
    whatYouWillLearn: [
      "Advanced techniques in differentiation and integration",
      "Matrix methods for solving linear systems",
      "Vector space theory and linear transformations",
      "Eigenvalues, eigenvectors and diagonalization",
    ],
    whoIsThisFor: "MAKAUT 1st semester students across streams who require a rigorous mathematical toolkit",
    curriculum: [
      {
        module: "Module 1: Calculus (Integration)",
        topics: [
          "Definite and improper integrals",
          "Applications: areas, volumes and arc length",
          "Beta and Gamma functions",
        ],
      },
      {
        module: "Module 2: Calculus (Differentiation)",
        topics: [
          "Mean value theorems (Rolle, Lagrange)",
          "Taylor and Maclaurin series",
          "L'Hôpital's rule and extrema problems",
        ],
      },
      {
        module: "Module 3: Matrices",
        topics: [
          "Matrix operations, determinants and inverses",
          "Cramer's rule and Gaussian elimination",
        ],
      },
      {
        module: "Module 4: Vector Spaces",
        topics: [
          "Basis and dimension, linear independence",
          "Linear transformations, kernel and image",
        ],
      },
      {
        module: "Module 5: Eigenvalues and Special Matrices",
        topics: [
          "Eigenvalues/eigenvectors and diagonalization",
          "Orthogonalization and Gram–Schmidt process",
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "third-semester-all-subjects",
    title: "Third Semester All Subjects",
    semester: "3rd",
    stream: "CSE",
    basePrice: 599,
    discountPercent: 25,
    status: "live",
    description: "Comprehensive package covering Analog & Digital Electronics, Data Structures & Algorithms, Computer Organization, and Economics for Engineers",
    whatYouWillLearn: [
      "Complete coverage of all 3rd semester core subjects",
      "Practical implementation and problem-solving approach",
      "Regular assessments and doubt clearing sessions",
      "Interview preparation for DSA and technical concepts",
    ],
    whoIsThisFor: "MAKAUT 3rd semester CSE students who want comprehensive coverage of all subjects with focus on practical applications and placement preparation",
    curriculum: [
      {
        module: "Module 1: Semiconductor Devices (ADE)",
        topics: [
          "PN junctions and diodes",
          "Bipolar junction transistors",
          "Field effect transistors",
          "Operational amplifiers",
        ],
      },
      {
        module: "Module 2: Digital Electronics",
        topics: [
          "Boolean algebra and logic gates",
          "Combinational circuits design",
          "Sequential circuits and flip-flops",
          "Counters and registers",
        ],
      },
      {
        module: "Module 3: Basic Data Structures",
        topics: [
          "Arrays and linked lists",
          "Stacks and queues",
          "Hash tables and collision handling",
          "Implementation strategies",
        ],
      },
      {
        module: "Module 4: Advanced Data Structures",
        topics: [
          "Trees and binary search trees",
          "AVL and Red-Black trees",
          "Graphs and graph algorithms",
          "Heap and priority queues",
        ],
      },
      {
        module: "Module 5: Algorithm Design",
        topics: [
          "Searching and sorting algorithms",
          "Divide and conquer strategies",
          "Dynamic programming",
          "Greedy algorithms",
        ],
      },
      {
        module: "Module 6: Computer Architecture",
        topics: [
          "CPU organization and design",
          "Memory hierarchy and caching",
          "Instruction set architecture",
          "Pipelining concepts",
        ],
      },
      {
        module: "Module 7: Memory and I/O Systems",
        topics: [
          "Cache memory design",
          "Virtual memory management",
          "I/O organization",
          "Bus structures and protocols",
        ],
      },
      {
        module: "Module 8: Economics Fundamentals",
        topics: [
          "Supply and demand analysis",
          "Market structures and competition",
          "Cost analysis and break-even points",
          "Project evaluation techniques",
        ],
      },
      {
        module: "Module 9: Engineering Economics",
        topics: [
          "Time value of money",
          "Depreciation and asset valuation",
          "Risk analysis in projects",
          "Economic feasibility studies",
        ],
      },
    ],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug)
}

export function getCoursesByStream(semester: string, stream: string): Course[] {
  return coursesData.filter((course) => course.semester === semester && course.stream === stream)
}

export function getUniqueSemesters(): string[] {
  return Array.from(new Set(coursesData.map((c) => c.semester))).sort()
}

export function getUniqueStreams(semester: string): string[] {
  return Array.from(new Set(coursesData.filter((c) => c.semester === semester).map((c) => c.stream)))
}
