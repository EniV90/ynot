import { Carousel } from "flowbite-react"
import React from "react"

const Home = () => {
  return (
    <div className="bg-natural-silver">
      <div className="px-4 lg:px-14 max-w-screen 2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
            <div className="text-center my-8">
        <h2 className="text-4xl text-natural-blue font-semibold mb-2">
          Socials
        </h2>

        <div className="my-12 flex flex-wrap justify-around items-center gap-8">
          <a
            href="https://t.me/whynotofficialton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Telegram</button>
          </a>
          <a
            href="https://twitter.com/WhyNotOnTon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Twitter</button>
          </a>
          <a
            href="https://tonviewer.com/EQBG4Okk5rVI9pVWRMcRwXIZD_wvCy4o7C1SCc8hsSEIQlEG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Contract</button>
          </a>
        </div>
      </div>
            </div>
            <div>
              <img src={"/assets/ynot.png"} alt="" style={{width:'50rem'}}/>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
