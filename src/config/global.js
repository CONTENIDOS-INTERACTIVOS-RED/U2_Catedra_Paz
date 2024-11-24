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
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
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
      referencia:
        'Coser, LA (1956). Las funciones del conflicto social. Fondo de Cultura Económica.',
      link: '',
    },
    {
      referencia:
        'González Rey, F. (2016). Introducción a la teoría de la cooperación en conflictos. Ediciones Humanistas.',
      link: '',
    },
    {
      referencia:
        'La Rosa, M., & Rivas, P. (2017). Métodos alternativos de resolución de conflictos. Ediciones Jurídicas.',
      link: '',
    },
    {
      referencia: 'Marx, K. (1867). El capital. Siglo XXI Editores.',
      link: '',
    },
    {
      referencia:
        'Mirabal, O. (2003). Fundamentos de negociación y mediación en conflictos. Editorial Universitaria.',
      link: '',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo (PNUD). (2018). Herramientas para la resolución pacífica de conflictos. PNUD.',
      link: '',
    },
    {
      referencia:
        'Universidad Tecnológica de México (UNITEC). (2016). Manual de comunicación efectiva y resolución de conflictos. UNITEC.',
      link: '',
    },
    {
      referencia:
        'Weber, M. (1922). Economía y sociedad: Esbozo de sociología comprensiva. Fondo de Cultura Económica.',
      link: '',
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
