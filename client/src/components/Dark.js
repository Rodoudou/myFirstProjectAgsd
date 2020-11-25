import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Dark = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
          <DarkModeToggle
          className="toggle"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
    )
}

export default Dark;
