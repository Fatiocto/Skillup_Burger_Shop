// Write all the code here

import React from "react";
import { motion } from "framer-motion";
import Founder from "../about/Founder";
import Menu from "../Menu/Menu";
import Header from "../../components/header/Header";
import DropdownMenu from "../../components/header/DropdownMenu";
import Footer from "../../components/footer/Footer";
import "../../styles/home.scss";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="home">
        <div>
          <Header />
          <DropdownMenu />
          <Footer />

          <motion.h1 {...options}>Burger Shop</motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 0.2,
            }}
          >
            Prennez le temps de vous offrir un savoureux burger.
          </motion.p>
        </div>
        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          Explore Menu
        </motion.a>
      </section>
      <Menu />
      <Founder />
    </>
  );
};

export default Home;
