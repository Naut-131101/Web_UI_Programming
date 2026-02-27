import { useState } from "react";
import "./App.css";
import FeaturedWork, {
  FeaturedWork2,
  FeaturedWork3,
} from "./components/featured-works/featured-work";
import PostDetails from "./components/recent-post/postDetails";

function App() {
  // const toggleBtn = document.getElementById("nav-toggle");
  // const menu = document.getElementById("nav-menu");

  // toggleBtn.addEventListener("click", () => {
  //   const isOpen = menu.classList.toggle("active");
  //   toggleBtn.classList.toggle("is-open", isOpen);
  //   toggleBtn.setAttribute("aria-expanded", String(isOpen));
  // });
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <header className="desktop-frame">
        <section className="section-nav-bar" aria-labelledby="section-nav-bar">
          <nav className="nav-bar">
            <button
              className={`nav-toggle ${isOpen ? "is-open" : ""}`}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              id="nav-toggle"
              aria-controls="nav-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-bar-items ${isOpen ? "active" : ""}`} id="nav-menu">
              <li className="nav-bar-item">
                <a className="nav-bar-link" href="#">
                  Works
                </a>
              </li>
              <li className="nav-bar-item">
                <a className="nav-bar-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-bar-item">
                <a className="nav-bar-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="section-header" aria-label="section-header">
          <article className="hero-banner">
            <div>
              <h1>Hi, I am Mario, Creative Technologist</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="btn btn-primary">Download Resume</button>
            </div>
            <div>
              <img className="my-avatar" src="./imgs/avatar.png" alt="avatar" />
            </div>
          </article>
        </section>
      </header>
      <main className="desktop-frame">
        <section className="recent-posts" aria-labelledby="recent-posts">
          <div className="section-header">
            <div className="recent-posts-header">
              <h4>Recent posts</h4>
              <a className="recent-posts-link" href="#">
                View all
              </a>
            </div>
            <div className="recent-post">
              <PostDetails />
              <PostDetails />
            </div>
          </div>
        </section>

        <section className="featured-works">
          <div className="recent-posts-header">
            <h4>Featured works</h4>
          </div>
          <FeaturedWork />
          <hr />
          <FeaturedWork2 />
          <hr />
          <FeaturedWork3 />
          <hr />
        </section>
      </main>
      <footer className="desktop-frame">
        <section className="social-icons">
          <img src="./social-icons/fb.svg" alt="facebook" />
          <img src="./social-icons/insta.svg" alt="instagram" />
          <img src="./social-icons/Group.svg" alt="twitter" />
          <img src="./social-icons/Linkedin.svg" alt="linkedin" />
        </section>
        <p>Copyright &copy;2026 All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
