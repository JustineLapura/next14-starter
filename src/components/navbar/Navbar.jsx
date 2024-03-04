import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1>Logo</h1>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
