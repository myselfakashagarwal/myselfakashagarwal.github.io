import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
    configuration: {
        pageTitle: "Akash Agarwal",
        enableSPA: true,
        enablePopovers: true,
        analytics: {
            provider: "plausible",
        },
        locale: "en-US",
        baseUrl: "myselfakashagarwal.github.io",
        ignorePatterns: ["private", "templates", ".obsidian"],
        defaultDateType: "created",
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: true,
            typography: {
                header: "Inter",
                body: "Inter",
                code: "JetBrains Mono",
            },
            colors: {
                lightMode: {
                    light: "#ffffff",
                    lightgray: "#f4f4f5",
                    gray: "#71717a",
                    darkgray: "#27272a",
                    dark: "#09090b",
                    secondary: "#18181b",
                    tertiary: "#a1a1aa",
                    highlight: "rgba(24, 24, 27, 0.05)",
                    textHighlight: "#fff23688",
                    h1: "#239ba7",
                    h2: "#8abb6c",
                    h3: "#e3de61",
                    h4: "#f3a26d",
                    h5: "#ff9898",
                },
                darkMode: {
                    light: "#161617",
                    lightgray: "#27272a",
                    gray: "#71717a",
                    darkgray: "#d4d4d8",
                    dark: "#fafafa",
                    secondary: "#e4e4e7",
                    tertiary: "#a1a1aa",
                    highlight: "rgba(228, 228, 231, 0.1)",
                    textHighlight: "#b3aa0288",
                    h1: "#239ba7",
                    h2: "#8abb6c",
                    h3: "#e3de61",
                    h4: "#f3a26d",
                    h5: "#ff9898",
                },
            },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "filesystem"],
            }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({
                enableInHtmlEmbed: false,
            }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({
                markdownLinkResolution: "shortest",
            }),
            Plugin.Description(),
            Plugin.Latex({
                renderEngine: "katex",
            }),
        ],
        filters: [Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.NotFoundPage(),
        ],
    },
}

export default config
