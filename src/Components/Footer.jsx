import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  const styles = {
    text: "font-regular text-xs text-gray-700 tracking-wide leading-normal",
    icon: "fill-current cursor-pointer",
  };

  return (
      <div className={styles.text + "mx-6 pt-3 pb-4"}>
        <p className="flex flex-col justify-center pt-4 text-center border-t border-gray-200">
          2022 - Tienda-React -
          <span>
            Desarrollado con <span className="heart"> 💜 </span> por Jimena G.
            Cambronero.
          </span>
        </p>

        <div className="flex flex-row items-center justify-center pt-1 gap-x-2">
          <a
            href="https://github.com/JimenaCambronero"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/jimenacambronero/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
  );
};
export default Footer;
