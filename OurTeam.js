const teamMembers = [
  {
    name: "Jacob Dickens",
    position: "Founder",
    description:
      "Jacob Dickens - Founder and Director, Eben Foundation Jacob Dickens is the visionary Founder and Director of the Eben Foundation, has dynamic skills in :entrepreneurship ,animal production and health management, Jacob brings a wealth of expertise and a deep commitment to quality assurance in all endeavors",
    image: "sec.jpg",
    altText: "Jacob Dickens",
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/jacob_dickens_?igsh=MTcwN3p1dXF0Z2ZubQ==",
    },
  },
  {
    name: "Derrick Masagege",
    position: "Co-Founder|Chief Executive Officer",
    description:
      "Derrick Masagege, CEO of Eben Foundation Kisumu and a Software Developer based in Nairobi, Kenya, is known for over 5 years of experience in technology and leadership. A degree in ICT has been earned, with specialization in Web Development and Database Management. Digital transformation and community empowerment are led by him. Connections can be made through Masagege.efafoundation@gmail.com ",
    image: "mee.jpg",
    altText: "Derrick Masagege",
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/_masagege/profilecard/?igsh=YnpzYXk0YTBwOG92",
    },
  },
  {
    name: "Chris Ochieng",
    position: "CEO|Regional Coordinator|Head of Charity",
    description:
      "As a recent graduate, Chris brings a passion for data entry and logistics management. Through his academic and early professional journey, Chris has developed a keen eye for detail and a strong analytical mindset, which have been pivotal to his success in various projects and roles. From a young age, Chris has been captivated by the power of charity to help families in need. The Eben Foundation has provided him with a wonderful platform, and as a leader, he is excited about the opportunity to make a real difference in people's lives. Committed to living a purposeful life, Chris finds strength in his faith and the support of fellow members, knowing he is never alone on this journey.",
    image: "chris.jpg",
    altText: "Chris Ochieng",
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/heavycpapa?igsh=MWcybWN2b29laTd5cw==",
    },
  },
  {
    name: "Senny Christine",
    position: "Special Needs Head",
    description:
      "As a Special Needs Teacher, Senny brings a deep commitment to inclusive education and personalized support for students with diverse learning needs. With practical experience and academic training, Senny has developed a strong foundation in creating tailored education plans and fostering a supportive classroom environment to address the unique challenges of each student. Senny is eager to leverage their knowledge and passion to empower students and support their growth.",
    image: "senny.jpg",
    altText: "Senny Christine",
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/oy_.nga?igsh=NDFqNHpzM3ZzZmFq",
    },
  },

  {
    name: "Maurine Agong",
    position: "Secretary",
    description:
      "As an IT student at KCA University, Maurine is driven by a passion for technological innovation and its potential to transform lives. She is committed to leveraging technology to create sustainable solutions and enhance community well-being. Joining Eben Foundation allows Maurine to merge her tech skills with the organization’s shared mission of environmental conservation and social impact, striving to make a meaningful difference together. Together, she believes, they nurture and sustain the future..",
    image: "maurine.jpg",
    altText: "Maurine Agong",
    social: {
      linkedin: "#",
      instagram:  "",
    },
  },
  {
    name: "Richard See",
    position: "Project Manager",
    description:
      "He is a dedicated Christian who embraced the teachings of scriptures, shaping his character. A leader from a young age, he achieved numerous awards, including brigade commander at 10. Fueled by his passion for agriculture, he earned certificates in general agriculture and animal production from Bukura Agricultural College. His internship in South Germany enriched his knowledge of modern agricultural technology securing him a jobs in international forums",
    image: "richard.png",
    altText: "Richard See",
    social: {
      linkedin: "#",
      instagram:  "https://www.instagram.com/seerichardotieno?igsh=MWZ6MmNzdWd2emZtbg==",
    },
  },
  {
    name: "Martin Nyukuri",
    position: "Youth Initiative Head",
    description:
      " Martin lets no one ever dim his light. He allows nothing to break his heart and never lets doubt own space in his mind. With courage as his pillar of strength, Martin walks in the belief that the Most High God sent him to Eben Foundation Africa. Holding his head high, a smile on his face, and occupying his own space, Martin is confident that God is the one who sent him. With the assurance that God has gone before him and is always with him, Martin knows he can go forth and conquer the world.",
    image: "martin.jpg",
    altText: "Martin Nyukuri",
    social: {
      linkedin: "#",
      instagram:  "https://www.instagram.com/martinnyukuri?igsh=MWh2czhlYWN1Y3Nkaw==",
    },
  },
  {
    name: "Enoch Onsare Nyangweso",
    position: "Financial Analyst",
    description:
      "Enoch Onsare Nyangweso is a certified Public Accountant and holds the position of Financial Analyst at the esteemed Eben Foundation. He is adroit in ensuring accuracy, the safe security of accounting books, efficiency in financial management, transparency, marketing, report generation, and continuous improvement, among many other areas. Enoch’s aim is to contribute his skills to help Eben Foundation achieve its financial goals while liaising with other departments within the organization.",
    image: "enoch.jpeg",
    altText: "Enoch Onsare",
    social: {
      linkedin: "#",
      instagram: "",
    },
  },
  {
    name: "Mauvine Onyango Otieno",
    position: "Ecotourism Support",
    description:
      "Mauvine, holding a BSc in Wildlife Enterprise and Management from Chuka University, is a devoted conservationist passionate about nature preservation. She believes in a sustainable future through the Genesis purpose of co-creation. As a first-born, Mauvine has embraced responsibility, which fuels her dedication to environmental conservation. At Eben Foundation, she strives to protect the planet and ensure a harmonious coexistence with nature for future generations.",
    image: "mauvine.jpg",
    altText: "Mauvine Onyango",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Thomas Otieno Ongudi",
    position: "Head of Iternational Relations",
    description:
      "Thomas, currently a student at Jaramogi Oginga Odinga University of Science and Technology pursuing a BA in International Relations and Diplomacy. He is deeply involved in peace work activities and mental health advocacy, committed to making a positive impact in these areas.",
    image: "thomas.jpg",
    altText: "Thomas Otieno",
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/jakes_tom_?igsh=bnpuYmNxd2pkZHA2",
    },
  },
];

// Function to create team member cards
function createTeamMemberCard(member) {
  return `
        <div class="team-member">
            <img src="${member.image}" alt="${member.altText}" class="member-image">
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-position">${member.position}</p>
                <p class="member-description">${member.description}</p>
                <div class="social-links">
                    <a href="${member.social.linkedin}" target="_blank">LinkedIn</a>
                    <a href="${member.social.instagram}" target="_blank">Instagram</a>
                </div>
            </div>
        </div>
    `;
}


// Render team members
document.getElementById("teamGrid").innerHTML = teamMembers
  .map((member) => createTeamMemberCard(member))
  .join("");