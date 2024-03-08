import "./Projects.css";
import studyTable from "./studyTable.png";
import weCode from "./weCOdeIMG.png";
import jodpedia from "./jobpediaImg.png";
import snapdeal from "./snapdeal-scraperIMG.png";
import search from "./search.png";
import portfolio from "./portfolio.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="ProjectsTitle" id="Projects">
        MY PROJECTS
      </div>
      <div className="ProjectsGrid">
        <a href="https://www.github.com/jeet59/wecode" className="Project">
          <img src={weCode} alt="WeCode" className="ProjectImage" />
          <div className="ProjectInfo">
            <h3 className="ProjectTitle">WeCode</h3>
            <p className="ProjectCaption">
              A Social Media App based around Open Source and Competitive
              Programming to encourage collaboration and innovation among
              students of a college using NextJS GraphQL and Postgres
            </p>
          </div>
        </a>
        <a href="https://www.github.com/jeet59/study-table" className="Project">
          <img src={studyTable} alt="Study-Table" className="ProjectImage" />
          <div className="ProjectInfo">
            <h3 className="ProjectTitle">Study-Table</h3>
            <p className="ProjectCaption">
              An E-learning website showcasing JWT implementation and CRUD
              operations in MERN as well as designing/styling{" "}
            </p>
          </div>
        </a>
        <a
          href="https://www.github.com/jeet59/snapdeal-scraper"
          className="Project"
        >
          <img src={snapdeal} alt="Snapdeal scraper" className="ProjectImage" />
          <div className="ProjectInfo">
            <h3 className="ProjectTitle">Snapdeal scraper</h3>
            <p className="ProjectCaption">
              Web Scraper to find the lowest priced seller of a book on snapdeal
              and retrieve all its info using Puppeteer{" "}
            </p>
          </div>
        </a>
        <a href="https://www.github.com/jeet59/jobpedia" className="Project">
          <img src={jodpedia} alt="Jobpedia" className="ProjectImage" />
          <div className="ProjectInfo">
            <h3 className="ProjectTitle">Jobpedia</h3>
            <p className="ProjectCaption">
              A demo Job Portal website to showcase CRUD implementation in
              Django and Frontend Designing/Styling using React
            </p>
          </div>
        </a>
        <a href="https://www.github.com/jeet59" className="Project">
          <img src={portfolio} alt="Portfolio" className="ProjectImage" />
          <div className="ProjectInfo">
            <h3 className="ProjectTitle">Portfolio</h3>
            <p className="ProjectCaption">This very site!</p>
          </div>
        </a>
        <a href="https://www.github.com/jeet59/search" className="Project">
          <img src={search} alt="Search" className="ProjectImage" />
          <div className="ProjectInfo">
            <h3 className="ProjectTitle">Search</h3>
            <p className="ProjectCaption">
              A basic HTMl project
              <h5>Assignment for CS50 by HarvardX</h5>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
