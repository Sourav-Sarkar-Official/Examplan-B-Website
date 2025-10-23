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
  curriculum: {
    module: string
    topics: string[]
  }[]
}

export const coursesData: Course[] = [
  {
    id: "1",
    slug: "basic-electrical-engineering",
    title: "Basic Electrical Engineering",
    semester: "1st",
    stream: "All",
    basePrice: 999,
    discountPercent: 50,
    description: "Master the fundamentals of electrical engineering",
    whatYouWillLearn: [
      "Circuit analysis and Ohm's law",
      "AC and DC circuits",
      "Electromagnetic principles",
      "Power systems basics",
    ],
    whoIsThisFor:
      "MAKAUT 1st semester students from all streams looking to strengthen their electrical engineering foundation",
    curriculum: [
      {
        module: "Module 1: Circuit Fundamentals",
        topics: ["Voltage and current", "Resistance and Ohm's law", "Series and parallel circuits"],
      },
      {
        module: "Module 2: AC Circuits",
        topics: ["Alternating current basics", "Impedance", "Power factor"],
      },
    ],
  },
  {
    id: "2",
    slug: "physics",
    title: "Physics",
    semester: "1st",
    stream: "All",
    basePrice: 999,
    discountPercent: 50,
    description: "Comprehensive physics course for engineering students",
    whatYouWillLearn: ["Mechanics and motion", "Thermodynamics", "Waves and oscillations", "Modern physics concepts"],
    whoIsThisFor: "MAKAUT 1st semester students seeking to excel in physics fundamentals",
    curriculum: [
      {
        module: "Module 1: Mechanics",
        topics: ["Newton's laws", "Energy and momentum", "Rotational motion"],
      },
      {
        module: "Module 2: Thermodynamics",
        topics: ["Heat and temperature", "Laws of thermodynamics"],
      },
    ],
  },
  {
    id: "3",
    slug: "chemistry",
    title: "Chemistry",
    semester: "1st",
    stream: "All",
    basePrice: 999,
    discountPercent: 50,
    description: "Essential chemistry concepts for engineering",
    whatYouWillLearn: ["Atomic structure", "Chemical bonding", "Thermochemistry", "Electrochemistry"],
    whoIsThisFor: "MAKAUT 1st semester students from all streams",
    curriculum: [
      {
        module: "Module 1: Atomic Structure",
        topics: ["Atoms and electrons", "Periodic table", "Bonding"],
      },
    ],
  },
  {
    id: "4",
    slug: "mathematics-i",
    title: "Mathematics-I",
    semester: "1st",
    stream: "All",
    basePrice: 999,
    discountPercent: 50,
    description: "Advanced mathematics for engineering students",
    whatYouWillLearn: ["Calculus fundamentals", "Differential equations", "Linear algebra", "Complex numbers"],
    whoIsThisFor: "MAKAUT 1st semester students needing strong mathematical foundation",
    curriculum: [
      {
        module: "Module 1: Calculus",
        topics: ["Limits and continuity", "Derivatives", "Integration"],
      },
    ],
  },
  {
    id: "5",
    slug: "data-structures-algorithms",
    title: "Data Structures and Algorithms",
    semester: "3rd",
    stream: "CSE",
    basePrice: 999,
    discountPercent: 50,
    description: "Master DSA for interviews and competitive programming",
    whatYouWillLearn: ["Arrays and linked lists", "Trees and graphs", "Sorting and searching", "Dynamic programming"],
    whoIsThisFor: "MAKAUT 3rd semester CSE students preparing for placements and interviews",
    curriculum: [
      {
        module: "Module 1: Linear Data Structures",
        topics: ["Arrays", "Linked lists", "Stacks", "Queues"],
      },
      {
        module: "Module 2: Non-linear Data Structures",
        topics: ["Trees", "Graphs", "Heaps"],
      },
    ],
  },
  {
    id: "6",
    slug: "computer-organization",
    title: "Computer Organization",
    semester: "3rd",
    stream: "CSE",
    basePrice: 999,
    discountPercent: 50,
    description: "Understanding computer architecture and organization",
    whatYouWillLearn: ["CPU architecture", "Memory hierarchy", "Instruction sets", "I/O systems"],
    whoIsThisFor: "MAKAUT 3rd semester CSE students",
    curriculum: [
      {
        module: "Module 1: CPU Design",
        topics: ["Registers", "ALU", "Control unit"],
      },
    ],
  },
  {
    id: "7",
    slug: "network-theory",
    title: "Network Theory",
    semester: "3rd",
    stream: "ECE",
    basePrice: 999,
    discountPercent: 50,
    description: "Comprehensive network analysis and theory",
    whatYouWillLearn: ["Network theorems", "AC analysis", "Resonance", "Two-port networks"],
    whoIsThisFor: "MAKAUT 3rd semester ECE students",
    curriculum: [
      {
        module: "Module 1: Network Fundamentals",
        topics: ["Kirchhoff's laws", "Mesh analysis", "Nodal analysis"],
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
