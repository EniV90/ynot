import tiny2 from '../assets/tiny2.png'
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
const Tokenomics = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="tokenomics">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div 
         variants={fadeIn("right", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount: 0.7}}
        
        className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Tokenomics
          </h3>
        </motion.div>
        {/* cards */}
        <motion.div 
         variants={fadeIn("up", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount: 0.7}}
        className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-10 gap-8 cursor-pointer">
            <div className="bg-white rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
              <div className="">
                <img src={tiny2} alt="" style={{ height: "200px" }} />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Supply
                </h5>
              </div>
            </div>
            <div className="bg-white rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 md:mt-16">
              <div className="">
                <img src={tiny2} alt="" style={{ height: "200px" }} />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Supply
                </h5>
              </div>
            </div>
            <div className="bg-white rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
              <div className="">
                <img src={tiny2} alt="" style={{ height: "200px" }} />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Supply
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tokenomics;
