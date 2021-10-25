const sizes = {
  mobile: "640px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
};

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
