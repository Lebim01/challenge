import { useCicadaContext } from "@/context/CicadaContext";
import { Themes } from "@/utils/theme/theme";

export const ChangeTheme = () => {
  return (
    <div className="flex gap-2">
      <ThemeItem theme="theme-default" color="#1A202C" />
      <ThemeItem theme="theme-green" color="#284035" />
      <ThemeItem theme="theme-yellow" color="#F2D492" />
    </div>
  );
};

const ThemeItem = ({ theme, color }: { theme: Themes; color: string }) => {
  const { theme: currentTheme, setTheme } = useCicadaContext();
  return (
    <button
      onClick={() => {
        setTheme(theme);
      }}
      className={`border border-text ${
        theme === currentTheme ? "opacity-100 border-[2px]" : "opacity-50"
      } transition-all w-4 h-4 rounded-full`}
      style={{
        backgroundColor: color,
      }}
    ></button>
  );
};
