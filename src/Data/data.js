// src/data/profileData.js
const profileData = {
    name: "khushveer Malviya",
    title: "Devops Engineer , Azure, GCP , AWS, ci/cd Piplines",
    location: "Rjasthan,India",
    contactInfo: "Contact info",
    website: "Edusystem.tech  ",
    connections: "500+ connections",
    mutualConnections: [
      { name: "Lakshyaraj Singh Chundawat" },
      { name: "Devangana Sujay" },
      { name: "1 other mutual connection" }
    ],
    companyLogo: "/bg.png", 
  };
  export default profileData;


export const aboutData = {
    text: `Cybersecurity Professional | OSCP | CISA | CSPFC | ISA\n\n\uD83C\uDF1F Guinness World Record Holder | Shooter | National Boxer\n\uD83C\uDF0F Travel Enthusiast | Culinary Artist | Guitarist | Author`,
  };
  
  export const servicesData = [
    "Cybersecurity",
    "Computer Networking",
    "Information Security",
    "Software Testing",
    "Information Management",
    "IT Consulting",
  ];
  
  export const featuredPosts = [
    {
      id: 1,    
      image: "/post1.jpg",
      title: "Just automated log archiving on my Linux system using crontab! Set up a script to compress /var/log files every day using tar.gz and store them neatly in a backup directory — all triggered on schedule with cron. This keeps the system clean and efficient while retaining logs for future reference. It’s a small but powerful example of how automation plays a key role in DevOps. Feeling more ready than ever to step into a DevOps role and solve real-world infrastructure problems with automation and scripting! 🛠️📁💡",
      likes: 415,
      comments: 110,
    },
    {
      id: 2,
      image: "/images.jpg",
      title: "I recently deployed a Kubernetes cluster on AWS using EC2 instances. I created a deployment with 3 replicas within the cluster and configured outbound security rules using AWS security groups to control internet access. The application image was pulled directly from Docker Hub and deployed inside the cluster without pre-installing it on the EC2 machines. This gave confidence.",
      likes: 243,
      comments: 27,
    },
    // {
    //   id: 3,
    //   image: "/f3.jpg",
    //   title: "The much awaited course is live, check it out...",
    //   likes: 447,
    //   comments: 684,
    // },
  ];
  
  export const activityPosts = [
    {
      id: 1,
      content: "UPDATE:- Shortlisted 21 candidates for interview round",
      likes: 206,
      comments: 693,
    },
    {
      id: 2,
      content: "SCAM ALERT: When a \"Good-Looking Girl\" Offers You $300/Day...",
      likes: 60,
      comments: 15,
    },
  ];
  
  export const experienceData = [
    {
      id: 1,
      role: "Founder & CEO",
      company: "NexusSecurity",
      duration: "Jan 2020 - Present",
      description: "Leading cybersecurity solutions and consulting globally.",
    },
  ];
  
  export const educationData = [
    {
      id: 1,
      school: "MIT",
      degree: "M.Sc. in Cybersecurity",
      duration: "2017 - 2019",
    },
  ];
  
  export const certificationsData = [
    {
      id: 1,
      name: "OSCP",
      issuer: "Offensive Security",
      year: "2020",
    },
  ];

  export const mockData = {
    aboutData: {
      text: "Passionate software engineer with 8+ years of exp  erience building scalable web applications. Expertise in React, Node.js, and cloud technologies.\n\nI love solving complex problems and mentoring junior developers. Currently focused on building innovative solutions that impact millions of users globally."
    },
    servicesData: [
      "Web Development", "Mobile Apps", "Cloud Architecture", "DevOps", 
      "Technical Consulting", "Team Leadership", "Code Review", "Mentoring"
    ],
    featuredPosts: [
      { id: 1, title: "Building Scalable React Applications", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=300&fit=crop", likes: 142, comments: 23 },
      { id: 2, title: "Modern JavaScript Best Practices", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=300&fit=crop", likes: 89, comments: 15 },
      { id: 3, title: "Cloud Architecture Patterns", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop", likes: 203, comments: 41 }
    ],
    activityPosts: [
      { id: 1, content: "Just shipped a new feature that improves user experience by 30%! Excited to see the impact on our users.", likes: 45, comments: 8 },
      { id: 2, content: "Great discussion on microservices architecture at today's tech meetup. The future of scalable systems looks promising!", likes: 67, comments: 12 },
      { id: 3, content: "Mentoring junior developers is one of the most rewarding aspects of my job. Seeing them grow and succeed is incredible.", likes: 134, comments: 25 }
    ],
    experienceData: [
      { id: 1, role: "Senior Software Engineer", company: "TechCorp Inc.", duration: "Jan 2022 - Present", description: "Lead development of microservices architecture serving 1M+ users daily. Mentored 5 junior developers and improved team productivity by 40%." },
      { id: 2, role: "Software Engineer", company: "StartupXYZ", duration: "Mar 2020 - Dec 2021", description: "Built responsive web applications using React and Node.js. Implemented CI/CD pipelines and reduced deployment time by 60%." }
    ],
    educationData: [
      { id: 1, degree: "Bachelor of  Computer Application", school: "Manipal University Jaipur", duration: "2022 - 2025" },
      // { id: 2, degree: "Bachelor of Science in Software Engineering", school: "UC Berkeley", duration: "2014 - 2018" }
    ],
    certificationsData: [
      { id: 1, name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
      { id: 2, name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2022" },
      { id: 3, name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2021" }
    ]
  };
  
  
  // Each of these can be used in React components for display and edit modals
  