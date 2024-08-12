import Image from "next/image";
import styles from "./page.module.css";
import Box from "@/components/Box/Box";

export default function Home() {
  return (
    <main className={styles.main}>
      {" "}
      <Box>This is a simple box component!</Box>
    </main>
  );
}
