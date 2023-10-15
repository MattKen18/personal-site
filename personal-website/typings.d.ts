type Gradient = {
  [key: string]: GradientType;
}

type GradientType = {
  [key: string]: string;
}

type ProjectsStore = {
  [key: string]: Project
}

type Project = {
  name: string,
  title: string,
  tools: string[],
  description: string;
  status: "In Progress" | "Completed",
  link?: string,
  year: number,
}