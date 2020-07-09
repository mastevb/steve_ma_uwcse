
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Steve Ma",
  title: "Hi all, I'm Steve",
  subTitle: emoji("A passionate Software Developer 🚀 \n and a Computer Science student"),
  resumeLink: "https://drive.google.com/file/d/1YDIQXP5VHUaN5t1VSmB5MbW8XoQ64rQO/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/mastevb",
  linkedin: "https://www.linkedin.com/in/steve-ma/",
  gmail: "bochenma@cs.washington.edu",
  // Instagram and Twitter are also supported in the links!
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "TikTok",
      companylogo: require("./assets/images/TikTok_logo.png"),
      date: "Sep 2020 – Dec 2020",
      desc: "I'm an (incoming) Software Engineering Intern at TikTok, ByteDance."
    },
    {
      role: "Teaching Assistant",
      company: "UW CSE",
      companylogo: require("./assets/images/uwcse.jpg"),
      date: "Dec 2019 - present",
      desc: "I'm the head TA for CSE 344/414 - Introduction to Database Systems.",
      descBullets: [
        "CSE 414 - 20 WI",
        "CSE 414 - 20 SP",
        "CSE 344 - 20 SU"
      ]
    },
    {
      role: "Research Assistant",
      company: "UW GEMSEC",
      companylogo: require("./assets/images/gemsec.png"),
      date: "Sep 2019 - present",
      desc: "I'm a Research Assistant in the Computational Biology Group at the Genetically Engineered Material Science & " +
          "Engineering Center at UW. I primarily work on using computational methods to solve biology-related problems."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: "28ca5cbdd98a83cc55ca7e074e92d4eef9bac2ea",
  githubUserName: "mastevb", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "bochenma@cs.washington.edu"
};

export { greeting, socialMediaLinks, workExperiences, openSource, contactInfo};
