import { useCicadaContext } from "@/context/CicadaContext";
import { Themes } from "@/utils/theme/theme";

export const ChangeTheme = () => {
  return (
    <div>
      <ThemeItem theme="theme-default" label="Default" />
      <ThemeItem theme="theme-green" label="Green" />
      <ThemeItem theme="theme-yellow" label="Yellow" />
    </div>
  );
};

const ThemeItem = ({ theme, label }: { theme: Themes; label: string }) => {
  const { theme: currentTheme, setTheme } = useCicadaContext();
  return (
    <button
      onClick={() => {
        setTheme(theme);
      }}
      className={`${
        theme === currentTheme ? "opacity-100" : "opacity-50"
      } transition-opacity`}
    >
      {label}
    </button>
  );
};
