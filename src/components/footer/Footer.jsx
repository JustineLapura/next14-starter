import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Jahz10</div>
      <div className={styles.text}>
        Jahz10 creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
