import React from 'react'
import './App.scss'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Working from '../components/Working/Working'
import CardWithImage from '../components/Working/CardWithImage'
import TextWithImage from '../components/Working/TextWithImage'
import RisksCard from '../components/Risks/RisksCard'
import Risks from '../components/Risks/Risks'
import AboutADC from '../components/AboutADC/AboutADC'
import SocialMedia from '../components/AboutADC/SocialMedia'
import Report from '../components/AboutADC/Report'
import Footer from '../components/Footer/Footer'
import Map from '../components/Map/Map'

class App extends React.Component {
  render () {
    const cardWithImageContent = [
      { id: 0, image: 'biometric-1.svg', imgAlt: 'reconocimiento facial', imgHeight: '163', step: '1', align: 'col-lg-10 inner-card-img square-img', text: 'El reconocimiento facial funciona mediante un software alimentado por un algoritmo (una fórmula) que está entrenado para reconocer rostros e individualizar sus rasgos.'},
      { id: 1, image: 'biometric-2.svg', imgAlt: 'plantilla biométrica', imgHeight: '163', step: '2', align: 'col-lg-10 offset-lg-2 inner-card-img square-img', text: 'Una vez que se realiza el mapeo de los rasgos faciales, el software genera una plantilla con la representación matemática para ese rostro único. Esa plantilla es el dato biométrico dentro de la tecnología de reconocimiento facial.'},
      { id: 2, image: 'biometric-3.svg', imgAlt: 'contraste plantilla biométrica', imgHeight: '114', step: '3', align: 'col-lg-10 inner-card-img', text: 'Con la plantilla biométrica el rostro ya puede ser leído por una computadora y contrastado con una base de datos que previamente almacenó todo un conjunto de rostros.'},
      { id: 3, image: 'biometric-4.svg', imgAlt: 'comparación en tiempo real', imgHeight: '122', step: '4', align: 'col-lg-10 offset-lg-2 inner-card-img', text: 'El software puede llevar a cabo una comparación en tiempo real con todos los rostros almacenados en esa base de datos para determinar si una persona se encuentra registrada allí.'},
      { id: 4, image: 'biometric-5.svg', imgAlt: 'probabilidades de coincidencia', imgHeight: '161', step: '5', align: 'col-lg-10 rect-img inner-card-img', text: 'La biometría es un proceso de probabilidades, por lo que una vez que el software encuentra una potencial coincidencia, arroja un porcentaje que define qué tan probable es que corresponda a la misma persona.'}
    ].map(e => { return <CardWithImage key={e.id} image={require('../assets/img/' + e.image)} imgAlt={e.imgAlt} imgHeight={e.imgHeight} step={e.step} align={e.align} text={e.text} /> })

    const TextWithImageContent = [
      { id: 0, image: 'verification.svg', imgHeight: '158', imgAlt: 'Verificación', imgClass: 'pb-4 desk-only', class: 'col-lg-5 col-12 offset-lg-1 verification', text: 'Mediante la verificación se contrasta un dato biométrico con otro almacenado en una base de datos correspondiente exclusivamente a la persona que está siendo verificada. (1:1)', mobImage: 'verification-mob.svg', mobImgAlt: 'Verificación', mobImgClass: 'pb-4 mob-only'},
      { id: 1, image: 'recognition.svg', imgHeight: '158', imgAlt: 'Identificación', imgClass: 'w-100 pb-4', class: 'col-lg-5 col-12 recognition', text: 'La identificación, por el contrario, sucede cuando un dato biométrico es contrastado con la totalidad de las plantillas biométricas almacenadas en la base de datos (1:n). Por eso, cuando se individualiza a una persona en una multitud mediante reconocimiento facial, decimos que se realizó un proceso de identificación. Este es el caso del Sistema implementado en la Ciudad de Buenos Aires. El análisis de rostros sobre grupos de personas, en donde se procesan los datos biométricos de cada individuo para determinar si está siendo buscado por una fuerza de seguridad o en un proceso judicial, es el método más invasivo de implementación de reconocimiento facial.'}
    ].map(e => { return <TextWithImage key={e.id} image={e.image} imgHeight={e.imgHeight} imgClass={e.imgClass} class={e.class} title={e.title} imgAlt={e.imgAlt} mobImage={e.mobImage} mobImgAlt={e.mobImgAlt} mobImgClass={e.mobImgClass} text={e.text} /> })

    const RisksCardContent = [
      { id: 0, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Uso encubierto o sin consentimiento de la población.', colClass: 'col-lg-4 offset-3' },
      { id: 1, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Inversión de la carga de la prueba: todos son culpables hasta que el sistema / algoritmo diga que no lo son. Afectación a garantías del debido proceso.', colClass: 'col-lg-4 offset-3' },
      { id: 2, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Discriminación: la tecnología es imprecisa y arroja un alto porcentaje de falsos positivos contra personas de tez no blanca y mujeres (además de otras comunidades vulnerables).', colClass: 'col-lg-4 offset-3' },
      { id: 3, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Uso sin una base legal que regule específicamente el uso (caso de Argentina).', colClass: 'col-lg-4 offset-3' },
      { id: 4, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Filtraciones o hackeos a la base de datos por una pobre o nula implementación de medidas de seguridad.', colClass: 'col-lg-4 offset-3' },
      { id: 5, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Uso ubicuo, a partir de una implementación en tiempo real o utilización de fotografías o videos que hayan sido capturadas o grabados en el pasado.', colClass: 'col-lg-4 offset-3' },
      { id: 6, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Permite individualizar y realizar un seguimiento preciso de cada persona.', colClass: 'col-lg-4 offset-3' },
      { id: 7, image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Facilita la vigilancia masiva en forma automatizada: los algoritmos de reconocimiento facial deben necesariamente detectar todas las caras que ven las cámaras en donde están implementados. Por más que el nombre de una persona no esté vinculado a su rostro, el software igualmente lo estará reconociendo.', colClass: 'col-lg-4 offset-3' }
    ].map(e => { return <RisksCard key={e.id} image={e.image} imgHeight={e.imgHeight} imgWidth={e.imgWidth} imgAlt={e.imgAlt} text={e.text} colClass={e.colClass} /> })

    const socialIconsContent = [
      { id: 0, image: 'social-fb.svg', imgAlt: 'facebook icon', imgHeight: '57', url: 'https://www.facebook.com/ADCderechos/' },
      { id: 1, image: 'social-ig.svg', imgAlt: 'instagram icon', imgHeight: '57', url: 'https://www.instagram.com/ADCderechos/ ' },
      { id: 2, image: 'social-link.svg', imgAlt: 'linkedin icon', imgHeight: '57', url: 'https://www.linkedin.com/company/adcderechos/' },
      { id: 3, image: 'social-tw.svg', imgAlt: 'twitter icon', imgHeight: '57', url: 'https://twitter.com/ADCderechos' },
      { id: 4, image: 'social-yt.svg', imgAlt: 'youtube icon', imgHeight: '57', url: 'https://www.youtube.com/user/ADCderechos' }
    ].map(e => { return <SocialMedia key={e.id} image={e.image} imgHeight={e.imgHeight} imgAlt={e.imgAlt} url={e.url} /> })

    const bwSocialIconsContent = [
      { id: 0, image: 'bw-social-fb.svg', imgAlt: 'facebook icon', imgHeight: '39', url: 'https://www.facebook.com/ADCderechos/' },
      { id: 1, image: 'bw-social-ig.svg', imgAlt: 'instagram icon', imgHeight: '39', url: 'https://www.instagram.com/ADCderechos/ ' },
      { id: 2, image: 'bw-social-link.svg', imgAlt: 'linkedin icon', imgHeight: '39', url: 'https://www.linkedin.com/company/adcderechos/' },
      { id: 3, image: 'bw-social-tw.svg', imgAlt: 'twitter icon', imgHeight: '39', url: 'https://twitter.com/ADCderechos' },
      { id: 4, image: 'bw-social-yt.svg', imgAlt: 'youtube icon', imgHeight: '39', url: 'https://www.youtube.com/user/ADCderechos' }
    ].map(e => { return <SocialMedia key={e.id} image={e.image} imgHeight={e.imgHeight} imgAlt={e.imgAlt} url={e.url} /> })

    const shareIconsContent = [
      { id: 0, image: 'share-fb.svg', imgAlt: 'facebook icon', imgHeight: '40', url: 'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fconmicarano.adc.org.ar' },
      { id: 1, image: 'share-tw.svg', imgAlt: 'twitter icon', imgHeight: '40', url: 'https://twitter.com/intent/tweet/?text=Con%20mi%20cara%20no%3A%20El%20reconocimiento%20facial%20no%20pertenece%20a%20nuestro%20espacio%20p%C3%BAblico.%20Conoc%C3%A9%20m%C3%A1s%20en%20conmicarano.adc.org.ar%20y%20unite%20a%20la%20campa%C3%B1a%20%23ConMiCaraNo&url=https%3A%2F%2Fconmicarano.adc.org.ar&via=adcderechos' },
      { id: 2, image: 'share-wsp.svg', imgAlt: 'whatsapp icon', imgHeight: '40', url: 'whatsapp://send?text=Con%20mi%20cara%20no%3A%20El%20reconocimiento%20facial%20no%20pertenece%20a%20nuestro%20espacio%20p%C3%BAblico.%20Conoc%C3%A9%20m%C3%A1s%20en%20https%3A%2F%2Fconmicarano.adc.org.ar%20y%20unite%20a%20la%20campa%C3%B1a%20%23ConMiCaraNo' }
    ].map(e => { return <SocialMedia key={e.id} image={e.image} imgHeight={e.imgHeight} imgAlt={e.imgAlt} url={e.url} /> })
    
    const reportsListContent = [
      { id: 0, image: 'report-yo-digital.jpg', imgAlt: 'Tu yo digital', title: 'Tu yo digital', subtitle: 'Descubriendo las narrativas sobre identidad y biometría en América Latina', url: 'https://adc.org.ar/informes/tu-yo-digital-descubriendo-las-narrativas-sobre-identidad-y-biometria-en-america-latina/' },
      { id: 1, image: 'report-cuantificando.jpg', imgAlt: 'Cuantificando Identidades en América Latina', title: 'Cuantificando Identidades en América Latina', subtitle: 'Cómo las sociedades latinoamericanas se enfrentan a la implementación de biometría', url: 'https://adc.org.ar/informes/cuantificando-identidades-en-america-latina/' },
      { id: 2, image: 'report-la-identidad.jpg', imgAlt: 'La identidad que no podemos cambiar', title: 'La identidad que no podemos cambiar', subtitle: 'Cómo la biometría afecta nuestros derechos humanos', url: 'https://adc.org.ar/informes/la-identidad-que-no-podemos-cambiar-biometria-sibios/' },
      { id: 3, image: 'report-desafios.jpg', imgAlt: 'Desafíos de la biometría para la protección de los datos personales', title: 'Desafíos de la biometría para la protección de los datos personales', subtitle: 'Reflexiones sobre el caso SIBIOS', url: 'https://adc.org.ar/informes/desafios-la-biometria-la-proteccion-los-datos-personales/' }
    ].map(e => { return <Report key={e.id} image={e.image} imgAlt={e.imgAlt} title={e.title} subtitle={e.subtitle} url={e.url} /> })
    
    return (
      <div className='App'>
        <Header socialList={bwSocialIconsContent} />
        <Intro />
        <Working cardsList={cardWithImageContent} textWithImage={TextWithImageContent} />
        <Risks riskCardsList={RisksCardContent} />
        <Map />
        <AboutADC shareIcons={shareIconsContent} reportsList={reportsListContent} socialList={socialIconsContent} />
        <Footer />
      </div>
    )
  }
}

export default App
