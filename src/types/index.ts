export interface SubNavItem {
  title: string;
  description: string;
  path: string;
}

export interface NavItem {
  title: string;
  path?: string;
  description?: string;
  subItems?: SubNavItem[];
}

export interface FooterSection {
  title: string;
  items: {
    title: string;
    path: string;
  }[];
}

export interface Stats {
  value: number;
  label: string;
}

export interface Categories {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
}

export interface Courses {
  id: number;
  category: string;
  title: string;
  headline: string;
  description: string;
  certification: string;
  lang: string[];
  author: string;
  authorImage: string;
  rating: number;
  totalRatings: number;
  totalHours: number;
  totalLectures: number;
  level: string;
  price: number;
  image: string;
  chapters?: number;
  orders?: number;
  certificate?: boolean;
  reviews?: number;
  addedToShelf?: boolean;
}


export interface FilterState {
  rating: number | null
  chapters: string | null
  priceRange: string | null
  category: string | null
}

export interface Instructors {
  id: number;
  image: string;
  author: string;
  role: string;
  rating: number;
  students: number;
  path: string;
  showRating?: boolean;
}

export interface ReviewCardProps {
  image: string;
  name: string;
  role: string;
  body: string;
}

export interface Message {
  sender: string;
  message: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  profile: string;
  username: string;
  fullName: string;
  title: string;
  messages: Message[];
}

export interface DashboardSection {
  groupKey: string;
  groupValue: string;
  children: DashboardChild[];
}

export interface DashboardChild {
  label: string;
  value: string;
  url: string;
  new?: boolean;
}

export interface Member {
  id: string
  name: string
  email: string
  role: "admin" | "instructor" | "student" | "banned"
  joinDate: string
  bio?: string
  avatar?: string | null
}
