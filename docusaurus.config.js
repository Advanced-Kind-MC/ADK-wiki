module.exports = {
  title: 'Wiki | Advanced-Kind',
  tagline: 'The tagline of my site',
  url: 'https://test.advanced-kind.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Advanced-Kind', // Usually your GitHub org/user name.
  projectName: 'Advanced-Kind Wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Wiki Advanced-Kind',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    }, 
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
     },
    },      
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Recommended Reads',
          items: [
            {
              label: 'Style Guide',
              to: '',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Webpage',
              href: 'https://web.advanced-kind.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.advanced-kind.com',
            },
          ],
        },
        {
          title: 'Other ADK Sites',
          items: [
            {
              label: 'Donations',
              href: 'https://store.advanced-kind.com/',
            },
            {
              label: 'Map',
              href: 'http://map.advanced-kind.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Advanced-Kind. Built with love.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "slug: /",
          routeBasePath: "/", // Set this value to '/'.
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Advanced-Kind-MC/ADK-wiki",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
