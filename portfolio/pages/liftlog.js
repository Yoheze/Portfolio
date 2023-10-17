import React from "react";
import Image from "next/image";
import Footer from "@/components/footer.js";
import HomeButton from "@/components/homeButton.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LiftLogDemo from "@/components/projects/liftlog.js";
import styles from "@/styles/LiftLogPage.module.css";
import Plan from "@/public/liftlog-plan.png";
import Sql from "@/public/liftlog-sql.png";
import Head from "next/head";

export default function LiftLog() {
  return (
    <div className={styles.background}>
      <Head>
        <title>LiftLog Demo</title>
      </Head>
      <HomeButton />
      <div className={styles.page}>
        <h2>LiftLog: Online Exercise Logger</h2>
        <h3 style={{ fontWeight: "400" }}>
          Demo: Try dragging and dropping, does not work on mobile
        </h3>
        <DndProvider backend={HTML5Backend}>
          <LiftLogDemo />
        </DndProvider>
        <h4>Background: </h4>
        <p>
          I was assigned to work with 3 other engineers to create an app in 2
          days! We settled on creating a Workout Journaling app with the focus
          being on React Drag and Drop! We found the drawing on excalidraw
          really funny so we literally implemented it as the logo for our actual
          project. Here are some of the images of what our plan was when it came
          to executing the project
        </p>
        <Image
          src={Plan}
          className={styles.plan}
          alt="excalidraw of liftlog's plan"
        ></Image>
        <p>We also drew out our SQL database:</p>
        <Image
          src={Sql}
          alt="excalidraw of liftlog's sql database"
          className={styles.sql}
        ></Image>
        <p>
          We did get the database to render the menu of exercises to drag, but
          couldn&apos;t quite get the extensive dynamically populating form to
          work in 2 days. It was still super fun to work on with 3 other people!
        </p>
        <h4 style={{ marginTop: "20px" }}>Main features: </h4>
        <p>
          Adopted the React Drag and Drop library to devise an appealing and
          interactive approach for users to document their exercise diaries
        </p>
        <p>
          Incorporated Vite for a faster development server and to leverage
          native ES modules to request only the necessary modules during
          development
        </p>
        <h4 style={{ marginTop: "20px" }}>Tech Stack:</h4>
        <ul className={styles.tech}>
          <li>React</li>
          <li>React-Dnd</li>
          <li>Vite</li>
          <li>Node/Express</li>
          <li>PostgreSQL</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
