export interface BottomNavigation {
  id: number;
  label: string;
  link: string;
}

export const bottomNavigationList: BottomNavigation[] = [
  {
    id: 1,
    label: "About Me",
    link: "/",
  },
  {
    id: 2,
    label: "Skills & Experiences",
    link: "/experiences",
  },
  {
    id: 3,
    label: "Projects",
    link: "/projects",
  },
];
