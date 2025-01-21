import {
  Categories,
  Conversation,
  Courses,
  DashboardSection,
  FooterSection,
  Instructors,
  Member,
  NavItem,
  ReviewCardProps,
  Stats,
} from "@/types";
import { Telescope, Code, Briefcase, Atom } from "lucide-react";

export const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    description: "Explore our wide range of courses",
    path: "/courses",
    subItems: [
      {
        title: "Web Development",
        description: "Learn to build modern web applications",
        path: "/courses/web-development",
      },
      {
        title: "Data Science",
        description: "Master the art of data analysis and machine learning",
        path: "/courses/data-science",
      },
      {
        title: "Design",
        description: "Create stunning visuals and user experiences",
        path: "/courses/design",
      },
      {
        title: "Business",
        description: "Develop essential business and entrepreneurship skills",
        path: "/courses/business",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Resources",
    description: "Helpful resources for your learning journey",
    subItems: [
      {
        title: "Blog",
        description: "Read our latest articles and tutorials",
        path: "/blog",
      },
      {
        title: "Community",
        description: "Join our vibrant learning community",
        path: "/community",
      },
      {
        title: "Help Center",
        description: "Get support and answers to your questions",
        path: "/help",
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "Product",
    items: [
      { title: "All Courses", path: "/courses" },
      { title: "Popular", path: "/courses/popular" },
      { title: "New Releases", path: "/courses/new" },
      { title: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About Us", path: "/about" },
      { title: "Careers", path: "/careers" },
      { title: "Press", path: "/press" },
      { title: "Partners", path: "/partners" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", path: "/blog" },
      { title: "Help Center", path: "/help" },
      { title: "Community", path: "/community" },
      { title: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Privacy", path: "/privacy" },
      { title: "Terms", path: "/terms" },
      { title: "Cookie Policy", path: "/cookies" },
      { title: "Licenses", path: "/licenses" },
    ],
  },
];

export const stats: Stats[] = [
  {
    value: 250,
    label: "Courses by our best mentors",
  },
  {
    value: 1000,
    label: "Courses by our best mentors",
  },
  {
    value: 15,
    label: "Courses by our best mentors",
  },
  {
    value: 2400,
    label: "Courses by our best mentors",
  },
];
export const categories: Categories[] = [
  {
    icon: Telescope,
    label: "Astrology",
    value: 11,
  },
  {
    icon: Code,
    label: "Development",
    value: 12,
  },
  {
    icon: Briefcase,
    label: "Marketing",
    value: 12,
  },
  {
    icon: Atom,
    label: "Physics",
    value: 14,
  },
];

export const courses: Courses[] = [
  {
    id: 1,
    category: "web-development",
    title: "Introduction to User Experience Design",
    headline: "This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.",
    description: "This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises.",
    certification: "At Coursa, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.",
    author: "Ronald Richards",
    authorImage: "/images/avatar.jpg",
    rating: 5,
    totalRatings: 1200,
    totalHours: 22,
    totalLectures: 155,
    level: "Beginner",
    price: 149.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "Spanish", "Italian", "German"],
    chapters: 10,
    orders: 500,
    certificate: true,
    reviews: 350,
    addedToShelf: false,
  },
  {
    id: 2,
    category: "data-science",
    title: "Data Science for Beginners",
    headline: "Learn the basics of data analysis, visualization, and machine learning with Python.",
    description: "Dive into the exciting world of data science with this beginner-friendly course. You will explore data wrangling, visualization, and the fundamentals of machine learning, empowering you to make data-driven decisions.",
    certification: "Earn a professional certification that highlights your new data science skills and enhances your resume.",
    author: "Jane Doe",
    authorImage: "/images/avatar.jpg",
    rating: 4.8,
    totalRatings: 980,
    totalHours: 18,
    totalLectures: 120,
    level: "Beginner",
    price: 199.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "French", "Spanish"],
    chapters: 12,
    orders: 430,
    certificate: true,
    reviews: 400,
    addedToShelf: false,
  },
  {
    id: 3,
    category: "programming",
    title: "Mastering Python Programming",
    headline: "A comprehensive guide to becoming proficient in Python, the world's most versatile programming language.",
    description: "This course covers everything from Python basics to advanced topics like web scraping, data analysis, and application development, with hands-on exercises throughout.",
    certification: "Showcase your expertise with a Python Mastery certification upon course completion.",
    author: "John Smith",
    authorImage: "/images/avatar.jpg",
    rating: 4.9,
    totalRatings: 1500,
    totalHours: 30,
    totalLectures: 200,
    level: "Intermediate",
    price: 249.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "German"],
    chapters: 15,
    orders: 600,
    certificate: true,
    reviews: 800,
    addedToShelf: false,
  },
  {
    id: 4,
    category: "marketing",
    title: "Digital Marketing Essentials",
    headline: "Master the art of online marketing and grow your brand with proven strategies.",
    description: "This course delves into key areas of digital marketing, including SEO, social media, email campaigns, and analytics, equipping you with tools to excel in the digital space.",
    certification: "Receive a Digital Marketing Specialist certificate upon course completion.",
    author: "Emily Taylor",
    authorImage: "/images/avatar.jpg",
    rating: 4.7,
    totalRatings: 850,
    totalHours: 15,
    totalLectures: 110,
    level: "Beginner",
    price: 199.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "Italian"],
    chapters: 8,
    orders: 410,
    certificate: true,
    reviews: 320,
    addedToShelf: false,
  },
  {
    id: 5,
    category: "design",
    title: "Graphic Design Fundamentals",
    headline: "Unlock your creativity with the essential tools and techniques of graphic design.",
    description: "Learn design principles, software skills, and creative strategies to bring your ideas to life in this beginner-friendly graphic design course.",
    certification: "Earn a Graphic Design certification that showcases your creative expertise.",
    author: "Michael Brown",
    authorImage: "/images/avatar.jpg",
    rating: 4.8,
    totalRatings: 940,
    totalHours: 20,
    totalLectures: 150,
    level: "Beginner",
    price: 179.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "French", "German"],
    chapters: 10,
    orders: 500,
    certificate: true,
    reviews: 500,
    addedToShelf: false,
  },
  {
    id: 6,
    category: "cloud-computing",
    title: "AWS Certified Solutions Architect",
    headline: "Prepare for AWS certification with in-depth lessons and hands-on labs.",
    description: "This course provides a deep understanding of AWS architecture and services, preparing you for real-world cloud scenarios and certification exams.",
    certification: "Achieve AWS Solutions Architect Certification to boost your career in cloud computing.",
    author: "Laura Wilson",
    authorImage: "/images/avatar.jpg",
    rating: 4.9,
    totalRatings: 1100,
    totalHours: 25,
    totalLectures: 180,
    level: "Advanced",
    price: 299.9,
    image: "/images/course-cover.jpg",
    lang: ["English"],
    chapters: 14,
    orders: 700,
    certificate: true,
    reviews: 600,
    addedToShelf: false,
  },
  {
    id: 7,
    category: "personal-development",
    title: "Time Management Mastery",
    headline: "Learn strategies and techniques to maximize productivity and achieve your goals.",
    description: "This course focuses on practical approaches to time management, helping you prioritize effectively, eliminate distractions, and improve focus.",
    certification: "Receive a Time Management Mastery certificate to demonstrate your commitment to productivity.",
    author: "Sarah Johnson",
    authorImage: "/images/avatar.jpg",
    rating: 4.6,
    totalRatings: 780,
    totalHours: 10,
    totalLectures: 75,
    level: "Beginner",
    price: 99.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "Spanish"],
    chapters: 6,
    orders: 350,
    certificate: true,
    reviews: 250,
    addedToShelf: false,
  },
  {
    id: 8,
    category: "cybersecurity",
    title: "Introduction to Ethical Hacking",
    headline: "Explore the basics of cybersecurity and learn ethical hacking techniques.",
    description: "This course introduces you to ethical hacking principles and practices, helping you identify and address vulnerabilities in systems and networks.",
    certification: "Earn an Ethical Hacking certificate to begin your journey in cybersecurity.",
    author: "Ethan Moore",
    authorImage: "/images/avatar.jpg",
    rating: 4.8,
    totalRatings: 920,
    totalHours: 22,
    totalLectures: 140,
    level: "Beginner",
    price: 249.9,
    image: "/images/course-cover.jpg",
    lang: ["English"],
    chapters: 12,
    orders: 480,
    certificate: true,
    reviews: 400,
    addedToShelf: false,
  },
  {
    id: 9,
    category: "business",
    title: "Project Management Basics",
    headline: "Learn the foundations of successful project management to lead and deliver effectively.",
    description: "Gain insights into planning, execution, and delivery of projects through this comprehensive beginner-friendly course.",
    certification: "Project Management certification provided upon successful completion.",
    author: "Sophia Lee",
    authorImage: "/images/avatar.jpg",
    rating: 4.7,
    totalRatings: 870,
    totalHours: 18,
    totalLectures: 130,
    level: "Beginner",
    price: 189.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "Spanish", "French"],
    chapters: 9,
    orders: 400,
    certificate: true,
    reviews: 300,
    addedToShelf: false,
  },
  {
    id: 10,
    category: "ai-and-ml",
    title: "Deep Learning with TensorFlow",
    headline: "Unlock the power of neural networks and build AI solutions with TensorFlow.",
    description: "Master deep learning concepts and apply them to real-world problems using TensorFlow in this advanced-level course.",
    certification: "Earn a Deep Learning certification to showcase your expertise in AI.",
    author: "Olivia White",
    authorImage: "/images/avatar.jpg",
    rating: 4.9,
    totalRatings: 1000,
    totalHours: 28,
    totalLectures: 190,
    level: "Advanced",
    price: 299.9,
    image: "/images/course-cover.jpg",
    lang: ["English", "German"],
    chapters: 16,
    orders: 650,
    certificate: true,
    reviews: 500,
    addedToShelf: false,
  },
];


export const instructors: Instructors[] = [
  {
    id: 1,
    image: "/images/instructors.png",
    author: "Ronald Richards",
    role: "UI/UX Designer",
    rating: 4.9,
    students: 20000,
    path: "#",
  },
  {
    id: 2,
    image: "/images/instructors.png",
    author: "Ronald Richards",
    role: "UI/UX Designer",
    rating: 4.9,
    students: 20000,
    path: "#",
  },
  {
    id: 3,
    image: "/images/instructors.png",
    author: "Ronald Richards",
    role: "UI/UX Designer",
    rating: 4.9,
    students: 20000,
    path: "#",
  },
  {
    id: 4,
    image: "/images/instructors.png",
    author: "Ronald Richards",
    role: "UI/UX Designer",
    rating: 4.9,
    students: 20000,
    path: "#",
  },
  {
    id: 5,
    image: "/images/instructors.png",
    author: "Ronald Richards",
    role: "UI/UX Designer",
    rating: 4.9,
    students: 20000,
    path: "#",
  },
];

export const reviews: ReviewCardProps[] = [
  {
    image: "/images/avatar-1.png",
    name: "Jane Doe",
    role: "UX Designer",
    body: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
  },
  {
    image: "/images/avatar-1.png",
    name: "John Smith",
    role: "Software Engineer",
    body: "The practical projects and hands-on exercises really helped cement my understanding. Highly recommend for anyone serious about learning tech skills.",
  },
  {
    image: "/images/avatar-1.png",
    name: "Sarah Wilson",
    role: "Product Manager",
    body: "Great balance of theory and practice. The community support and mentor feedback have been invaluable in my learning journey.",
  },
  {
    image: "/images/avatar-1.png",
    name: "Mike Chen",
    role: "Full Stack Developer",
    body: "The course content is consistently updated with the latest industry trends. Perfect for staying current in the fast-paced tech world.",
  },
  {
    image: "/images/avatar-1.png",
    name: "Emily Rodriguez",
    role: "Data Scientist",
    body: "Exceptional learning experience. The interactive coding exercises and real-world projects helped me build a strong portfolio.",
  }
];


export const conversations: Conversation[] = [
  {
    id: "conv1",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "alex_dev",
    fullName: "Alex John",
    title: "Senior Backend Dev",
    messages: [
      { sender: "You", message: "See you later, Alex!", timestamp: "2024-08-24T11:15:15" },
      { sender: "Alex", message: "Alright, talk to you later!", timestamp: "2024-08-24T11:11:30" },
      { sender: "You", message: "For sure. Anyway, I should get back to reviewing the project.", timestamp: "2024-08-23T09:26:50" },
      { sender: "Alex", message: "Yeah, let me know what you think.", timestamp: "2024-08-23T09:25:15" },
      { sender: "You", message: "Oh, nice! I've been waiting for that. I'll check it out later.", timestamp: "2024-08-23T09:24:30" },
      { sender: "Alex", message: "They've added a dark mode option! It looks really sleek.", timestamp: "2024-08-23T09:23:10" },
      { sender: "You", message: "No, not yet. What's new?", timestamp: "2024-08-23T09:22:00" },
      { sender: "Alex", message: "By the way, have you seen the new feature update?", timestamp: "2024-08-23T09:21:05" },
      { sender: "You", message: "Will do! Thanks, Alex.", timestamp: "2024-08-23T09:20:10" },
      { sender: "Alex", message: "Great! Let me know if you need any help.", timestamp: "2024-08-23T09:19:20" },
      { sender: "You", message: "Almost done. Just need to review a few things.", timestamp: "2024-08-23T09:18:45" },
      { sender: "Alex", message: "I'm good, thanks! Did you finish the project?", timestamp: "2024-08-23T09:17:10" },
      { sender: "You", message: "Hey Alex, I'm doing well! How about you?", timestamp: "2024-08-23T09:16:30" },
      { sender: "Alex", message: "Hey Bob, how are you doing?", timestamp: "2024-08-23T09:15:00" }
    ]
  },
  {
    id: "conv2",
    profile: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "taylor.codes",
    fullName: "Taylor Grande",
    title: "Tech Lead",
    messages: [
      { sender: "Taylor", message: "Yeah, it's really well-explained. You should give it a try.", timestamp: "2024-08-23T10:35:00" },
      { sender: "You", message: "Not yet, is it good?", timestamp: "2024-08-23T10:32:00" },
      { sender: "Taylor", message: "Hey, did you check out that new tutorial?", timestamp: "2024-08-23T10:30:00" }
    ]
  },
  {
    id: "conv3",
    profile: "https://randomuser.me/api/portraits/men/54.jpg",
    username: "john_stack",
    fullName: "John Doe",
    title: "QA",
    messages: [
      { sender: "You", message: "Yep, see ya. 👋🏼", timestamp: "2024-08-22T18:59:00" },
      { sender: "John", message: "Great, see you then!", timestamp: "2024-08-22T18:55:00" },
      { sender: "You", message: "Yes, same time as usual. I'll send the invite shortly.", timestamp: "2024-08-22T18:50:00" },
      { sender: "John", message: "Are we still on for the meeting tomorrow?", timestamp: "2024-08-22T18:45:00" }
    ]
  },
  {
    id: "conv4",
    profile: "https://randomuser.me/api/portraits/women/29.jpg",
    username: "megan_frontend",
    fullName: "Megan Flux",
    title: "Jr Developer",
    messages: [
      {
        sender: "You",
        message: "Sure ✌🏼",
        timestamp: "2024-08-23T11:30:00"
      },
      {
        sender: "Megan",
        message: "Thanks, appreciate it!",
        timestamp: "2024-08-23T11:30:00"
      },
      {
        sender: "You",
        message: "Sure thing! I'll take a look in the next hour.",
        timestamp: "2024-08-23T11:25:00"
      },
      {
        sender: "Megan",
        message: "Hey! Do you have time to review my PR today?",
        timestamp: "2024-08-23T11:20:00"
      }
    ]
  },
  {
    id: "conv5",
    profile: "https://randomuser.me/api/portraits/men/72.jpg",
    username: "dev_david",
    fullName: "David Brown",
    title: "Senior UI/UX Designer",
    messages: [
      {
        sender: "You",
        message: "Great, I'll review them now!",
        timestamp: "2024-08-23T12:00:00"
      },
      {
        sender: "David",
        message: "Just sent you the files. Let me know if you need any changes.",
        timestamp: "2024-08-23T11:58:00"
      },
      {
        sender: "David",
        message: "I finished the design for the dashboard. Thoughts?",
        timestamp: "2024-08-23T11:55:00"
      }
    ]
  },
  {
    id: "conv6",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    username: "julia.design",
    fullName: "Julia Carter",
    title: "Product Designer",
    messages: [
      {
        sender: "Julia",
        message: "Same here! It's coming together nicely.",
        timestamp: "2024-08-22T14:10:00"
      },
      {
        sender: "You",
        message: "I'm really excited to see the final product!",
        timestamp: "2024-08-22T14:15:00"
      },
      {
        sender: "You",
        message: "How's the project looking on your end?",
        timestamp: "2024-08-22T14:05:00"
      }
    ]
  },
  {
    id: "conv7",
    profile: "https://randomuser.me/api/portraits/men/24.jpg",
    username: "brad_dev",
    fullName: "Brad Wilson",
    title: "CEO",
    messages: [
      {
        sender: "Brad",
        message: "Got it! Thanks for the update.",
        timestamp: "2024-08-23T15:45:00"
      },
      {
        sender: "You",
        message: "The release has been delayed to next week.",
        timestamp: "2024-08-23T15:40:00"
      },
      {
        sender: "Brad",
        message: "Hey, any news on the release?",
        timestamp: "2024-08-23T15:35:00"
      }
    ]
  },
  {
    id: "conv8",
    profile: "https://randomuser.me/api/portraits/women/34.jpg",
    username: "katie_ui",
    fullName: "Katie Lee",
    title: "QA",
    messages: [
      {
        sender: "Katie",
        message: "I'll join the call in a few minutes.",
        timestamp: "2024-08-23T09:50:00"
      },
      {
        sender: "You",
        message: "Perfect! We'll start as soon as you're in.",
        timestamp: "2024-08-23T09:48:00"
      },
      {
        sender: "Katie",
        message: "Is the meeting still on?",
        timestamp: "2024-08-23T09:45:00"
      }
    ]
  },
  {
    id: "conv9",
    profile: "https://randomuser.me/api/portraits/men/67.jpg",
    username: "matt_fullstack",
    fullName: "Matt Green",
    title: "Full-stack Dev",
    messages: [
      {
        sender: "Matt",
        message: "Sure thing, I'll send over the updates shortly.",
        timestamp: "2024-08-23T10:25:00"
      },
      {
        sender: "You",
        message: "Could you update the backend as well?",
        timestamp: "2024-08-23T10:23:00"
      },
      {
        sender: "Matt",
        message: "The frontend updates are done. How does it look?",
        timestamp: "2024-08-23T10:20:00"
      }
    ]
  },
  {
    id: "conv10",
    profile: "https://randomuser.me/api/portraits/women/56.jpg",
    username: "sophie_dev",
    fullName: "Sophie Alex",
    title: "Jr. Frontend Dev",
    messages: [
      {
        sender: "You",
        message: "Thanks! I'll review your code and get back to you.",
        timestamp: "2024-08-23T16:10:00"
      },
      {
        sender: "Sophie",
        message: "Let me know if you need anything else.",
        timestamp: "2024-08-23T16:05:00"
      },
      {
        sender: "Sophie",
        message: "The feature is implemented. Can you review it?",
        timestamp: "2024-08-23T16:00:00"
      }
    ]
  }
];

export const dashboard: DashboardSection[] = [
  {
    groupKey: 'overview',
    groupValue: 'Overview',
    children: [
      {
        label: 'Dashboard Home',
        value: 'dashboard-home',
        url: '/admin/dashboard',
      },
      {
        label: 'Analytics',
        value: 'analytics',
        url: '/admin/dashboard/analytics',
      },
      {
        label: 'Reports',
        value: 'reports',
        url: '/admin/dashboard/reports',
      },
    ],
  },
  {
    groupKey: 'courses',
    groupValue: 'Courses Management',
    children: [
      {
        label: 'All Courses',
        value: 'all-courses',
        url: '/admin/dashboard/courses/all',
      },
      {
        label: 'Add New Course',
        value: 'add-new-course',
        url: '/admin/dashboard/courses/add',
        new: true,
      },
      {
        label: 'Course Categories',
        value: 'course-categories',
        url: '/admin/dashboard/courses/categories',
      },
      {
        label: 'Course Reviews',
        value: 'course-reviews',
        url: '/admin/dashboard/courses/reviews',
      },
    ],
  },
  {
    groupKey: 'students',
    groupValue: 'Students Management',
    children: [
      {
        label: 'All Students',
        value: 'all-students',
        url: '/admin/dashboard/students/all',
      },
      {
        label: 'Enrollments',
        value: 'enrollments',
        url: '/admin/dashboard/students/enrollments',
      },
      {
        label: 'Student Progress',
        value: 'student-progress',
        url: '/admin/dashboard/students/progress',
      },
      {
        label: 'Student Feedback',
        value: 'student-feedback',
        url: '/admin/dashboard/students/feedback',
      },
    ],
  },
  {
    groupKey: 'instructors',
    groupValue: 'Instructors Management',
    children: [
      {
        label: 'All Instructors',
        value: 'all-instructors',
        url: '/admin/dashboard/instructors/all',
      },
      {
        label: 'Add New Instructor',
        value: 'add-new-instructor',
        url: '/admin/dashboard/instructors/add',
      },
      {
        label: 'Instructor Performance',
        value: 'instructor-performance',
        url: '/admin/dashboard/instructors/performance',
      },
    ],
  },
  {
    groupKey: 'settings',
    groupValue: 'Platform Settings',
    children: [
      {
        label: 'General Settings',
        value: 'general-settings',
        url: '/admin/dashboard/settings/general',
      },
      {
        label: 'Payment Settings',
        value: 'payment-settings',
        url: '/admin/dashboard/settings/payment',
      },
      {
        label: 'Notification Settings',
        value: 'notification-settings',
        url: '/admin/dashboard/settings/notifications',
      },
      {
        label: 'User Roles',
        value: 'user-roles',
        url: '/admin/dashboard/settings/roles',
      },
    ],
  },
];

export const initialMembers: Member[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "instructor",
    joinDate: "2023-01-15",
    bio: "Experienced math teacher",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "student",
    joinDate: "2023-02-20",
    bio: "Aspiring data scientist",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    joinDate: "2022-12-01",
    bio: "System administrator",
  },
  {
    id: "4",
    name: "Banned User",
    email: "banned@example.com",
    role: "banned",
    joinDate: "2023-03-10",
    bio: "Violated community guidelines",
  },
]