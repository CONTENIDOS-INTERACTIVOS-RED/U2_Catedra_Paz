export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 2.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '1',
        titulo: 'Teorías y enfoques para la resolución pacífica de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principales teorías sobre resolución de conflictos',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '2',
        titulo: 'Enfoques de negociación, mediación y arbitraje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Negociación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Mediación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Arbitraje',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '3',
        titulo: 'Técnicas y habilidades para la resolución de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Comunicación asertiva',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Escucha activa',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Colaboración (cooperación)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-registered',
        unidad: 'UNIDAD 2.',
        numero: '4',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia: 'Naciones Unidas. (sf). Organización de las Naciones Unidas',
      link: 'https://www.un.org/es',
    },
    {
      referencia:
        'García, JL (2019, 21 de mayo). 9 causas de conflicto en las empresas que interesa conocer para evitarlos. Laboral Social.',
      link:
        'https://www.laboral-social.com/9-causas-conflicto-empresas-interesa-conocer-evitarlos.html',
    },
    {
      referencia:
        'Unidad para las Víctimas. (sf). Análisis de dinámicas territoriales.',
      link: 'https://datospaz.unid.gov.c/an-Delaware--dinamicas-territoriales/',
    },
    {
      referencia:
        'Universidad Panamericana. (sf). ¿Por qué conocer la teoría de la burocracia? Blog de Posgrados de Gobierno y Economía.',
      link:
        'https://blog.up.edu.mx/posgrados-de-gobierno-y-economia/por-que-conocer-la-teoria-de-la-burocracia',
    },
    {
      referencia: 'Centro Hera. (sf). Modelos de mediación.',
      link: 'https://www.centrohera.es/modelos-mediacion/',
    },
    {
      referencia:
        'Escuela Europea de Psicología. (sf). ¿Qué es la comunicación asertiva?',
      link:
        'https://psicologia.com/que-es-comunicacion-asertiva/#:~:text=La%20comunicaci%C3%B3n%20asertiva%20es%20un,y%20las%20de%20los%20dem%C3%A1s',
    },
    {
      referencia:
        'Jurisdicción Especial para la Paz. (Dakota del Norte). Jurisdicción Especial para la Paz. JEP.',
      link:
        'https://www.jep.gov.co/JEP/Paginas/Jurisdiccion-Especial-para-la-Paz.aspx',
    },
    {
      referencia: 'Naciones Unidas. (Dakota del Norte). Derechos Humanos.',
      link: 'https://www.un.org/es/global-issues/human-rights',
    },
    {
      referencia:
        'Caja de herramientas comunitaria. (Dakota del Norte). Foros de conducta pública: Involucrar a la comunidad en la identificación de problemas y soluciones.',
      link:
        'https://ctb.ku.edu/es/tabla-de-contenidos/valoracion/valorar-las-necesidades-y-recursos-comunitarios/foros-de-conducta-publica/principal',
    },
    {
      referencia:
        'Cabello-Tijerina, P. A., Carmona, V. S. E., Gorjón, G. F. J., Iglesias, O. E., Sáenz, L. K. A., & Vásquez-Gutiérrez, R. L. (2016). Cultura de paz. Universidad Autónoma de Nuevo León.',
      link:
        'https://santic.cl/mt-content/uploads/2023/08/cabello-et-al_cultura_de_paz.pdf',
    },
    {
      referencia:
        'Naciones Unidad. (1948). Declaración Universal de Derechos Humanos.',
      link:
        'https://www.un.org/es/about-us/universal-declaration-of-human-rights',
    },
    {
      referencia:
        'Roldán-Loyola, E. (2020). Educación para la paz como herramienta para construir la cultura de paz. Acta Colombiana de Psicología, 23(1), 369-370.',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S0123-91552020000100369&script=sci_arttext',
    },
    {
      referencia:
        'González Rey, F. (2016). Introducción a la teoría de la cooperación en conflictos. Ediciones Humanistas.',
      link: 'https://dialnet.unirioja.es/descarga/libro/737248.pdf',
    },
    {
      referencia:
        'La Rosa, J., & Rivas, G. (2018). Teoría del conflicto y mecanismos de solución (Vol. 33). Fondo Editorial de la PUCP.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=GaHNDwAAQBAJ&oi=fnd&pg=PT4&dq=6.+La+Rosa,+M.,+%26+Rivas+M%C3%A9todos+alternativos+de+resoluci%C3%B3n+de+conflictos.+Ediciones+Jur%C3%ADdicas.&ots=mhZi4uw68c&sig=n-DdITDA1bR8305WfiWVk0mx63V0',
    },
    {
      referencia:
        'Chilito Piamba, E. A. (2018). Participación comunitaria, gobernanza y gobernabilidad. Experiencias de construcción de paz en el departamento del Cauca, Colombia, y su aporte a posconflicto, el caso del corregimiento de Lerma. Estudios Politicos, (53), 51-72.',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S0121-51672018000200051&script=sci_arttext',
    },
    {
      referencia:
        'Sánchez Cardona, M. (2016). Educación para la cultura de paz: Una aproximación psicopedagógica',
      link:
        'https://books.google.es/books?hl=es&lr=&id=CvqN-DwAAQBAJ&oi=fnd&pg=PR13&dq=8.%09S%C3%A1nchez+Cardona,+M.+(2016).+Educaci%C3%B3n+para+la+cultura+de+paz:+Una+aproximaci%C3%B3n+psicopedag%C3%B3gica.&ots=arifg35kTd&sig=ZSRqEe4PJw1PwtSOag9IOsQ1UaM',
    },
    {
      referencia:
        'de Derechos Humanos, D. U. (2008). Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.',
      link:
        'http://coordinadoradelamujer.org.bo/observatorio/archivos/marco/paralaedducacionylacienciadelacultura_486.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'capacidad de expresar pensamientos y emociones de forma honesta y respetuosa, sin caer en la agresividad o la pasividad.',
    },
    {
      termino: 'Arbitraje',
      significado:
        'proceso formal de resolución de conflictos en el que un tercero imparcial toma una decisión vinculante, evitando la extensión de los litigios judiciales.',
    },
    {
      termino: 'Colaboración',
      significado:
        'esfuerzo conjunto en el que las partes implicadas trabajan hacia una solución que beneficia a todos los involucrados, priorizando los intereses compartidos.',
    },
    {
      termino: 'Comunicación Asertiva',
      significado:
        'estilo de comunicación en el que se expresan opiniones y necesidades de manera clara y respetuosa, contribuyendo a un ambiente de respeto y comprensión.',
    },
    {
      termino: 'Conflicto',
      significado:
        'situación de desacuerdo o tensión entre dos o más partes debido a diferencias de intereses, necesidades o valores. Los conflictos pueden ser gestionados de manera constructiva con técnicas adecuadas.',
    },
    {
      termino: 'Escucha Activa',
      significado:
        'habilidad que implica prestar atención total al interlocutor, no solo a sus palabras, sino también a sus emociones y lenguaje no verbal, para lograr un entendimiento profundo.',
    },
    {
      termino: 'Intereses Comunes',
      significado:
        'necesidades u objetivos compartidos entre las partes en conflicto que pueden servir como base para construir soluciones colaborativas.',
    },
    {
      termino: 'Mediación',
      significado:
        'proceso en el que un tercero neutral facilita el diálogo entre las partes, ayudándoles a encontrar una solución por sí mismas sin imponer decisiones.',
    },
    {
      termino: 'Negociación',
      significado:
        'método de resolución de conflictos donde las partes dialogan directamente para alcanzar un acuerdo que satisfaga sus intereses sin intervención de terceros.',
    },
    {
      termino: 'Resolución Pacífica de Conflictos',
      significado:
        'estrategia que busca abordar y resolver tensiones de manera no violenta, mediante el diálogo, el entendimiento mutuo y la colaboración.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
