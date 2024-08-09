import "../styles/resume.css";
import wcsu from "../images/wcsu.png";
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

function Profile(): JSX.Element {
  return (
    <section id="profile">
      <h2 className="section-label">Profile</h2>
      <p id="profile-text">
        Computer science graduate with a{" "}
        <Keyword color="green" link="https://www.linkedin.com/in/nick-melfi/">
          passion
        </Keyword>{" "}
        for applying new technologies.{" "}
        <Keyword color="blue">Quick learner</Keyword> and logical thinker adept
        at solving complex technical <Keyword color="red">issues</Keyword> under
        stressful circumstances. Programming hobbyist who launched and
        maintained{" "}
        <Keyword color="purple" link="https://github.com/nmelfi235">
          personal cloud
        </Keyword>{" "}
        applications using{" "}
        <Keyword color="orange" link="https://oracle.com">
          Oracle Cloud
        </Keyword>{" "}
        and{" "}
        <Keyword color="green" link="https://aws.amazon.com">
          {" "}
          AWS Services.
        </Keyword>
      </p>
    </section>
  );
}

interface KeywordProps {
  children: JSX.Element | string | JSX.Element[] | string[];
  color: string;
  link?: string;
}

function Keyword(props: KeywordProps): JSX.Element {
  return (
    <span className="profile-keyword" style={{ color: props.color || "black" }}>
      <a href={props.link}>{props.children}</a>
    </span>
  );
}

function Skills(): JSX.Element {
  return (
    <section id="skills">
      <h2 className="section-label">My skills include:</h2>
      <ul className="skill-list">
        <Skill icon="fa-solid fa-cloud" color="orange">
          Oracle Cloud
        </Skill>
        <Skill icon="fab fa-aws" color="blue">
          AWS
        </Skill>
        <Skill icon="fab fa-git-alt" color="black">
          Git
        </Skill>
        <Skill icon="fab fa-linux" color="black">
          Linux
        </Skill>
        <Skill icon="fab fa-html5" color="orange">
          HTML
        </Skill>
        <Skill icon="fab fa-css3-alt" color="blue">
          CSS
        </Skill>
        <Skill icon="fas fa-database" color="blue">
          SQL
        </Skill>
        <Skill icon="fab fa-cplusplus" color="red">
          C++
        </Skill>
        <Skill icon="fab fa-dotnet" color="purple">
          C#
        </Skill>
        <Skill icon="fab fa-java" color="red">
          Java
        </Skill>
        <Skill icon="fab fa-python" color="yellow">
          Python
        </Skill>
        <Skill icon="fab fa-react" color="blue">
          React
        </Skill>
        <Skill icon="fab fa-node-js" color="green">
          Node.js
        </Skill>
        <Skill icon="fas fa-typescript" color="blue">
          TypeScript
        </Skill>
      </ul>
    </section>
  );
}

interface SkillProps {
  children: JSX.Element | JSX.Element[] | string;
  icon?: string;
  color?: string;
}

function Skill(props: SkillProps): JSX.Element {
  return (
    <li className="skill">
      <i
        className={props.icon}
        style={{ color: props.color || "black", marginRight: "10px" }}
      ></i>{" "}
      <span className="skill-name">{props.children}</span>
    </li>
  );
}

function Education(): JSX.Element {
  return (
    <section id="education">
      <h2 className="section-label">Education</h2>
      <div className="education-block">
        <ul className="education-description">
          <li>
            <strong>Western Connecticut State University</strong>
          </li>
          <li>Bachelor of Science in Computer Science</li>
          <li>Graduation Date: December 2022</li>
          <li>GPA 3.40 / 4.00</li>
        </ul>
        <img id="education-image" src={wcsu} alt="WCSU" />
      </div>
    </section>
  );
}
