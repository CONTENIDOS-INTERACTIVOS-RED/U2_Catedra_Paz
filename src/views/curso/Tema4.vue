<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 2. Teorías y enfoques para la resolución pacífica de conflictos'" :subTitulo="'SINTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 La Unidad 2 "Teorías y enfoques para la resolución pacífica de conflictos" proporciona los fundamentos teóricos y prácticos necesarios para comprender y gestionar los conflictos de manera constructiva. A través del estudio de teorías clásicas y contemporáneas, como las propuestas por Karl Marx, Max Weber y Lewis Coser, se analiza el origen y las dinámicas de los conflictos sociales, económicos y políticos. Además, se presentan enfoques prácticos como la negociación, mediación y arbitraje, que ayudan a transformar los desacuerdos en oportunidades de cooperación y entendimiento. Esta unidad es clave para desarrollar habilidades que fomenten la convivencia pacífica y la colaboración en diversos entornos.


      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
