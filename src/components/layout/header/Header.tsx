import React, { FC, useState } from "react";
import { Search } from "@mui/icons-material";
import styles from "./Header.module.css";
import logoimg from "./imagelogo.png";

const Header: FC = () => {
  const [isSearchActive, setisSearchActive] = useState(false);

  const handleInputClick = () => {
    setisSearchActive(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setisSearchActive(false);
    }, 100);
  };

  return (
    <header className={styles.header}>
      <div className={styles["image-wrapper"]}>
        <img src={logoimg} alt="" />
      </div>
      <div className={styles.wrapper}>
        {!isSearchActive && <Search />}
        <input
          type="text"
          placeholder="Search"
          onClick={handleInputClick}
          onBlur={handleInputBlur}
        />
      </div>
    </header>
  );
};

export default Header;