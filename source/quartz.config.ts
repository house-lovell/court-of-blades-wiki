import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "A Court Of Blades",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel Decorative",
        body: " Crimson Text",
        code: "Overpass Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f1e8",  // Aged parchment
          lightgray: "#d6cdc4",  // Muted soft gray
          gray: "#7a6f64",  // Aged ink gray
          darkgray: "#4e4e4e",  
          dark: "#2b2b2b",  
          secondary: "#6b2e2e",  // Deep red accent
          tertiary: "#a88c6d",  // Gold-tinted secondary
          highlight: "rgba(168, 140, 109, 0.25)",  // Aged gold
          textHighlight: "#c49a0088",  // Golden glow
        },
        darkMode: {
          light: "#1b1a18",  // Aged paper in dim light
          lightgray: "#393639",
          gray: "#7a6f64",
          darkgray: "#d4c5a4",  // Warm desaturated gold
          dark: "#ebebec",
          secondary: "#b23e3e",  // Rich red
          tertiary: "#c49a6c",  // Faded gold
          highlight: "rgba(168, 140, 109, 0.25)",
          textHighlight: "#d4af3788", // Deep gold
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
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
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
