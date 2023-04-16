import { ChangeLanguage } from "../molecules/config/ChangeLanguage";
import { ChangeTheme } from "../molecules/config/ChangeTheme";

export const Configuration = () => {
  return (
    <div className="flex gap-8 pt-2 items-center">
      <ChangeLanguage />
      <ChangeTheme />
    </div>
  );
};
