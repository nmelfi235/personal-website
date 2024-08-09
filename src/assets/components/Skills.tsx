import "../styles/skills.css";
export default function Skills(): JSX.Element {
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
