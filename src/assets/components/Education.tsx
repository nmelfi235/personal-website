import "../styles/education.css";
import wcsu from "../images/wcsu.png";
export default function Education(): JSX.Element {
  return (
    <section id="education">
      <h2 className="section-label">Education</h2>
      <Info
        school="Western Connecticut State University"
        degree="Bachelor of Science in Computer Science"
        graduationDate="December 2022"
        gpa="3.40 / 4.00"
        img={wcsu}
      />
    </section>
  );
}

interface InfoProps {
  school: JSX.Element | string;
  degree: JSX.Element | string;
  graduationDate: JSX.Element | string;
  gpa: JSX.Element | string;
  img: string;
}

function Info(props: InfoProps): JSX.Element {
  return (
    <div className="education-block">
      <ul className="education-description">
        <li className="school-name">{props.school}</li>
        <li className="degree-name">{props.degree}</li>
        <li className="graduation-date">{props.graduationDate}</li>
        <li className="gpa">{props.gpa}</li>
      </ul>
      <img className="education-image" src={props.img} alt="school logo" />
    </div>
  );
}
