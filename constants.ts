import { Project, Experience, Education, SkillGroup, Hobby } from './types';

export const RESUME_DATA = {
  name: "Nguyen Hoang Sang",
  title: "Computer Science Student & Software Developer",
  contact: {
    email: "mattydoe@gmail.com",
    github: "github.com/mattyDoe",
    linkedin: "linkedin.com/in/mattydoe",
    website: "mattydoe.com"
  },
  education: [
    {
      school: "College University",
      degree: "B.S. Computer Science",
      date: "June 2026",
      gpa: "4.0/4.0",
      details: "Current GPA"
    },
    {
      school: "Little High School",
      degree: "Dual Enrollment at Mission Community College",
      date: "June 2022",
      gpa: "4.44/4.0"
    }
  ] as Education[],
  skills: [
    {
      category: "Languages",
      items: ["C/C++", "Python", "Java", "JavaScript/TypeScript", "HTML/CSS", "LaTeX"]
    },
    {
      category: "Tools",
      items: ["Git/GitHub", "Unix Shell", "Webpack", "VS Code", "IntelliJ", "CLion", "PyCharm", "IDEA", "Atom"]
    }
  ] as SkillGroup[],
  projects: [
    {
      title: "Carbon",
      tech: ["Flutter", "Dart", "Supabase", "INRIX API", "Google Maps"],
      date: "Nov. 2023",
      description: [
        "Team project for the INRIX Hack 2023 Hackathon, earned Honorable Mention",
        "Developed a social media mobile app to gamify eco-friendliness using the INRIX API",
        "Learned how to use Flutter in conjunction with backend databases and APIs"
      ]
    },
    {
      title: "ChatBuzz",
      tech: ["TypeScript", "HTML/CSS", "Webpack", "Twitch API"],
      date: "May 2023 – Present",
      description: [
        "Developed a full-stack web application for Twitch livestreamers to display repeated chat messages on OBS",
        "Experimented with Twitch API’s OAuth Access Tokens to get chat data from the given channel",
        "Collaborated with livestreamers to get feedback and suggested features",
        "Solved problems relating to asynchronous tasks"
      ]
    },
    {
      title: "FoodDropper",
      tech: ["Java", "Maven", "Spigot API"],
      date: "Aug. 2022",
      description: [
        "Developed a Minecraft server plugin to limit players to one way of replenishing their hunger bar",
        "Used persistent data containers to save and load data, ensuring that it persists across plugin resets",
        "Optimized UX e.g. sound design, food drop timing, supplied saturation level, and addressed potential workarounds"
      ]
    }
  ] as Project[],
  experience: [
    {
      role: "Member",
      organization: "Competitive Programming Club",
      date: "Sept. 2023 – Present",
      description: "Involved in the club centered around Competitive Programming"
    },
    {
      role: "Tutor",
      organization: "Apex Tutoring",
      date: "2019 – Present",
      description: "Routinely tutor K–12 students in math, coding, etc."
    },
    {
      role: "Volunteer, Manager",
      organization: "Luigi Team Charity",
      date: "2018 – Present",
      description: "Earned an award for philanthropic hours spent, still giving away 100 stocked backpacks a year"
    }
  ] as Experience[],
  hobbies: [
    {
      name: "Playing the Drums",
      date: "2013 – 2019",
      description: "Played the drums in symphonic, jazz, and marching bands"
    },
    {
      name: "3rd Place Time Keeping Challenge Championship",
      date: "Feb. 2022 – May 2022",
      description: "Won $1500 nationally competing against high school students in counting seconds and minutes"
    }
  ] as Hobby[]
};
