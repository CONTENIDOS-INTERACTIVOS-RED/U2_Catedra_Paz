<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 2. Teorías y enfoques para la resolución pacífica de conflictos'"
    :subTitulo="'3. Técnicas y habilidades para la resolución de conflictos'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    
    p(data-aos="fade-right").mb-lg-5 Este tema aborda tres habilidades esenciales: la comunicación asertiva, la escucha activa y la colaboración (cooperación). Estas técnicas son claves para transformar las tensiones en oportunidades de diálogo y construcción de acuerdos, pues facilitan un enfoque respetuoso y constructivo en situaciones de conflicto. 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Comunicación asertiva

    p(data-aos="fade-right").mb-lg-5 La comunicación asertiva es una habilidad fundamental para la resolución de conflictos, porque permite a las personas expresar sus ideas, necesidades y emociones, de manera clara y respetuosa, sin recurrir a la agresividad ni caer en la pasividad. Este estilo de comunicación, crea un ambiente en el cual todos los participantes se sienten escuchados y valorados, lo cual es esencial para transformar las tensiones en oportunidades de diálogo constructivo.

    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") La asertividad se distingue por su equilibrio entre dos extremos: la agresión y la pasividad. A diferencia de la comunicación agresiva, que busca imponer las propias opiniones sin considerar las de los demás, o de la comunicación pasiva, donde se evitan las confrontaciones a costa de los propios intereses, la asertividad permite que las personas expresen sus puntos de vista sin dañar la relación con el otro. Esta habilidad se basa en el respeto mutuo y en el reconocimiento de que ambas partes en el conflicto, tienen el derecho a expresar sus perspectivas y a ser escuchadas (UNITEC, 2016).

        p(data-aos="fade-left") Al ser asertiva, una persona puede comunicar sus necesidades sin provocar reacciones defensivas en los demás, lo que facilita una respuesta colaborativa. Este tipo de comunicación incluye el uso de un lenguaje claro, honesto y directo, que ayuda a evitar malentendidos y promueve la transparencia en la interacción. Como indican La Rosa y Rivas (2017), “la comunicación asertiva permite expresar lo que uno siente y piensa de forma honesta y sin herir a los otros” (p. 92).


    h3(data-aos="fade-right") Técnicas para la comunicación asertiva

    p(data-aos="fade-right").mb-lg-5 Para desarrollar la asertividad en la comunicación, existen varias técnicas útiles que pueden aplicarse en diferentes contextos:

    .row.align-items-center.mb-5
      .col-lg-5.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.png", alt="").mb-4.mb-lg-0
      .col-lg-7.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Uso de <em>Yo</em> en lugar de <em>Tú</em>")
            p Una de las estrategias más efectivas en la comunicación asertiva, es la de marcar los mensajes desde la propia perspectiva, utilizando frases que comiencen con “Yo” en lugar de “Tú”. Esto evita que el otro se sienta culpable o atacado. Por ejemplo, decir “Yo me siento frustrado cuando se interrumpen mis ideas” en lugar de “Tú siempre interrumpes mis ideas” ayuda a comunicar la incomodidad sin acusación.

          .div(titulo="Expresión de necesidades y límites claros")
            p La comunicación asertiva requiere que las personas expresen sus necesidades de manera específica, estableciendo límites claros. Esto ayuda a evitar confusiones y permite a la otra parte, entender exactamente qué es lo que se necesita para resolver la situación. Establecer límites también facilita que la otra persona respete el espacio emocional o físico del interlocutor.

          .div(titulo="Técnica de &quot;Banco de Niebla&quot;")
            p Esta estrategia implica reconocer y validar los sentimientos del otro, sin ceder a presionar ni comprometer los propios valores. Por ejemplo, en un desacuerdo, responda con “Entiendo que sientas que esto es importante; sin embargo, mantengo mi punto de vista porque si consideras que…” permite que la conversación avance, respetando ambas posturas.



    .row.mb-5
      .col-lg-7.order-lg-2
        p(data-aos="fade-right") La comunicación asertiva tiene un impacto significativo en el proceso de resolución de conflictos, porque promueve un ambiente donde las tensiones pueden expresarse y resolverse, sin hostilidad. Esta habilidad facilita la reducción de malentendidos y aumenta la probabilidad de alcanzar acuerdos mutuamente satisfactorios, dado que ambas partes se sienten valoradas y escuchadas (PNUD, 2018; UNITEC, 2016).     
        p(data-aos="fade-right") Además, la asertividad fortalece las relaciones a largo plazo. Para evitar tanto la agresividad como la pasividad, este estilo de comunicación promueve interacciones basadas en la honestidad y el respeto. En el ámbito laboral, por ejemplo, un líder asertivo puede establecer expectativas claras con su equipo, lo cual reduce las tensiones y mejora la eficiencia y el clima laboral. En el contexto familiar, la comunicación asertiva permite que los miembros expresen sus sentimientos y necesidades sin temores ni resentimientos, promoviendo un ambiente de comprensión y apoyo mutuo. 
      .col-lg-5.order-lg-1
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in").mb-4.mb-lg-0


    p(data-aos="fade-right").mb-lg-5 La asertividad también contribuye al desarrollo personal, dado que permite que las personas se sientan empoderadas y seguras al expresar sus opiniones, sin temor a ser ignoradas o desestimadas. Este empoderamiento fortalece la autoconfianza y motiva a las personas a establecer límites saludables en sus relaciones, lo que es fundamental para su bienestar emocional.


    .row.mb-5
      .col-lg-5.order-lg-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En resumen, la comunicación asertiva es una técnica invaluable en la resolución de conflictos, puesto que facilita la expresión clara y respetuosa de pensamientos y necesidades.

        p(data-aos="fade-left") Mediante el uso de un lenguaje directo y honesto, así como de técnicas específicas como el “yo” en lugar del “tú”, la expresión de límites y el uso de respuestas neutrales, las personas pueden abordar conflictos sin generar tensiones innecesarias.

        p(data-aos="fade-left") Esta habilidad no solo favorece la solución de tensiones inmediatas, sino que también fortalece las relaciones y fomenta un ambiente de respeto y colaboración, a largo plazo, contribuyendo al crecimiento personal y al desarrollo de interacciones, basadas en la comprensión y la empatía.



    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Escucha activa

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-right") La escucha es una habilidad crucial en la resolución de conflictos, porque permite a las personas comprender a fondo las perspectivas, emociones y necesidades de los demás. A diferencia de la escucha pasiva, que se limita a recibir información, esto implica una atención intencionada y completa. Esta técnica promueve un ambiente de respeto y empatía, facilitando el diálogo constructivo y la cooperación. La escucha activa es una de las bases para reducir tensiones, ya que permite que cada participante se sienta realmente comprendido (González Rey, 2016; UNITEC, 2016).

      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in").mb-4.mb-lg-0


    h3(data-aos="fade-right") Componentes fundamentales de la escucha activa

    p(data-aos="fade-right") La escucha está compuesta por varios elementos claves que ayudan a garantizar que el receptor no solo capte el contenido verbal, sino también el contexto emocional y las señales no verbales del interlocutor:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-1.png")
            .col-lg-7
              h5 Atención plena
              p La verdadera manera de escuchar comienza con la atención total hacia el interlocutor, eliminando distracciones y manteniendo el contacto visual. pEsto implica poner en pausa cualquier actividad paralela y centrarse exclusivamente en la otra persona.

              p Según La Rosa y Rivas (2017), “la atención plena demuestra respeto y disposición, lo cual genera confianza y facilita el entendimiento mutuo” (p. 45).

              p Esta completa atención permite captar tanto el mensaje, como el tono emocional detrás de las palabras.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-2.png")
            .col-lg-7
              h5 Parafraseo
              p Una técnica clave es el párrafo, que consiste en reformular lo que ha expresado la otra persona, para confirmar que se ha comprendido el mensaje. 

              p Al parafrasear, el oyente puede decir frases como: “Si entiendo bien, lo que me dices es…”.

              p Esta técnica no solo demuestra que se ha escuchado con atención, sino que también permite corregir cualquier malentendido de inmediato, evitando que el conflicto se intensifique por interpretaciones erróneas (PNUD, 2018).

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-3.png")
            .col-lg-7
              h5 Reflexión de sentimientos
              p Reconocer y reflejar las emociones de la otra persona, es esencial para demostrar empatía. 

              p Expresiones como “Parece que te sientes frustrado por esta situación” ayudan a validar los sentimientos del otro, creando un ambiente de comprensión.

              p La validación emocional reduce la efectividad y permite que las partes involucradas en el conflicto, se abran al diálogo con mayor disposición, pues sienten que sus emociones son legítimas y respetadas (Weber, 1922; González Rey, 2016).

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-4.png")
            .col-lg-7
              h5 Preguntas clarificadoras
              p Las preguntas abiertas y clarificadoras, son fundamentales para profundizar en el entendimiento del mensaje. 

              p Preguntas como “¿podrías explicar un poco más sobre eso?”, o “¿qué aspectos te preocupan más en esta situación?”, ayudan a obtener una comprensión más detallada de los puntos de vista de la otra persona.

              p Este tipo de preguntas demuestra interés genuino y fomenta una conversación más rica y significativa (La Rosa & Rivas, 2017).


    .row.mb-5
      .col-lg-7.order-lg-1.order-2
        p(data-aos="fade-right") La escucha activa aporta numerosos beneficios en la resolución de conflictos, promoviendo un ambiente en el que las tensiones pueden abordarse de manera constructiva. Uno de los principales beneficios es que se reduce la reactividad emocional. Al sentirse escuchada, la otra persona experimenta una disminución en la intensidad emocional, lo cual facilita el diálogo y evita que el conflicto escale. Cuando los participantes perciben que sus emociones y opiniones son respetadas, están más dispuestos a considerar las perspectivas ajenas (PNUD, 2018).
        p(data-aos="fade-right") Asimismo, se fortalecen las relaciones entre las partes, dado que permite construir un vínculo basado en la confianza y el respeto. En un entorno laboral, por ejemplo, los equipos que practican los componentes, pueden resolver desacuerdos de manera más rápida y eficiente, promoviendo un ambiente de colaboración y apoyo. En contextos familiares o personales, la escucha activa fomenta la empatía, lo cual es clave para resolver conflictos, sin dañar las relaciones (UNITEC, 2016).
      .col-lg-5.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in").mb-4.mb-lg-0


    .row.mb-5
      .col-lg-7.order-lg-2
        p(data-aos="fade-right") Otra ventaja es que se pueden identificar intereses y necesidades subyacentes. Cuando se capta tanto el contenido como las emociones de la conversación, es posible descubrir las verdaderas preocupaciones detrás de las posturas iniciales, lo cual facilita la búsqueda de soluciones que respondan a las necesidades reales de cada parte. Esto es especialmente útil en conflictos complejos, donde las posiciones iniciales pueden ocultar intereses que aún no han sido expresados de manera abierta (González Rey, 2016).
        p(data-aos="fade-right") Escuchar de manera correcta, es una herramienta poderosa en la resolución de conflictos, pues permite un nivel de comprensión profundo que va más allá de las palabras. Mediante técnicas como la atención plena, el párrafo, la reflexión de sentimientos y las preguntas clarificadoras, esta habilidad no solo facilita el entendimiento mutuo, sino que también contribuye a reducir tensiones y construir relaciones de respeto y confianza. La escucha activa transforma el conflicto en una oportunidad de diálogo y aprendizaje, mejorando la disposición de las partes para encontrar soluciones que beneficien a todos.
      .col-lg-5.order-lg-1
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in").mb-4.mb-lg-0



    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Colaboración (cooperación)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-right") La colaboración es una habilidad clave en la resolución de conflictos, porque implica el esfuerzo conjunto para encontrar soluciones que beneficien a ambas partes. Esta capacidad va más allá de la simple negociación, puesto que busca construir acuerdos en los que los involucrados se sientan reconocidos y satisfechos. La disposición para trabajar en equipo y valorar los intereses de los demás, es fundamental en esta dinámica, pues permite transformar el conflicto en una oportunidad para fortalecer las relaciones y construir confianza (González Rey, 2016; UNITEC, 2016).

      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.svg", data-aos="zoom-in").mb-4.mb-lg-0

    h3(data-aos="fade-right") Componentes de la colaboración en la resolución de conflictos

    p(data-aos="fade-right") La colaboración efectiva en la resolución de conflictos, se basa en varios elementos esenciales que permiten que las partes trabajen de manera conjunta y constructiva. Estos componentes son los cimientos de una cooperación exitosa, dado que promueven el entendimiento mutuo y facilitan la construcción de soluciones equitativas.

    p(data-aos="fade-right") Conozcamos cada uno de ellos:

    .row.align-items-center.mb-5
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Identificación de intereses comunes")
            p Un paso importante en el trabajo conjunto, es reconocer los intereses compartidos que pueden servir como base para construir soluciones. En lugar de centrarse exclusivamente en las posiciones individuales, es necesario buscar los objetivos comunes que cada parte tiene y que pueden alinearse. Esto no solo facilita el diálogo, sino que también aumenta la disposición de los involucrados, para encontrar alternativas que beneficien a todos (PNUD, 2018).

          .div(titulo="Promoción del compromiso y la flexibilidad")
            p La colaboración implica que cada parte esté dispuesta a realizar concesiones para alcanzar una solución satisfactoria. Esta flexibilidad es fundamental, dado que permite que todos los involucrados sientan que están recibiendo algo de valor, incluso si han tenido que ceder en ciertos aspectos. Al comprometerse y mostrar apertura al cambio, se fomenta un ambiente en el que las partes están motivadas a mantener el acuerdo alcanzado (La Rosa & Rivas, 2017).

          .div(titulo="Búsqueda de alternativas creativas")
            p En un proceso colaborativo, la generación de ideas innovadoras es esencial para encontrar soluciones que no solo resuelvan el conflicto, sino que también beneficien a ambas partes. Este enfoque promueve la creatividad y permite que los participantes se sientan empoderados, porque pueden aportar ideas y propuestas que enriquecen el diálogo. En situaciones complejas, como en el ámbito laboral o comunitario, la creatividad puede abrir nuevas posibilidades que antes no habían sido contempladas (UNITEC, 2016).

          .div(titulo="Fomento del trabajo en equipo")
            p La disposición a trabajar en equipo y a participar activamente en el proceso de resolución, es clave para que el conflicto se convierta en una experiencia constructiva. Este enfoque requiere que cada parte adopte una actitud de colaboración, en lugar de confrontación, buscando construir una relación de confianza y respeto. En contextos laborales, por ejemplo, trabajar en equipo para resolver desacuerdos, fortalece las relaciones y mejora el ambiente laboral, creando una base sólida para enfrentar futuros desafíos de manera conjunta (González Rey, 2016).
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/10.png", alt="").mt-4.mt-lg-0


    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/11.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

        AcordionA(tipo="b")
          .div(titulo="Fomenta la sostenibilidad de los acuerdos alcanzados")
            p Al trabajar juntos para desarrollar una solución, las partes se sienten más comprometidas con el resultado, lo cual aumenta las probabilidades para que el acuerdo sea respetado y mantenido a largo plazo. La colaboración fortalece el sentido de pertenencia y empoderamiento, puesto que cada participante ha tenido la oportunidad de contribuir, de manera activa, al proceso (PNUD, 2018).

          .div(titulo="Clima de respeto y confianza")
            p El trabajo conjunto promueve un clima de respeto y confianza que facilita la resolución de conflictos futuros. Cuando los participantes sienten que sus perspectivas y necesidades han sido valoradas, es más probable que adopten una actitud abierta en caso de nuevos desacuerdos, lo que reduce la probabilidad de confrontaciones prolongadas. Este ambiente de respeto y reciprocidad, es especialmente valioso en entornos como el laboral o familiar, donde las relaciones a largo plazo son prioritarias (La Rosa & Rivas, 2017).

          .div(titulo="Desarrollo de habilidades interpersonales")
            p La colaboración en la resolución de conflictos permite el desarrollo de habilidades interpersonales como la empatía, la flexibilidad y la creatividad, que son útiles no solo para resolver el conflicto presente, sino también para enfrentar futuras tensiones. Estas habilidades no solo mejoran las relaciones entre los participantes, sino que también contribuyen al crecimiento personal, promoviendo un enfoque más positivo y resiliente ante las dificultades.

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-right") La colaboración es una habilidad esencial en la resolución de conflictos, debido a que permite que las partes transformen las tensiones en oportunidades de diálogo y fortalecimiento de relaciones. A través de la identificación de intereses comunes, la flexibilidad, la creatividad y el trabajo en equipo, la colaboración facilita la creación de soluciones sostenibles y mutuamente beneficiosas. Este enfoque no solo resuelve el conflicto actual, sino que también establece las bases para relaciones más respetuosas y constructivas a largo plazo, promoviendo un ambiente de confianza y crecimiento personal y colectivo (González Rey, 2016; UNITEC, 2016).
        p(data-aos="fade-right") La aplicación de estos conocimientos es especialmente relevante en contextos donde la cooperación y el respeto mutuo son esenciales, como en el ámbito laboral, familiar o comunitario. La capacidad de resolver conflictos de manera pacífica, no solo mejora las relaciones, sino que también contribuye a un ambiente más armonioso y productivo en cualquier entorno. La unidad culmina con un enfoque integral que, al combinar teoría y práctica, sienta las bases para una resolución de conflictos eficaz y basada en el respeto y la comprensión, elementos clave para una convivencia pacífica y colaborativa (PNUD, 2018; UNITEC, 2016).
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in").mb-4.mb-lg-0

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .px-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/58906" target="_blank" rel="noopener noreferrer") Cabrera R. (2017) La mediación como método para la resolución de conflictos. Dykinson
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/X0HgUJE-W8E?si=ceSjytvT0sVZtrya" target="_blank" rel="noopener noreferrer") Linzoain, P (22 de marzo de 2022) Modelo Harvard De Negociación, Técnicas De Negociación #Mediación Y Resolución De Conflictos (archivo de video) Youtube
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://organizacioneshumanas.org/blog/11-practicos-pasos-hacia-dinamicas-del-poder-mas-sanas-en-el-trabajo-mas-empowerment-menos-coercion-richard-d-bartlett-2/" target="_blank" rel="noopener noreferrer") Barlett, R. (8 de julio de 2010) 11 Prácticos Pasos hacia Dinámicas del Poder más sanas en el trabajo Más empowerment, menos coerción. (blog)
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Técnicas y habilidades para la resolución de conflictos',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes habilidades es crucial en la mediación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Escucha activa',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Controlar a las partes',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Criticar las opiniones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según Max Weber, ¿qué es lo que generalmente desencadena un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Falta de recursos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Relaciones de poder',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Exceso de comunicación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ausencia de autoridad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes es un objetivo clave de la mediación en conflictos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Forzar un acuerdo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mantener la neutralidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Ignorar las emociones de las partes',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Imponer una solución inmediata',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'La teoría funcionalista ve el conflicto como:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Algo que debe evitarse a toda costa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una fuerza que puede tener efectos positivos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un problema estrictamente económico',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Exclusivo de las organizaciones laborales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'En el proceso de arbitraje, ¿quién toma la decisión final?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Un tercero imparcial',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El juez de paz',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El supervisor',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
