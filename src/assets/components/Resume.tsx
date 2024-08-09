import Profile from "./Profile";
import Skills from "./Skills";
import Education from "./Education";
import "../styles/resume.css";
export default function Resume() {
  return (
    <article id="resume">
      <h1 id="myName">NICHOLAS MELFI</h1>
      <Profile />
      <Skills />
      <Education />
    </article>
  );
}
