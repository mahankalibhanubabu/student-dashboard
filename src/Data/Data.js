// Sidebar imports
import {
  UilApps,
  UilGraduationCap,
  UilEnvelope,
  UilClipboardNotes,
  UilClipboardAlt,
  UilMissedCall,
  UilSlidersV,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilApps,
    heading: "Dashboard",
  },
  {
    icon: UilGraduationCap,
    heading: "Courses",
  },
  {
    icon: UilEnvelope,
    heading: "Message",
  },
  {
    icon: UilClipboardNotes,
    heading: 'Assignments'
  },
  {
    icon: UilMissedCall,
    heading: 'Help Center'
  },
  {
    icon: UilSlidersV,
    heading:'Settings'
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ethical Hacking",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    png: UilUsdSquare,
    series: [
      {
        name: "Ethical Hacking",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Web Development",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Web Development",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Python",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    png: UilClipboardAlt,
    series: [
      {
        name: "Python",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "courses",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "courses",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "courses",
    time: "2 hours ago",
  },
];
