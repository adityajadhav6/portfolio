import { InlineCode } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Aditya",
  lastName: "S Jadhav",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "CSE final year student",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata",
  languages: ["English", "Kannada", "Marathi", "Hindi"],
  resumeLink: "https://drive.google.com/file/d/1eJz4NWMEnUnxf8087XjR7UaorsgJfs6F/view?usp=sharing", // Add your Google Drive link here
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adityajadhav6",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://www.linkedin.com/in/aditya-s-jadhav-422814259/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adi.jadhav674@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Aditya S Jadhav </>,
  subline: (
    <>
I’m a final year Computer Science Engineering student at <InlineCode>PESITM</InlineCode>, passionate about building scalable and efficient software solutions. 
I enjoy exploring new technologies and applying them through hands-on projects, constantly sharpening my skills with the goal of securing a meaningful internship opportunity.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  resumeLink: person.resumeLink, // Use the resume link from the person object
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a computer science student with a growing interest in backend development.
        I’m currently exploring how things work behind the scenes and building projects to strengthen my skills.
        I’m actively looking for internship opportunities where I can learn from real-world experience and also contribute my knowledge toward the company’s growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Citigroup Inc",
        timeframe: "Virtual Internship",
        role: "Software developer",
        achievements: [
          <>
            Completed a job simulation involving hypothetical tasks to improve
             Citi’s loan management system and stock market risk reporting
          </>,
          <>
            Created a state diagram of the loan management process 
            using the Unified Modeling Language (UML).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      //Paste here of one experience
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "PES Insititute of Technology & Management",
        description: <>Bachelor of Engineering in Computer Science and Engineering, CGPA=7.6 </>,
      },
      {
        name: "Excellent Science and Commerce PU College",
        description: <>Completed Class 12 (PUC) with 93.3%</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Familiar with Backend framework like Flask.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
      
        ],
      },
      {
        title: "React",
        description: <>Building next gen Webapps with React.js .</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "C",
        description: <>Proficient in writing structured programs using functions, arrays, stacks, queues, and linked lists.
         Able to implement basic algorithms and solve logical problems.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title:"Express.js",
        description: <>Developed server-side logic and REST APIs for full-stack projects using Express, 
        with basic understanding of middleware and database connectivity.</>,
      },
      {
        title:"Docker",
        description: <>Containerizing applications for consistent environments.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],}
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "work",
  title: "Projects I've worked on",
  description: `Some highlighted projects developed by ${person.name}`,
  items: [
    {
      name: "Research Center Management System",
      timeframe: "2024",
      techStack: ["CSS", "MySQL", "PHP"],
      description: (
        <>
          Developed and maintained a web-based platform to manage Doctorates, Supervisors, and Advisory Committee records
          using PHP and MySQL.
        </>
      ),
      images: [
        {
          src: "/images/projects/research-center/cover-01.jpg",
          alt: "Research Center Cover",
        },
      ],
      fallbackImage: "/images/default-placeholder.jpg", // Add a fallback image
    },
  ],
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

