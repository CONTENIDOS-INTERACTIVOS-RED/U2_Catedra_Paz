<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Teorías y enfoques para la resolución pacífica de conflictos'" :subTitulo="'2. Enfoques de negociación, mediación y arbitraje'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    p(data-aos="fade-right").mb-lg-5 La capacidad de resolver confrontaciones es una competencia altamente valorada en el ámbito profesional. Las teorías sobre los problemas de relación, nos ofrecen una perspectiva para entender sus causas y niveles de intensidad. En entornos educativos y laborales, como plantea González Rey (2016), “el conflicto, cuando es gestionado de manera adecuada, puede llevar a cambios transformativos” (p. 22). 


    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/1.png", alt="")
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Negociación")
            p Como proceso de diálogo directo entre las partes, permite una solución cooperativa donde ambas mantienen el control de las decisiones. En entornos laborales, familiares y comerciales, esta práctica contribuye a la creación de acuerdos “ganar-ganar” mediante el intercambio de concesiones y el entendimiento mutuo (La Rosa & Rivas, 2017; UNITEC, 2016).

          .div(titulo="Mediación")
            p Introduce la intervención de un tercero neutral que facilita la comunicación y ayuda a las partes a identificar sus necesidades y explorar opciones de solución. Este enfoque es especialmente útil en situaciones donde la relación entre las partes es  fundamental y se busca preservar la cooperación a largo plazo, como en conflictos familiares o de vecindario. Al fomentar un ambiente de respeto y empatía, la mediación permite una resolución menos adversaria. (PNUD, 2018; Weber, 1922).

          .div(titulo="Arbitraje")
            p Es un proceso formal y estructurado donde un árbitro toma una decisión vinculante para las partes. Este enfoque es frecuente en disputas contractuales o laborales, donde la naturaleza del conflicto requiere una solución definitiva. A diferencia de la negociación y la mediación, el arbitraje garantiza un cierre al conflicto, proporcionando una resolución rápida y clara, aunque con menor flexibilidad para las partes (Mirabal, 2003).


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0 Cada uno de estos enfoques ofrece una estructura adaptable a distintos tipos de conflicto y niveles de formalidad, permitiendo a las partes optar por el método más adecuado, según sus necesidades y la naturaleza del desacuerdo. Conozcamos más sobre cada uno de ellos.



    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Negociación    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") La negociación es un proceso de resolución de conflictos, en el cual las partes en desacuerdo buscan alcanzar un acuerdo a través del diálogo directo y la cooperación. Es uno de los métodos más utilizados en la resolución pacífica de tensiones, puesto que permite a las partes involucradas, mantener control sobre el proceso y llegar a soluciones que satisfacen los intereses de todos, evitando, en lo posible, la confrontación. Este enfoque resulta especialmente útil en contextos donde se valora la relación a largo plazo, como en el ámbito laboral, comercial o familiar. La negociación puede ser formal o informal, estructurada o flexible, dependiendo del contexto y los intereses de las partes (La Rosa & Rivas, 2017; UNITEC, 2016).
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")


    h3(data-aos="fade-right") Modelos de negociación

    p(data-aos="fade-left") Existen diferentes modelos dentro de los procesos colaborativos, que se adaptan a las características del conflicto y a las expectativas de las partes. Dos de los modelos principales son: 

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Modelo distributivo" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-lg-7.order-2
            h4 Modelo distributivo
            p También conocido como método “de suma cero”, este modelo considera que el recurso en juego es limitado, y cada parte intenta maximizar su propio beneficio. Este enfoque es común en contextos donde se negocia el precio o la división de recursos escasos, como en el mercado de ventas. Aunque efectivo para soluciones de corto plazo, el modelo distributivo no siempre promueve relaciones duraderas, pues puede dejar a una de las partes sintiéndose desfavorecida (Mirabal, 2003).
        
          .col-lg-5.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/tab-1.png', alt='').mx-auto.mb-4.mb-lg-0
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Modelo integrativo" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-lg-7.order-2
            h4 Modelo integrativo
            p Llamado también modelo “ganar-ganar”, este enfoque busca encontrar soluciones que maximicen el beneficio para todas las partes. En lugar de dividir recursos, el proceso integrativo se centra en identificar intereses comunes y opciones creativas que benefician a ambos lados. Esto es útil en situaciones de colaboración a largo plazo, como en relaciones laborales o en contextos familiares, donde el objetivo es generar confianza y reconocimiento mutuo (PNUD, 2018; González Rey, 2016).
        
          .col-lg-5.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/tab-2.png', alt='')



    h3(data-aos="fade-right") Estrategias de negociación

    p(data-aos="fade-left") Existen diversas estrategias para optimizar el proceso de resolución colaborativa y facilitar un acuerdo efectivo entre  las partes. Algunas de ellas incluyen (La Rosa & Rivas, 2017):

    .bg-full-width.bg-color-3.mb-5
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-10
            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/infografia/info1.png', alt='', style="max-width: 705px;").mx-auto

              .bg-color-1.p-3(x="64%" y="9%" numero="+")
                h5 Preparación y establecimiento de objetivos
                p Antes de iniciar el proceso, es importante que cada participante identifique sus intereses, límites y posibles concesiones. Esto facilita la claridad en la toma de decisiones y previene respuestas impulsivas. Además, anticipar posibles objeciones, ayuda a mantener una postura proactiva durante el proceso.

              .bg-color-1.p-3(x="39%" y="29%" numero="+")
                h5 Escucha activa y empatía
                p Comprender las necesidades de la otra parte es fundamental para reducir barreras de comunicación y construir un ambiente de confianza. La empatía ayuda a identificar los intereses comunes y a crear soluciones que benefician a ambas partes, una técnica especialmente efectiva en los procesos colaborativos que buscan beneficios mutuos (Weber, 1922; UNITEC, 2016).

              .bg-color-1.p-3(x="64%" y="50%" numero="+")
                h5 Comunicación asertiva
                p Expresar necesidades y expectativas de forma clara y respetuosa, es esencial para evitar malentendidos y tensiones innecesarias. La comunicación asertiva permite a las partes presentar sus propuestas sin que se sientan atacadas, creando un entorno que promueve la colaboración.

              .bg-color-1.p-3(x="39%" y="71%" numero="+")
                h5 Intercambio de concesiones
                p En muchos procesos de resolución, es necesario que ambas partes ofrezcan concesiones para facilitar el avance del diálogo. Este intercambio de concesiones no solo ayuda a crear un ambiente de reciprocidad, sino que también permite alcanzar un punto medio que sea satisfactorio para ambos lados.

              .bg-color-1.p-3(x="64%" y="91%" numero="+")
                h5 Enfoque en intereses comunes
                p Centrar la resolución en los intereses, en lugar de posiciones específicas, facilita el proceso integrativo. Las posiciones representan demandas puntuales, mientras que los intereses reflejan las necesidades que subyacen a esas demandas. En un conflicto laboral, por ejemplo, un empleado podría estar solicitando un aumento de salario como puesto, mientras que su interés real es una mayor seguridad financiera. Al enfocarse en los intereses, es posible diseñar soluciones que respondan a necesidades reales y no solo a las demandas inmediatas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") El proceso de diálogo colaborativo, ofrece numerosos beneficios para la resolución de tensiones, al permitir que las partes mantengan el control sobre las decisiones y, a su vez, fomenten la confianza y el compromiso con el acuerdo alcanzado. Esto contribuye a que el resultado sea respetado e implementado con mayor probabilidad, dado que las partes involucradas se sienten valoradas en el proceso de toma de decisiones.

        p(data-aos="fade-left") Otro beneficio es la creación de soluciones personalizadas y adaptadas a las particularidades del conflicto. A diferencia de enfoques más rígidos, como el arbitraje, el proceso de resolución colaborativa permite a las partes explorar soluciones innovadoras, adaptadas a sus necesidades y a la naturaleza de su relación. 
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p(data-aos="fade-left") Esto resulta especialmente útil en situaciones complejas o con múltiples actores, donde una solución estandarizada podría no atender adecuadamente los intereses de todas las partes. Además, al ser un proceso basado en la cooperación, el diálogo directo y colaborativo, promueve relaciones duraderas y positivas, entre las partes. 

        p(data-aos="fade-left") Los participantes tienden a desarrollar habilidades de comunicación y empatía que no solo contribuyen a resolver el conflicto actual, sino que también fortalecen la capacidad para enfrentar y resolver futuros desacuerdos de forma armoniosa y constructiva (PNUD, 2018; Mirabal, 2003). 
      .col-lg-5.order-1
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")


    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El proceso de diálogo colaborativo, también conocido como negociación, representa un enfoque flexible y constructivo, para resolver tensiones de manera que satisfaga los intereses y necesidades de cada parte. A través de modelos como el distributivo y el integrativo, y mediante estrategias de preparación, escucha activa, comunicación y enfoque en intereses, las partes logran resolver sus desacuerdos sin recurrir a la confrontación. Este enfoque permite, asimismo, el fortalecimiento de las relaciones a largo plazo y el desarrollo de habilidades valiosas para la resolución pacífica de conflictos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Mediación

    p(data-aos="fade-left") La mediación es un enfoque estructurado para la resolución de conflictos, en el cual un tercero neutral facilita el diálogo entre las partes, promoviendo el entendimiento y la construcción de acuerdos sin imponer una solución. Este proceso es particularmente útil en situaciones donde las partes desean mantener una relación positiva y colaborativa a largo plazo, como en conflictos familiares, laborales o comunitarios (PNUD, 2018). A diferencia de otros métodos, como la negociación directa, la mediación ofrece un ambiente controlado y seguro, donde cada parte puede expresar sus preocupaciones y expectativas de manera respetuosa, guiada por un facilitador imparcial (La Rosa & Rivas, 2017).


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-color-5.px-4.py-3.mb-2
          .row.align-items-start
            .col-lg-auto
              img(src='@/assets/bullets/icon-1.svg', style="max-width: 20px")
            .col-lg
              p.mb-0 Una de las características esenciales de la mediación, es la neutralidad del facilitador, quien debe mantener una posición imparcial para crear un ambiente de confianza y respeto. 
        .bg-color-5.px-4.py-3.mb-2
          .row.align-items-start
            .col-lg-auto
              img(src='@/assets/bullets/icon-1.svg', style="max-width: 20px")
            .col-lg
              p.mb-0 La función principal de este intermediario no es resolver el conflicto, sino facilitar la comunicación y guiar el proceso, asegurándo que todas las voces sean escuchadas y que el diálogo fluya sin confrontaciones.
        .bg-color-5.px-4.py-3.mb-2
          .row.align-items-start
            .col-lg-auto
              img(src='@/assets/bullets/icon-1.svg', style="max-width: 20px")
            .col-lg
              p.mb-0 Esta neutralidad ayuda a las partes a sentir que sus perspectivas serán consideradas sin favoritismos, lo cual es fundamental para lograr una resolución satisfactoria (González Rey, 2016).
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es importante la voluntariedad del proceso. La mediación requiere que ambas partes participen de manera libre y estén dispuestas a comprometerse en la búsqueda de una solución conjunta. Esta disposición mutua, es clave para que el proceso sea efectivo, debido a que la imposición de soluciones no es compatible con la esencia colaborativa de la mediación. La voluntariedad asegura que las soluciones alcanzadas sean aceptadas de manera genuina y que las partes se sientan comprometidas a respetar el acuerdo (UNITEC, 2016).


    h3(data-aos="fade-right") Modelos de mediación

    p(data-aos="fade-left") Existen diversos modelos que se adaptan a las características y necesidades de cada situación: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/slider-1.png")
            .col-lg-7
              h5 Mediación facilitadora
              p Este modelo es el más común y se enfoca en mejorar la comunicación entre las partes. El facilitador promueve un diálogo constructivo, ayudando a las partes a identificar sus intereses y explorar opciones de solución, que les resulten satisfactorias. La mediación facilitadora es especialmente efectiva en conflictos donde las relaciones personales son relevantes, como en disputas familiares o comunitarias, dado que el objetivo principal es restaurar la comunicación y fortalecer el vínculo entre las partes (Weber, 1922; Mirabal, 2003).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/slider-2.png")
            .col-lg-7
              h5 Mediación evaluativa
              p En este modelo, el facilitador desempeña un rol más activo, ofreciendo su opinión o sugerencias, sobre el conflicto. Esta modalidad es útil en situaciones donde se requieren conocimientos técnicos o legales para entender el problema, como en disputas laborales o comerciales. Aunque el facilitador no impone una solución, su orientación puede ayudar a las partes a evaluar la viabilidad de sus posiciones y considerar alternativas realistas, para resolver el conflicto (PNUD, 2018).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/slider-3.png")
            .col-lg-7
              h5 Mediación transformativa
              p Este enfoque pone el énfasis en la transformación personal de las partes a través del conflicto, fomentando el reconocimiento mutuo y la empatía. El facilitador ayuda a las partes a identificar y reflexionar sobre sus emociones y actitudes, lo cual promueve una comprensión más profunda de las causas del conflicto. Este modelo es ideal para conflictos donde el crecimiento personal y la mejora de la relación, son objetivos prioritarios, puesto que busca no solo resolver el problema, sino también fortalecer la capacidad de las partes para enfrentar futuras tensiones de manera constructiva (González Rey, 2016).


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") Usar la mediación, ofrece varios beneficios en comparación con otros métodos de resolución de conflictos. Al promover la participación y voluntad de las partes, este proceso permite que el acuerdo alcanzado, sea visto como una solución genuina y no como una imposición. Esta integración también contribuye a que las partes se sientan responsables del acuerdo, lo cual fortalece su compromiso a cumplirlo.

        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Otro beneficio importante es que la mediación fomenta relaciones positivas y colaborativas, a largo plazo. Al enfocarse en la comunicación y el entendimiento mutuo, el proceso ayuda a reducir tensiones y a prevenir futuros conflictos. Esto resulta especialmente valioso en entornos donde las partes deben interactuar regularmente, como en el lugar de trabajo o en la familia (La Rosa & Rivas, 2017; PNUD, 2018).
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")


    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0 La mediación es un enfoque efectivo y respetuoso, para resolver tensiones entre partes, brindando un espacio de diálogo facilitado por un tercero neutral. A través de modelos como la mediación facilitadora, evaluativa y transformativa, y mediante estrategias de creación de un ambiente seguro, escucha activa y exploración de intereses, la mediación permite a las partes construir soluciones consensuadas que satisfacen sus necesidades y promuevan relaciones más saludables. Al poner el énfasis en la comunicación y en la comprensión mutua, la mediación es un recurso valioso que no solo resuelve el conflicto, sino que también mejora las capacidades de las personas, para gestionar futuros desacuerdos, de manera constructiva. 
        .col-lg-auto.order-1
          figure
            img(src='@/assets/curso/tema2/10.png', alt='')


    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Arbitraje

    p(data-aos="fade-left") Para conocer el proceso de arbitraje, lo invitamos a ver el siguiente video:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/5oUOhuZa4-M?si=tBYoDWJqcRZhp7wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    h3(data-aos="fade-right") Modalidades de resolución arbitral

    p(data-aos="fade-left") Existen diversas modalidades, dentro del arbitraje, que se ajustan a las particularidades de cada conflicto:

    .row.align-items-center.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/11.png", alt="")
      .col-lg-7.order-1
        AcordionA(tipo="b")
          .div(titulo="Arbitraje voluntario")
            p En este formato, ambas partes acuerdan someterse al proceso de arbitraje y respetar el resultado final del árbitro. Esta modalidad es habitual en contratos comerciales, donde se prevé una cláusula para resolver conflictos de manera rápida y eficiente, sin recurrir a los tribunales.

          .div(titulo="Arbitraje obligatorio")
            p En este caso, el proceso es impuesto por ley o por cláusulas contractuales preestablecidas. Las partes están obligadas a participar y acatar la resolución. Este tipo de arbitraje es común en disputas laborales y contratos de servicios, porque asegura que el conflicto tenga una resolución rápida y definitiva, sin necesidad de judicializar el caso (La Rosa & Rivas, 2017).

          .div(titulo="Arbitraje institucional y <em>ad hoc</em>")
            p En el arbitraje institucional, una institución arbitral supervisa y regula el procedimiento, proporcionando normas y marcos administrativos que facilitan el desarrollo del proceso. En el arbitraje ad hoc, las partes acuerdan las reglas del procedimiento y la elección del árbitro sin intervención institucional, adaptando el proceso a las necesidades específicas del conflicto.

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/12.png", alt="")
      .col-lg-7
        p(data-aos="fade-left") Para asegurar la transparencia y eficacia del proceso, se aplican ciertas estrategias en cada etapa del arbitraje:
        AcordionA(tipo="b")
          .div(titulo="Presentación clara de argumentos y evidencias")
            p Ambas partes deben presentar sus argumentos de manera organizada y respaldada por pruebas claras, dado que la decisión del árbitro se basará en la solidez de la información presentada. Esta preparación fortalece exhaustivamente, la posición de cada parte y facilita una comprensión completa del conflicto.

          .div(titulo="Transparencia en el procedimiento")
            p La claridad en cada etapa del proceso es esencial para que ambas partes confíen en la imparcialidad del árbitro. Informar a las partes sobre los plazos, etapas y requisitos de presentación de pruebas, contribuye para que el procedimiento sea percibido como justo y equilibrado (PNUD, 2018).

          .div(titulo="Selección de un árbitro experto")
            p La elección de un árbitro con conocimientos en el área del conflicto, asegura una resolución informada. Por ejemplo, en disputas comerciales, un árbitro con experiencia en derecho mercantil, puede aportar una perspectiva precisa, que favorece una solución justa y adecuada (González Rey, 2016).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") El proceso arbitral presenta numerosas ventajas, especialmente en contextos donde la rapidez, confidencialidad y especialización son cruciales. Una de las mayores ventajas es la agilidad del procedimiento, que permite resolver disputas en menos tiempo que en un juicio tradicional. Esta rapidez es especialmente atractiva en el ámbito comercial, donde el tiempo es un recurso valioso y prolongar un conflicto puede resultar costoso (La Rosa & Rivas, 2017).

        p(data-aos="fade-left") La imparcialidad y especialización del árbitro, también representan beneficios significativos. La elección de un árbitro con experiencia en el área del conflicto, garantiza una resolución objetiva, dado que las decisiones se basan en un conocimiento profundo del contexto del conflicto. Además, el arbitraje permite preservar las relaciones comerciales y profesionales, puesto que el proceso es menos de confrontación que un juicio, y las partes pueden mantener una relación profesional y cordial. 

      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/13.png", alt="")


    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") El proceso de arbitraje es un método efectivo y formalizado, para resolver conflictos de manera rápida, confidencial y definitiva. Al conferir la autoridad de decisión a un tercero imparcial, las partes pueden resolver sus disputas con certeza y sin la prolongación de los procedimientos judiciales. Según González Rey (2016), “el arbitraje proporciona una solución justa y eficiente, evitando la extensión innecesaria de conflictos y fomentando relaciones de respeto y cooperación” (p. 90). Con modalidades como el arbitraje voluntario, obligatorio, institucional y ad hoc, este procedimiento se adapta a diversas necesidades, proporcionando un marco confiable y profesional para la resolución de conflictos, mientras protege la privacidad y asegura una solución eficiente.
        .col-lg-auto.order-1
          figure
            img(src='@/assets/curso/tema2/14.png', alt='')


    .bg-full-width.border-top.color-primario
      .px-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/50327?page=37" target="_blank" rel="noopener noreferrer") Joyanes Aguilar, L. (2005). Programación en C: metodología, algoritmos y estructura de datos. McGraw-Hill España.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/RSJrBEhdZxw" target="_blank" rel="noopener noreferrer") BBC News Mundo. (2020, 2 octubre). Qué son los algoritmos y cómo aprenden de nosotros | BBC Mundo
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
