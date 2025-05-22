import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aditya",
  lastName: "S Jadhav",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "CSE Pre final year student",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kannada", "Marathi", "Hindi"], // optional: Leave the array empty if you don't want to display languages
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
  headline: <>My Portfolio </>,
  subline: (
    <>
I’m Aditya S Jadhav, a pre final year Computer Science Engineering student at <InlineCode>PESITM</InlineCode>, passionate about building scalable and efficient software solutions. 
I enjoy exploring new technologies and applying them through hands-on projects, constantly sharpening my skills with the goal of securing a meaningful internship opportunity.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        Aditya is an Indian-based SDE aspirant with a passion for transforming complex challenges
        into simple, elegant design solutions. My work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
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
        description: <>Bachelor of Engineering in Computer Science and Engineering (CSE) .</>,
      },
      {
        name: "Excellent Science and Commerce PU College",
        description: <>Completed 12th.</>,
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

