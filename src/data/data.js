export const person = [
  {
    name: 'Nathan Katshi',
    position: 'Front End Engineer',
    headline:
      'I build pixel-perfect, engaging, and accessible digital experiences.',
  },
]

export const sections = [
  { label: 'About', href: '#about', active: true },
  { label: 'Experience', href: '#experience', active: true },
  { label: 'Projects', href: '#projects', active: true },
  { label: 'Articles', href: '/blog', active: false },
  { label: 'Fun Facts', href: '#achievements', active: true },
]

export const experience = [
  {
    company: 'Shaba Industry',
    currentPosition: 'Lead Engineer',
    previousPositionOne: 'Front End Engineer',
    previousPositionTwo: 'Product Development Manager',
    duration: '2022 - present',
    description:
      'Build and maintain key front-end components that are crucial to the overall product, ensuring their efficiency and reliability. Work closely with cross-functional teams, including developers, designers, and product managers, to integrate these components seamlessly. Implement and promote best practices in web accessibility, making sure our products are inclusive and user-friendly for all individuals',
    companyURL: 'https://shabaindustrie.com',
    linkIcon: '/icons/external-link.png',
    achievementIcon: '/icons/app.png',

    products: [
      { name: 'Ware House', url: 'https://warehousedrc.com' },
      { name: 'Shaba Industry', url: 'https://shabaindustrie.com' },
    ],
    techStack: [
      'React',
      'NextJS',
      'Typescript',
      'Tailwind CSS',
      'Figma',
      'WordPress',
      'Bootstrap',
      'jQuery',
      'Netlify',
    ],
  },
  {
    company: 'CIC Global',
    currentPosition: 'Systems Engineer',
    previousPositionOne: '',
    previousPositionTwo: 'Project Specialist',
    duration: '2020 - 2022',
    description:
      'Designed, deployed, and maintained mission-critical applications in the cloud, ensuring HA, scalability, and security for diverse enterprise environments. Utilized cutting-edge technologies such as AWS to build robust infrastructure that supported seamless operations and rapid deployment. Led the development and implementation of comprehensive web and mobile applications for a wide range of clients, leveraging frameworks like React, NextJS, Bootstrap, and Vue. Architected and optimized backend systems, including databases and ERPs, to ensure efficient data flow and integration',
    companyURL: '',
    linkIcon: '/icons/external-link.png',
    achievementIcon: '/icons/app.png',

    products: [{ name: 'Mexco SAS', url: 'https://mexco-sas.com' }],
    techStack: [
      'React',
      'Typescript',
      'Saas',
      'WordPress',
      'Wix',
      'Amazon Web Services',
    ],
  },
  {
    company: 'BRASIMBA',
    currentPosition: 'Network & Systems Engineer',
    previousPositionOne: '',
    duration: '2017 - 2019',
    description:
      'Led the complete redesign of the corporate network at Lubumbashi HQ and upgraded branch networks by migrating the Headquarters campus network and 12 branches across the country to a Cisco DMVPN infrastructure (Single-Hub Dual-Cloud over MPLS L3 VPN), optimizing network performance and security. Drafted, implemented, and enforced the company’s IT security policy. Managed company licences, servers, databases, and clusters in a Windows Server environment, ensuring high availability, performance, and security through regular maintenance, updates, and monitoring',
    companyURL: 'https://brasimba.com',
    linkIcon: '/icons/external-link.png',
    achievementIcon: '/icons/app.png',

    products: [
      { name: '', url: '' },
      { name: '', url: '' },
    ],
    techStack: [
      'Cisco ISE',
      'DMVPN ',
      'MPLS L3 VPN',
      'Nexus Switches',
      'Routing & Switching',
      'SQL Server',
      'Windows Server',
      'Kaspersky',
    ],
  },
  {
    company: 'Trust Merchant Bank',
    currentPosition: 'Network Technician',
    previousPositionOne: 'IT Support',
    duration: '2016 - 2017',
    description:
      'Handled network implementation, including LAN cabling and configuration of routers and switches. Deployed Windows and Linux servers, configuring essential network services such as DHCP, FTP, and NAC. Provided technical support to end users, resolving tickets both on-site and remotely',

    companyURL: 'https://tmb.cd',
    linkIcon: '/icons/external-link.png',
    achievementIcon: '/icons/app.png',

    products: [
      { name: '', url: '' },
      { name: '', url: '' },
    ],
    techStack: ['Cisco Switches', 'VoIP', 'LAN Cabling'],
  },
  {
    company: 'Freeport-McMoRan, TFM',
    currentPosition: 'IT Support',
    previousPositionOne: '',
    duration: '2014 - 2015',
    description:
      'Performed maintenance and upgrades for computers and printers, including preventive maintenance and software updates. Built computers based on specific requirements before deploying them to end users',

    companyURL: '',
    linkIcon: '/icons/external-link.png',
    achievementIcon: '/icons/app.png',

    products: [
      { name: '', url: '' },
      { name: '', url: '' },
    ],
    techStack: ['Acronis ', 'PXE Deploys', 'Backups & Recovery', , 'GLPI'],
  },
]

export const projects = [
  {
    src: '/img/warehousedrc.png',
    name: 'Ware House DRC',
    description:
      'Crafted a vibrant and interactive website for Ware House, a premier restaurant, lounge bar, and nightclub in Lubumbashi. Leveraged React, NextJS, TypeScript, and Tailwind CSS to deliver a seamless and engaging user experience, significantly boosting the venue’s online visibility and customer engagement',

    achievements: '',
    techUsed: [
      'React',
      'Bootstrap',
      'NodeJS',
      'Firebase',
      'EmailJS',
      'EsLint',
      'Prettier',
      'VS Code',
    ],
    url: 'https://warehousedrc.com',
    year: '2024',
    label: 'warehousedrc.com',
    linkIcon: '/icons/external-link.png',
    achievementIcon: '/icons/app.png',
    company: 'Shaba Industry',
    isComplete: false,
  },
  {
    src: '/img/katshi-v2.png',
    name: 'Katshi.dev',
    description:
      'Newer version of my portfolio website designed in Figma, built with React/NextJS, styled with Tailwind CSS',

    achievements: '',
    techUsed: [
      'React',
      'NextJS',

      'Tailwind CSS',
      'Figma',
      'VS Code',
      'Vite',
      'Font Awesome',
    ],
    url: '/',
    year: '2024',
    label: 'katshi.dev',
    linkIcon: '/icons/external-link.png',
    achievementIcon: '/icons/app.png',
    company: 'Katshi.dev',
    isComplete: true,
  },
  {
    src: '/img/shabaindustrie.png',
    name: 'Shaba Industry',

    achievements: '',
    description:
      'As the Lead Engineer, I developed a user-friendly and visually striking website for Shaba Industry, a key player in the entertainment sector. This site serves as a comprehensive portal for customers, partners, and stakeholders to explore their safety equipment and services, enhancing the brand’s online presence and engagement',
    techUsed: [
      'React',
      'NextJS',
      'Typescript',
      'Tailwind CSS',
      'Bootstrap',
      'Webpack',
      'EsLint',
      'PostCSS',
      'Prettier',
      'VS Code',
    ],
    url: 'https://shabaindustrie.com',
    label: 'shabaindustrie.com',
    linkIcon: '/icons/link.png',
    achievementIcon: '/icons/app.png',

    year: '2023',
    company: 'Shaba Industry',
    isComplete: true,
  },
  {
    src: '/img/mexco-sas.png',
    name: 'Mexco SAS',
    description:
      'Mexco SAS, a leading mining service corporation, entrusted us with the creation of their online platform. Using modern technologies, I developed a user-friendly website that effectively showcases their services and solutions for the mining industry',

    achievements: '',
    techUsed: ['Wix', 'HTML', 'Saas', 'JavaScript'],
    url: 'https://mexco-sas.com',
    year: '2022',
    label: 'mexco-sas.com',
    linkIcon: '/icons/link.png',
    achievementIcon: '/icons/app.png',

    company: 'CIC Global',
    isComplete: true,
  },
  {
    src: '/img/katshi-v1.png',
    name: 'Katshi.dev',

    achievements: '',
    description:
      'An old personal portfolio showcasing my front-end development skills using HTML, Saas and JavaScript',
    techUsed: ['HTML', 'Saas', 'JavaScript'],
    url: 'https://v1.katshi.dev',
    label: 'v1.katshi.dev',
    linkIcon: '/icons/link.png',
    achievementIcon: '/icons/app.png',

    year: '2022',
    company: 'Katshi.dev',
    isComplete: true,
  },
]
export const achievements = [
  {
    src: '/img/netriders.png',
    name: 'NetRiders 2016',
    description:
      ' Achieved first place in the Sub-Saharan Africa region in the prestigious Cisco NetRiders competition, showcasing exceptional networking skills and knowledge',

    achievements: 'Won Top Talent Prize',
    techUsed: ['CCNA', 'CCENT', 'CCDA', 'Routing and Switching', 'Security'],
    url: 'https://icemalta.com/campaigns/cisco-netriders-competition/',
    year: '2016',
    linkIcon: '/icons/link.png',
    achievementIcon: '/icons/band.png',

    label: 'Cisco Networking Academy Netriders 2016',

    company: 'Shaba Industry',
  },
  {
    src: '/img/lazola.png',
    name: 'Innovative Lazola Football Training',
    description:
      'I enjoy directing innovative videos as a hobby. My work on the Lazola coach training video with TP Mazembe players blends sports training with engaging visual storytelling. The video gained significant traction on social media and was featured on BBC Africa News in 2022',

    achievements: '1M+ social media views',
    techUsed: [
      'Sony A7SIII',
      'DJI Mavic Air 2',

      'Adobe Premiere Pro',
      'Adobe Media Encoder',
      'Adobe Photoshop',
    ],
    url: 'https://www.youtube.com/watch?v=U59uwYBJndQ',
    year: '2022',
    linkIcon: '/icons/link.png',
    achievementIcon: '/icons/eye.png',
    label: 'Lazola Training',
    company: 'Lugan Media',
  },
]

export const socialMedia = [
  {
    name: 'LinkedIn',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>',
    href: 'https://www.linkedin.com/in/iam-inath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    name: 'GitHub',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>',
    href: 'https://github.com/iam-inath',
  },
  {
    name: 'x',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>',
    href: 'https://x.com/iam_inath',
  },
  {
    name: 'discord',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>',
    href: 'https://discordapp.com/users/1223610773256011806',
  },
  /*   {
    name: 'Codepen',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z"/></svg>',
    href: 'https://codepen.com/iam_inath',
  },
 */
  {
    name: 'Instagram',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
    href: 'https://www.instagram.com/eagleofcongo?igsh=b253M2dxNjk4OW1j&utm_source=qr',
  },
]
