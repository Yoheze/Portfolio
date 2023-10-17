import styles from "@/styles/Achievements.module.css";

export default function Achievements() {
  return (
    <div className={styles.achievements} id="achievements">
      <div className={styles.content}>
        <h2>Achievements:</h2>
        <br></br>
        <h3>Tech Talk:</h3>
        <p>
          Featured speaker at Jeeny and Bractlet Tech Talk on the Comparison of
          Load Balancing Strategies
        </p>
        <iframe
          width="560"
          height="315"
          className={styles.talk}
          src="https://www.youtube.com/embed/ziAHMGZhWIA?si=t7OkrZmAHzZIkCXo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
