type Gradient = {
  [key: string]: GradientType;
};

type GradientType = {
  [key: string]: string;
};

type ProjectsStore = {
  [key: string]: Project
};

type Project = {
  name: string,
  title: string,
  tools: string[],
  description: string;
  status: "In Progress" | "Completed",
  link?: string,
  year: number,
};

type Button = {
  text: string,
  link?: string,
  onClick?: () => void,
  bg?: string,
  br?: string, //border radius in tailwind
};