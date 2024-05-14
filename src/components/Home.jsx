/* eslint-disable react/no-unescaped-entities */
import ynot from "../assets/ynot.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <div className="gradientBg round-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={ynot} alt="" className="lg:h-[600px] w-[800px]" />
          </motion.div>
          {/* banner */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5"
          >
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              We know what you're thinking... YNOT? Well, why not?!{" "}
            </h2>
            <div className="space-x-5 space-y-4">
              <a
                href="https://t.me/whynotofficialton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnPrimary text-2xl">Telegram</button>
              </a>
              <a
                href="https://twitter.com/WhyNotOnTon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnPrimary text-2xl">Twitter</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
