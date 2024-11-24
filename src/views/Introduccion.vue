<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 2. Teorías y enfoques para la resolución pacífica de conflictos'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-right") La resolución pacífica de los desacuerdos, es una habilidad esencial en cualquier contexto social o profesional, y en esta unidad se tendrá la posibilidad de profundizar en los fundamentos teóricos y prácticos necesarios para enfrentar situaciones de confrontación, de manera constructiva. En particular, se explorarán teorías claves que explican el origen y las dinámicas de estos desafíos interpersonales, y se conocerán enfoques específicos como: la negociación, la mediación y el arbitraje. Estos conocimientos, nos permitirán transformar las divergencias en oportunidades de cooperación, algo indispensable en el contexto actual.
          p(data-aos="fade-right") En toda interacción humana, es natural que surjan diferencias y, entender las teorías sobre estas tensiones, permite abordarlas con una mentalidad más constructiva. Como mencionan La Rosa y Rivas (2017), “el conflicto es parte ineludible de nuestra vida” (p. 9), y aprender a gestionarlo adecuadamente, es crucial para evitar que se convierta en un enfrentamiento destructivo. A lo largo de esta unidad, se analizarán teorías que explican los conflictos desde enfoques, tanto clásicos como contemporáneos, junto con modelos prácticos de mediación y negociación, aplicables en diversos entornos (Mirabal, 2003; UNITEC, 2016).    
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")

  
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left") Para sacar el máximo provecho, esperamos que participe  activamente en los debates y ejercicios de análisis. Esto permite, no solo internalizar los conceptos teóricos, sino también aplicarlos en contextos prácticos, desarrollando habilidades para enfrentar situaciones conflictivas. Como menciona Mirabal (2003), el éxito en la resolución de conflictos, depende de la habilidad para aplicar estos conocimientos de manera práctica, adaptándolos a cada situación. Un compromiso con el aprendizaje y la reflexión, será clave para el éxito de esta unidad.

          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En conclusión, esta unidad proporciona una base sólida en la teoría y práctica de la resolución de conflictos, preparándonos para contribuir a la creación de ambientes de paz y entendimiento en los futuros contextos personales y profesionales.

  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
