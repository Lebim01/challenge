export const cssvar = (name: string, alpha = 1) => {
  if (typeof window === "undefined") return "rgb(0,0,0)";
  const computedName = getComputedStyle(
    document.documentElement
  ).getPropertyValue(name);

  const split = computedName.split(" ");
  if (split.length < 4) return "rgb(0,0,0)";

  const H = +split[1];
  const S = +split[2].replace("%", "");
  const L = +split[3].replace("%", "");

  const val = HSLToRGB(H, S, L);
  return `rgba(${val}, ${alpha})`;
};

export const HSLToRGB = (h: number, s: number, l: number) => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};
