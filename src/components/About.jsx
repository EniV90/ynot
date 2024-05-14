import tiny2 from "../assets/tiny2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={tiny2} alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            NOT Token is more than just a meme it is a movement. Join us on this
            interstellar journey to the moon and beyond. 🚀
          </h2>
         
          <a
            href="https://tonviewer.com/EQBG4Okk5rVI9pVWRMcRwXIZD_wvCy4o7C1SCc8hsSEIQlEG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btnPrimary text-2xl">Contract</button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
