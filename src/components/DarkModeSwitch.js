"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ))}
    </>
  );
};
export default DarkModeSwitch;
