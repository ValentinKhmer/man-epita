import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "EPITA Manual",
	tagline:
		"Created by students for students. Unofficial manuals and guides for all incoming students of EPITA.",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://valentinkhmer.github.io/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/man-epita/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "ValentinKhmer", // Usually your GitHub org/user name.
	projectName: "man-epita", // Usually your repo name.
	deploymentBranch: "deployement",
	trailingSlash: false,

	onBrokenLinks: "throw",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: "https://github.com/ValentinKhmer/man-epita/",
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		//image: "img/social-card.jpg",
		colorMode: {
			respectPrefersColorScheme: false,
			defaultMode: "dark",
		},
		navbar: {
			title: "EPITA Manual",
			logo: {
				alt: "man-epita",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "toolsSidebar",
					position: "left",
					label: "IT Tools",
				},
				{
					type: "docSidebar",
					sidebarId: "schoolSidebar",
					position: "left",
					label: "School",
				},
				// {
				// 	type: "docSidebar",
				// 	sidebarId: "exchangeSidebar",
				// 	position: "left",
				// 	label: "Exchange",
				// },
				{
					type: "search",
					position: "left",
				},
				// {
				// 	type: "localeDropdown",
				// 	position: "right",
				// },
				{
					href: "https://github.com/ValentinKhmer/man-epita/",
					className: "header-github-link",
					"aria-label": "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "man-epita",
					items: [
						{
							label: "Disclaimer",
							to: "/disclaimer",
						},
						{
							label: "GitHub",
							href: "https://github.com/ValentinKhmer/man-epita/",
						},
					],
				},
				{
					title: "EPITA",
					items: [
						{
							label: "EPITA website",
							href: "https://epita.fr/",
						},
						{
							label: "Forge Docs",
							href: "https://docs.forge.epita.fr/",
						},
						{
							label: "Forge ID",
							href: "https://https://cri.epita.fr/",
						},
					],
				},
			],
			copyright: `<strong>man-epita</strong> © ${new Date().getFullYear()} by ValentinKhmer & al. is licensed under CC BY-NC 4.0. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: [
				"markup",
				"clike",
				"javascript",
				"bash",
				"c",
				"csharp",
				"csv",
				"git",
				"http",
				"java",
				"json",
				"latex",
				"makefile",
				"markdown",
				"matlab",
				"nix",
			],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
