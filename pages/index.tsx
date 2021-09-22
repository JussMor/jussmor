/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Layout from '../components/Layout'
import { social } from "../utils/Social";
import  styles  from  "../styles/Layout.module.css"
import Head from 'next/head'

export default function Home() {

  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="José Moreira"/>
        <meta name="description" content="Amante de la danza, mi perro, la ciencia, los hechos curiosos y aspirante a astronauta imaginario de SpaceX 
        creo videos para inspirar a la gente."/>
        <meta name="keywords" content="jussmor, storyteller, visionario, content creator, speaker, ciencia"/>
        <title>Jussmor</title>
      </Head>
      <Layout>
      <div style={{ padding: '50px 50px 50px 50px' }}>
        <h1  className={styles.Ititle}> Hola soy Jussmor</h1>
        <div className={styles.ItitleText}>
          <p>Soy un recién egresado de ingeniería mecánica amante de la danza, mi perro,
            la ciencia, los hechos curiosos y aspirante a astronauta imaginario de SpaceX
          </p>
        <p>Decidí iniciar este proyecto para unirme a la ola de personas que incentivan 
          e inspiran a crear un mundo mejor como CdeCiencia, Quatum Fracture, Date un Voltio,
          Xyla Foxlin, Verisatium, Vsauce, etc. 
        </p>
        <p>
        Compartiré contenido variado con la finalidad de que su mente explote y juntos aquí
        formar la mejor comunidad para compartir datos interesantes o moriremos en el intento 
        </p>
        <p>
        Así que no seas tímido y sígueme en redes sociales o si deseas contactarme
        no dudes en dejar tu mensaje o enviar un correo electrónico
        </p>
        </div>
        <div><h1 className={styles.Ititle}>Redes Sociales</h1></div>
        <div className={styles.IBottom}>
          <button className={ styles.IgBottom}> <a style={{ color: 'beige', textDecoration:'none' }} href={social.Instagram}> Instagram </a> </button>
          <button className={ styles.TkBottom}> <a style={{ color: 'beige' , textDecoration:'none'}} href={social.Tiktok}> Tiktok </a> </button>
          <button className={ styles.YtBottom}> <a style={{ color: 'beige', textDecoration:'none' }} href={social.Youtube}> Youtube </a> </button>
          <button className={ styles.CoBottom}> <a style={{ color: 'beige', textDecoration:'none' }} href="mailto:jussmor@outlook.es"> Correo </a> </button>
        </div>
      </div>
      </Layout>
    </div>
  )
}