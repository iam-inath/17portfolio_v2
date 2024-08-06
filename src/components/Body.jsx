import { x, linkedin } from '../assets'

function Body() {
  return (
    <div className="h-full min-h-screen overflow-y-auto bg-primary">
      <div className="container flex flex-row">
        <div className="flex-1 left-side half-container">
          <h1 className="text-5xl font-bold text-white">Nathan Katshi</h1>
          <h4 className="my-6 text-xl font-bold text-white">
            Front End Engineer
          </h4>
          <p className="">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <div className="my-20 menu">
            <ul>
              <li className="my-4 text-xs font-semibold tracking-widest hover:text-white">
                <a href="#">______ABOUT</a>
              </li>
              <li className="my-4 text-xs font-semibold tracking-widest">
                ______EXPERIENCE
              </li>
              <li className="my-4 text-xs font-semibold tracking-widest">
                ______PROJECTS
              </li>
            </ul>
          </div>

          <ul className="flex gap-6">
            <li>
              <a href="#" className="opacity-50 bg-slate-gray">
                <img src={linkedin} className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">GIT</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 right-side half-container">
          <p className="">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio.
            <br />
            <br /> My main focus these days is building accessible user
            interfaces for our customers at Klaviyo. I most enjoy building
            software in the sweet spot where design and engineering meet —
            things that look good but are also built well under the hood. In my
            free time, I've also released an online video course that covers
            everything you need to know to build a web app with the Spotify API.
            <br />
            <br />
            When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seedsKorok seeds.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body
