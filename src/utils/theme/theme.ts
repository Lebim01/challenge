export type Themes =
  | "theme-default"
  | "theme-green"
  | "theme-yellow"
  | "theme-unicorn"
  | "theme-dynamite";

export const getStorageTheme = (): Themes => {
  if (typeof window === "undefined") return "theme-default";
  const theme = localStorage.getItem("theme");
  if (!theme) return "theme-default";
  return theme as Themes;
};

export const setStorageTheme = (theme: Themes) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("theme", theme);
};
