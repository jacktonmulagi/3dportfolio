import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "System Administrator (sysadmin) ",
    company_name: "Epitech systems",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2019 - December 2019",
    points: [
      "Installing and configuring computer hardware, software, and networking systems.",
      "Monitoring system performance and troubleshooting issues.",
      "Managing user accounts and access permissions.",
      "Maintaining data backups and disaster recovery plans.",
      "Ensuring system security and applying updates and patches to address vulnerabilities.",
      "Monitoring system performance and troubleshooting issues.",
      "Managing network infrastructure, including firewalls, routers, and switches",
      "Providing technical support to end-users and other IT staff.",
    ],
  },
  {
    title: "WordPress Developer ",
    company_name: "Epitech systems",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2020 - May 2021",
    points:  [
      "Developing custom WordPress themes and plugins to enhance website functionality.",
      "Customizing website appearance, layout, and functionality to meet client requirements.",
      "Maintaining WordPress websites by keeping core, theme, and plugin updates up-to-date.",
      "Diagnosing and resolving technical issues that arise on the WordPress website.",
      "Optimizing website performance to ensure fast and efficient loading.",
      "Implementing security measures to protect WordPress websites from cyber threats.",
      "Collaborating with other developers, designers, and project managers to ensure timely project delivery and client satisfaction."
      ],
  },
  {
    title: " Laravel Developer",
    company_name: "Shantech systems",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2020 - May 2021",
    points: [
      "Developing web applications using Laravel framework and PHP programming language.",
      "Creating and maintaining relational databases, such as MySQL, to store and retrieve application data.",
      "Implementing user authentication and authorization systems to ensure secure access to application features.",
      "Integrating third-party APIs and libraries to add functionality to the application.",
      "Writing clean, organized, and efficient code following coding standards and best practices.",
      "Conducting unit tests and debugging to identify and resolve software defects.",
      "Collaborating with other developers, designers, and project managers to ensure timely project delivery and client satisfaction.",
      "Performing code reviews to ensure code quality and maintainability.",
      "Optimizing application performance through code optimizations and database query optimizations.",
      "Documenting application code and maintaining technical documentation for future reference."
      ],
  },
  {
    title: "Frontend developer",
    company_name: "Africom Media Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - December 2021",
    points:  [
      "Translating UI/UX design wireframes from Figma into high-quality code using HTML, CSS, and JavaScript.",
      "Developing responsive web pages and user interfaces using modern front-end frameworks such as React and Next.js.",
      "Creating and maintaining CSS stylesheets and utilizing CSS pre-processors such as Sass or Less to write more efficient code.",
      "Implementing animations and interactive features using JavaScript libraries such as GSAP or React Spring.",
      "Integrating web APIs and external libraries to add additional functionality to web applications.",
      "Collaborating with UI/UX designers and back-end developers to ensure seamless integration between front-end and back-end systems.",
      "Performing cross-browser and cross-device testing to ensure web applications function as expected on various platforms.",
      "Optimizing website performance through code optimizations, image optimizations, and other techniques.",
      "Using CSS frameworks such as Tailwind CSS to create consistent and reusable UI components.",
      "Documenting code and maintaining technical documentation for future reference."
      ],
  },
  {
    title: "Full stack Developer (Senior)",
    company_name: "Africom Media Limited",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using Spring Boot and Java programming language.",
      "Creating and managing relational databases, such as MySQL, to store and retrieve application data.",
      "Implementing DevOps practices to automate software development, testing, and deployment processes.",
      "Building user interfaces and interactive web applications using React and Next.js.",
      "Integrating chatbot functionality into web applications using Telegram Bot and Facebook Messenger Bot.",
      "Developing ERP systems using Odoo to manage business processes such as sales, inventory, and accounting.",
      "Building scalable and high-performance web applications using Node.js.",
      "Collaborating with other developers, designers, and project managers to ensure timely project delivery and client satisfaction.",
      "Performing code reviews to ensure code quality and maintainability.",
      "Optimizing application performance through code optimizations and database query optimizations."
  ]
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Mr Mulagi during your time at Epitech Systems, and I have to say, you are one of the most competent and dedicated system administrators I have ever worked with. Their ability to troubleshoot complex issues and maintain data backups and disaster recovery plans was truly impressive. I highly recommend Mulagi for any IT-related position.",
    name: "Martin Lugaliki",
    designation: "Senior Software Engineer",
    company: "Equity Bank Limited",
    image: "https://media.licdn.com/dms/image/C5603AQHzkw2rkd7gFw/profile-displayphoto-shrink_800_800/0/1578250328566?e=1687996800&v=beta&t=xfQZOooIgFW-066KutHxpJICfive7xY65vxJHJhFfxo",
  },
  {
    testimonial:
    "As a client of Epitech Systems, I had the opportunity to work with Jackton on a WordPress development project. His skills in developing custom themes and plugins, as well as optimizing website performance, were invaluable to the success of the project. Jackton was always professional, reliable, and easy to work with. I would not hesitate to recommend them for any WordPress-related work.",
    name: "Kevin Denge",
    designation: "Information Technology Security Specialist at Craft Solutions",
    company: "Craft Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "It is my pleasure of working alongside Jackton at Africom Media Limited, and I can honestly say He is one of the most talented and detail-oriented developers I have ever met. His ability to translate UI/UX design wireframes into high-quality code using modern front-end frameworks was truly impressive. He  is always willing to go the extra mile to ensure our team delivered the best possible product to our clients. I would highly recommend Jackton for any full-stack development role.",
    name: "Seth wanyama",
    designation: "Product Development Lead",
    company: "Africom Media LTD",
    image: "https://media.licdn.com/dms/image/C4D03AQFxRD26waIKJg/profile-displayphoto-shrink_800_800/0/1594615617969?e=1687996800&v=beta&t=gdSU1R8-ZudgynCictzwzHZjanYPLQXCZW5QLtg7X00",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
