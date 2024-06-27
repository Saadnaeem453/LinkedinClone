"use client"
import { useTheme } from "@/context/ThemeContext"
import { ReactNode } from "react";


const ThemeToggle: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { theme, toggleTheme } = useTheme();
    console.log("children", children);

    return (
        <div className={theme} >
            <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-black min-h-screen">

                {children}
            </div>

        </div>
    )
}
export default ThemeToggle;

