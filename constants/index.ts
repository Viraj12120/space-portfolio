import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
	RxDiscordLogo,
	RxGithubLogo,
	RxInstagramLogo,
	RxTwitterLogo,
	RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
	{
		skill_name: "HTML",
		image: "html.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "CSS",
		image: "css.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "JavaScript",
		image: "js.png",
		width: 65,
		height: 65,
	},
	{
		skill_name: "Tailwind CSS",
		image: "tailwind.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "React",
		image: "react.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Redux",
		image: "redux.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "React Query",
		image: "reactquery.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "TypeScript",
		image: "ts.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Next.js 14",
		image: "next.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Framer Motion",
		image: "framer.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Stripe",
		image: "stripe.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Node.js",
		image: "node.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "MongoDB",
		image: "mongodb.png",
		width: 40,
		height: 40,
	},
] as const;

export const SOCIALS = [
	{
		name: "Instagram",
		icon: RxInstagramLogo,
		link: "https://instagram.com",
	},
	{
		name: "Facebook",
		icon: FaFacebook,
		link: "https://facebook.com",
	},
	{
		name: "Twitter",
		icon: RxTwitterLogo,
		link: "https://twitter.com",
	},
] as const;

export const FRONTEND_SKILL = [
	{
		skill_name: "HTML",
		image: "html.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "CSS",
		image: "css.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "JavaScript",
		image: "js.png",
		width: 65,
		height: 65,
	},
	{
		skill_name: "Tailwind CSS",
		image: "tailwind.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Material UI",
		image: "mui.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "React",
		image: "react.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Redux",
		image: "redux.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "React Query",
		image: "reactquery.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "TypeScript",
		image: "ts.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Next.js 14",
		image: "next.png",
		width: 80,
		height: 80,
	},
] as const;

export const BACKEND_SKILL = [
	{
		skill_name: "Node.js",
		image: "node.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Express.js",
		image: "express.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "MongoDB",
		image: "mongodb.png",
		width: 40,
		height: 40,
	},
	{
		skill_name: "Firebase",
		image: "firebase.png",
		width: 55,
		height: 55,
	},
	{
		skill_name: "PostgreSQL",
		image: "postgresql.png",
		width: 70,
		height: 70,
	},
	{
		skill_name: "MySQL",
		image: "mysql.png",
		width: 70,
		height: 70,
	},
	{
		skill_name: "Prisma",
		image: "prisma.png",
		width: 70,
		height: 70,
	},
	{
		skill_name: "Graphql",
		image: "graphql.png",
		width: 80,
		height: 80,
	},
] as const;

export const FULLSTACK_SKILL = [
	{
		skill_name: "React Native",
		image: "reactnative.png",
		width: 70,
		height: 70,
	},

	{
		skill_name: "Docker",
		image: "docker.png",
		width: 70,
		height: 70,
	},
] as const;

export const OTHER_SKILL = [
	// {
	// 	skill_name: "Go",
	// 	image: "go.png",
	// 	width: 60,
	// 	height: 60,
	// },
] as const;

export const PROJECTS = [
	{
		title: "BillMitr",
		description:
			"A comprehensive billing and invoicing platform designed to streamline business financial operations. Built with modern web technologies to ensure security, speed, and ease of use for managing invoices and inventory.",
		image: "/projects/bm.png",
		link: "https://billmitr.cloud/",
	},
	{
		title: "Gemrishi",
		description:
			"An immersive platform dedicated to astrology and gemstones. This project features an e-commerce interface for browsing products, booking consultations, and exploring astrological content with a user-friendly design.",
		image: "/projects/gemrishi.png",
		link: "https://gemrishi.com/",
	},
	{
		title: "Quantus-Technik",
		description:
			"A corporate website developed for Quantus-Technik to showcase their engineering and technical services. The site emphasizes professional design, responsiveness, and clear communication of their business value.",
		image: "/projects/qt.png",
		link: "https://quantus-technik.com/",
	},
] as const;

export const FOOTER_DATA = [
	{
		title: "Community",
		data: [
			{
				name: "YouTube",
				icon: FaYoutube,
				link: "https://www.youtube.com/@VirajDisale",
			},
			{
				name: "GitHub",
				icon: RxGithubLogo,
				link: "https://github.com/Viraj12120",
			},
			{
				name: "Discord",
				icon: RxDiscordLogo,
				link: "https://discord.com/users/1070974918616944640",
			},
		],
	},
	{
		title: "Social Media",
		data: [
			{
				name: "Instagram",
				icon: RxInstagramLogo,
				link: "https://www.instagram.com/viraj___179?igsh=eXRmaWFheDNrZWpo",
			},

			{
				name: "Linkedin",
				icon: RxLinkedinLogo,
				link: "https://www.linkedin.com/in/viraj-disale-techie/",
			},
		],
	},
	{
		title: "About",
		data: [
			// {
			// 	name: "Become Sponsor",
			// 	icon: null,
			// 	link: "https://youtube.com",
			// },
			{
				name: "Learning about me",
				icon: null,
				link: "https://www.linkedin.com/in/viraj-disale-techie/",
			},
			{
				name: "Contact Me",
				icon: null,
				link: "mailto:disaleviraj01@gmail.com",
			},
		],
	},
] as const;

export const NAV_LINKS = [
	{
		title: "About me",
		link: "#about-me",
	},
	{
		title: "Skills",
		link: "#skills",
	},
	{
		title: "Projects",
		link: "#projects",
	},
] as const;

export const LINKS = {
	sourceCode: "https://github.com/Viraj12120",
};
