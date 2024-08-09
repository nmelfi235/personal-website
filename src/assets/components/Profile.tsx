import "../styles/profile.css";

const links = {
  gh: "https://github.com/nmelfi235",
  linkedin: "https://www.linkedin.com/in/nick-melfi/",
  twitter: "https://twitter.com/NickMelfi",
};

export default function Profile(): JSX.Element {
  return (
    <section id="profile">
      <h2 className="section-label">Profile</h2>
      <p id="profile-text">
        Computer science graduate with a{" "}
        <Keyword color="green" link={links.gh}>
          passion
        </Keyword>{" "}
        for applying new technologies.{" "}
        <Keyword color="blue">Quick learner</Keyword> and logical thinker adept
        at solving complex technical <Keyword color="red">issues</Keyword> under
        stressful circumstances. Programming hobbyist who launched and
        maintained{" "}
        <Keyword color="purple" link={links.linkedin}>
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
