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
    nextjs,
    mui,
    bootstrap,
    wd,
    le,
    fver,
    up,
   

    
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
      title: "Nodejs / Reactjs",
      icon: web,
    },
    {
      title: "MongoDB / MySql",
      icon: mobile,
    },
    {
      title: "Html5 / CSS3",
      icon: backend,
    },
    {
      title: "Stripe / Twilio",
      icon: creator,
    },
    {
      title: "BlockChain",
      icon: creator,
    },
    {
      title: "Database Mange",
      icon: creator,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },           
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
      name: "Redux Toolkit",
      icon: redux,
    },
 
    {
      name: "MongoDB",
      icon: mongodb,
    },
  
    {
      name: "GitHub",
      icon: git,
    },
    
    {
      name: "docker",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer / BlockChain",
      company_name: "Octaloop Technology",
      icon: './src/assets/company/octal.jpg',
      iconBg: "#383E56",
      date: "Present",
      points: [
        "Work on AI and BlockChain Projects Implement the The API and Mange the Backend.",
        "Integrate the Payment API Stripe in AI Project and Data save and Mange Using the MongoDB Database.",
        "Wrok on Two Projects One is AI project Chat-kyc and Other BlockChain Project Supervet-SKALE.",
      ],
    },
    {
      title: "Full Stack Developer ",
      company_name: "IsoftStudios",
      icon: './src/assets/isoft.png',
      iconBg: "#E6DEDD",
      date: "Nov 2023 - June 2024",
      points: [
        "Crafting and sustaining dynamic web applications leveraging React.js, Node.js, and an ecosystem of modern technologies.",
        "Work on Modern Third party Application and Implement in Projects like This Payment Gateway Stripe , Socket.io ,Twilio and Reduixtollkit ",
        "Create many project like this Airbnb , Social_App.com and Ecommerce Website",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Nodejs Developer",
      company_name: "Solution Corridor",
      icon: './src/assets/company/sol.png',
      iconBg: "#383E56",
      date: "March 2023 - Oct 2023",
      points: [
        "Building and managing web applications using HTML, CSS, Bootstrap, JavaScript, and related technologies.",
        "Creating and managing web applications with Node.js and related technologies.",
        "Create the Dubai.com Web Application In Nodejs , MySql and HTML/CSS ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "We wanted a website in order to increase the digital presence of our website and JahanZaib helped us greatly in making a website in quite a short time and great budget.",
      name: "Johan Ring",
      designation: "CEO",
      company: "Apex Truckers",
      image: "https://res.cloudinary.com/diksmyvyt/image/upload/v1715598296/swiss-removebg-preview_kx7dfn.png",
    },
    {
      testimonial:
        "I wanted a website built on latest frameworks and improved navigation to meet my business needs and Zaib helped me just so.",
      name: "Usman Mailk",
      designation: "CEO",
      company: "Strong Packagings",
      image: "https://res.cloudinary.com/diksmyvyt/image/upload/v1715598500/logo-no-background_faifna.png",
    },
    {
      testimonial:
        "I wanted a professional website to help meet my affiliate business requirements and JahanZaib helped me build one exactly the way I wanted it to be.",
      name: "Jeff Petter",
      designation: "CEO",
      company: "Airdnb.",
      image: "https://res.cloudinary.com/diksmyvyt/image/upload/v1715598667/logo-no-background_ulyicq.png",
    },
  ];
  
  const projects = [
    {
      name: "Chat KYC",
      description:
        "Chat KYC is an AI-driven project designed to deliver financial crime reports. It covers data from ten countries, offering comprehensive insights. This tool enhances due diligence and compliance in financial transactions.",
      tags: [
        {
          name: "Reactjs and Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Email",
          color: "green-text-gradient",
        },
        {
          name: "Stripe / Twilio",
          color: "pink-text-gradient",
        },
      ],
      image: "./src/assets/chat.png",
      links:"https://chat-kyc.vercel.app/",
    },
    {
      name: "Airbnb Like This Website",
      description:
        "We create the Like this same webiste or Airbnb.com . User Book the Room in Different Countrious and Buy the House.",
      tags: [
        {
          name: "Nodejs / Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "MERN-Stack",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap CSS",
          color: "pink-text-gradient",
        },
      ],
      image: "./src/assets/air.png",
      source_code_link: "",
      links:"https://airbnb-frontend-beta.vercel.app/"
    },
    {
      name: "Strong Packagings",
      description:
        "The Strong Packagings is Ecommerce Website for UK Client.The Different Categrious Of Product People Buy. The Stripe Payment API ingerate dynamic and responsive with dashboard.",
      tags: [
        {
          name: "React / Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "MERN-stack",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB / Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: "./src/assets/st.png",
      source_code_link: "https://www.strongpackagings.com/",
      links:"https://www.strongpackagings.com"
    },
    {
      name: "Apex Truckers",
      description:
        "Develop a static portfolio website for Apex Trucker. Use HTML, CSS3, and Bootstrap for a clean, responsive design. Ensure the site is user-friendly and visually appealing.",
      tags: [
        {
          name: "Html5 / CSS3",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap / Email",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: "./src/assets/ap.png",
      source_code_link: "",
      links:"https://apextruckers.com/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };