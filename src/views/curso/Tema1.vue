<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Teorías y enfoques para la resolución pacífica de conflictos'" :subTitulo="'1. Teorías y enfoques para la resolución pacífica de conflictos'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    p(data-aos="fade-right").mb-lg-5 La capacidad de resolver confrontaciones es una competencia altamente valorada en el ámbito profesional. Las teorías sobre los problemas de relación, nos ofrecen una perspectiva para entender sus causas y niveles de intensidad. En entornos educativos y laborales, como plantea González Rey (2016), “el conflicto, cuando es gestionado de manera adecuada, puede llevar a cambios transformativos” (p. 22). 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Principales teorías sobre resolución de conflictos    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-left") El estudio de los conflictos, ha sido una constante en las ciencias sociales pues entender sus causas y dinámicas, es crucial para gestionar las relaciones humanas en diversos contextos. Desde esta perspectiva, la Unidad 2 explora las teorías clásicas que han definido el análisis de los enfrentamientos, proporcionando un marco para interpretar cómo y por qué surgen tensiones en las interacciones. Estas teorías, propuestas por autores como Karl Marx, Max Weber, Lewis Coser y Sun Tzu, ofrecen explicaciones sobre el origen de las disputas en ámbitos sociales, económicos y políticos, revelando que las diferencias no siempre deben ser vistas como elementos negativos, sino como oportunidades para el cambio y el desarrollo.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              h5 Karl Marx
              p Se enfocó en la teoría de la escasez de recursos, argumentando que los conflictos son inevitables en una sociedad dividida en clases, donde los individuos y grupos luchan por el control de los recursos materiales. Según Marx, "la historia de todas las sociedades hasta la fecha es la historia de la lucha de clases" (Marx, 1867, p. 10), lo cual implica que la competencia por los medios de producción crea tensiones estructurales entre las clases, generando un motor de mejora en la sociedad. Esta perspectiva permite entender cómo la competencia por recursos limitados puede llevar a confrontaciones en contextos tan diversos como el laboral o el educativo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              h5 Max Weber
              p Contribuyó al análisis desde la teoría del poder, sosteniendo que las tensiones surgen cuando distintos grupos o individuos buscan imponer su autoridad o controlar a otros. Para Weber, el conflicto es una manifestación de la lucha por el poder y la influencia en la sociedad, donde “el poder se ejerce incluso contra la resistencia” (Weber, 1922, p. 45). Este enfoque permite interpretar tensiones en cualquier ámbito donde el control y la autoridad son factores centrales, como en la competencia por liderazgo en una empresa o la pugna entre facciones políticas.
          
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7
              h5 Lewis Coser
              p Aporta la teoría funcional, proponiendo que, lejos de ser únicamente destructivo, el choque cumple un rol necesario al expresar tensiones subyacentes y ajustes permitidos en la estructura social. Coser sostiene que los conflictos pueden fortalecer las relaciones al proporcionar una vía para resolver diferencias y mejorar la cohesión del grupo (Coser, 1956). Este enfoque invita a verlo no solo como una fuente de tensión, sino como un proceso que, si se maneja adecuadamente, puede contribuir al crecimiento interpersonal y grupal.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7
              h5 Sun Tzu
              p Sun Tzu, en su obra "El Arte de la Guerra", introduce una visión estratégica sobre los conflictos. Aunque su obra se centra en el ámbito militar, sus principios sobre la importancia de conocer al “oponente” y el contexto que se aplican ampliamente en el manejo de situaciones conflictivas en entornos actuales (Sun Tzu, siglo V aC). Sus ideas refuerzan la noción que la estrategia y la preparación, son elementos claves para gestionar de forma efectiva, cualquier confrontación.

    p(data-aos="fade-right").mb-lg-5 En conjunto, estas teorías ofrecen una comprensión profunda y diversa sobre el conflicto, aportando herramientas para analizar y abordar las tensiones en diferentes ámbitos
 
    .bg-full-width.bg-color-2
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Teorías resolución de conflictos
            p.mb-4(data-aos="fade-right") El análisis de las teorías de conflicto, como la teoría de la escasez de recursos de Karl Marx, la teoría del poder de Max Weber, la teoría funcionalista de Lewis Coser y la teoría psicológica, proporciona un marco integral para comprender las tensiones sociales y económicas. Estas teorías permiten explorar desde la competencia por recursos limitados y las dinámicas de poder, hasta los aspectos funcionales y psicológicos de los conflictos, destacando cómo las interacciones entre clases, grupos e individuos pueden llevar a cambios significativos en la sociedad. A continuación, en el PDF Teorías resolución de conflictos, se profundizará en cada una de estas teorías, sus implicaciones y estrategias de resolución de conflictos para fomentar un entendimiento más amplio de las tensiones y su manejo.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Teorías resolución de conflictos.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
 
 
    .bg-full-width.border-top.color-primario
      .px-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/55533" target="_blank" rel="noopener noreferrer") Guedad M (2005) Resolución de conflictos en el S. XXI. Trama editorial.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/dGPjazEQH1c?si=WetstGydHFb4oseM" target="_blank" rel="noopener noreferrer") FPIE UV. (24 de noviembre de 2017) 1.1 Introducción y teoría general del conflicto. (archivo de video) Youtube
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog-resolucion-de-conflictos-uniminuto.webnode.com.co/" target="_blank" rel="noopener noreferrer") Carrion, D. (2024) Resolución de conflictos. Blog.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
