import styles from './Home.module.css';

import Hero from "../../components/Hero";
import CarouselVideo from "../../components/CarouselVideo";

export default function Home() {

  const escolas = [
    {
      nome: "Front End",
      cor: "#6BD1FF",
      showTitle: false
    },
    {
        nome: "Mobile",
        cor: "#FFBA05" ,
        showTitle: true
    },
    {
      nome: "Data Science",
      cor: "#69953B",
      showTitle: true
    },
    // {
    //   nome: "UX/UI",
    //   cor: "#6B5BE2",
    //   showTitle: true
    // },
    // {
    //   nome: "Back End",
    //   cor: "#9CD33B",
    //   showTitle: true
    // },
    // {
    //   nome: "Design Gráfico",
    //   cor: "#FF8C2A",
    //   showTitle: true
    // },
    // {
    //   nome: "Social Media",
    //   cor: "#DC6EBE",
    //   showTitle: true
    // },
    // {
    //   nome: "Marketing",
    //   cor: "#9CD33B",
    //   showTitle: true
    // }
  ]

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        {escolas.map(escola => <CarouselVideo key={escola} nome={escola.nome} cor={escola.cor} title={escola.showTitle}/>)}
      </div>
    </>
  );
}