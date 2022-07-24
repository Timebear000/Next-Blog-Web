import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Format from "../layout/format";
import styles from "../styles/Home.module.css";

// component
import Section1 from "../components/Section1";

export default function Home() {
  return (
    <Format>
      <Section1></Section1>
    </Format>
  );
}
