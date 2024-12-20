//history.pushState(null, '', `/#${id}`);

// Función para abrir el modal y actualizar el contenido
function openModal(modalId, project) {
  // Obtener el modal correspondiente por su ID
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');

  // Limpiar el contenido actual del modal
  modalContent.innerHTML = '';

  // Determinar qué contenido agregar según el proyecto
  if (project === 'Magda') {
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal('direccionModal')">&times;</span>
        <h3>Dirección</h3>
        <p>“Por Magda”. (Cortometraje de ficción). México-Ecuador. 2022. 422. Color. (CCC.). Biznaga
          de Plata al Primer Premio en la sección Afirmando los Derechos de las Mujeres del Festival de Cine de Málaga (España 2023). Canadá Shorts Award of Distinction (Canadá, 2023). VIII Festival
          de Cinema Escolar de Alvorada FECEA (Brasil 2023). Toronto International Women Film
          Festival, Premio a mejor cortometraje estudiantil (Canadá 2022). Festival Internacional de
          Cine de Morelia (México 2022). Festival Internacional de Cine de Quito (2022). Ivy FilmFestival
          (EEUU. 2022). Festival Internacional de Santo Domingo Mujeres en Corto FEMUJER (República
          Dominicana 2022). Festival Internacional de Cine de Guayaquil (Ecuador 2022). Shorts México
          (México 2022). Turicine (Ecuador 2022). Festival Internacional de Escuelas de Cine de Uruguay
          (Uruguay 2022).</p>
        <a href="https://www.imdb.com/title/tt26711407/?ref_=nm_ov_bio_lk" target="_blank">Haz clic aquí</a>
      `;
  } else if (project === 'Magda1') {
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal('direccionModal')">&times;</span>
        <h3>Producción</h3>
        <p>“Por Magda”. (Cortometraje de ficción). México-Ecuador. 2022. 422. Color. (CCC.). Biznaga
          de Plata al Primer Premio en la sección Afirmando los Derechos de las Mujeres del Festival de Cine de Málaga (España 2023). Canadá Shorts Award of Distinction (Canadá, 2023). VIII Festival
          de Cinema Escolar de Alvorada FECEA (Brasil 2023). Toronto International Women Film
          Festival, Premio a mejor cortometraje estudiantil (Canadá 2022). Festival Internacional de
          Cine de Morelia (México 2022). Festival Internacional de Cine de Quito (2022). Ivy FilmFestival
          (EEUU. 2022). Festival Internacional de Santo Domingo Mujeres en Corto FEMUJER (República
          Dominicana 2022). Festival Internacional de Cine de Guayaquil (Ecuador 2022). Shorts México
          (México 2022). Turicine (Ecuador 2022). Festival Internacional de Escuelas de Cine de Uruguay
          (Uruguay 2022).</p>
        <a href="https://www.imdb.com/title/tt26711407/?ref_=nm_ov_bio_lk" target="_blank">Haz clic aquí</a>
      `;
  } else if (project === 'Indeleble') {
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal('direccionModal')">&times;</span>
        <h3>Dirección</h3>
        <p>“Indeleble”. (Cortometraje de ficción). México D.F., México 2016. 16 mm. Cortometraje
          Color. (CCC). Festival Internacional de Cine de Morelia 2016. Selección oficial. (México).17th
          IISFF off-competition screening section. 2016 (Turquía). Festival Pantalla de Cristal. 2016.
          (México). Premio “Mejor Banda Sonora”. Muestra Tolteca de Cine Internacional. 2016.
          (México). Festival Internacional De Cine Sayulita. 2017. Selección Oficial (México). KINOKI FILM
          FESTIVAL 2017. Selección Oficial. (México). CECEACHERO FILM FEST 2017. Selección Oficial.
          (México). Premio del público. MICGÉNERO. 2017 (México – Argentina).Pachuca Film Fest. 2017
          Selección Oficial (México). Festival de Cinema Latino-Americano de São Paulo 2017. Muestra
          SILEC. (Brasil). CHOUFTOUHONNA, TUNIS INTERNATIONAL FEMINIST ARTFESTIVAL 2017.
          (Túnez) Premio “Coup de coeur”. Festival Internacional de Cine de Quito. 2017. Sección Corto
          Joven. (Ecuador). Short Shorts México. 2017. Competencia Neo-Mex. (México). Muestra CCC
          2017. (México). Cinemaissí – Latin American Film Festival. 2017. (Finlandia). Muestra Mujeres
          en el Cine y la Televisión 2017 (México). Festival de Cine de la Orquídea 2017. Selección
          cortometraje ecuatoriano .(Ecuador)</p>
        <a href="https://www.imdb.com/es/title/tt5228618/" target="_blank">Haz clic aquí</a>
      `;
  } else if (project === 'Rey') {
    modalContent.innerHTML = `
            <span class="close" onclick="closeModal('direccionModal')">&times;</span>
            <h3>Edicion</h3>
            <p>El rey de los machos.
             Con 18 años recién cumplidos, Charly está listo para estrenar su nueva identidad, pero debe hacer frente a los prejuicios de su pueblo machista y, peor aún, los de su familia y seres queridos. Solo tiene de su lado a su amiga, Antonia, que lo anima a ser quién él realmente es y es su aliada en esta aventura. Para hacerse respetar, Charly recurre a medidas desesperadas y decide formar parte de la tradición más machista de su pueblo: el concurso El Rey de los Machos, que celebra a los más machos del pueblo con juegos y desafíos físicos que miden la supuesta virilidad de los participantes.</p>
            <a href="https://www.disneyplus.com/es-ec/series/el-rey-de-los-machos/3AYSJUTFm28X" target="_blank">Haz clic aquí</a>
          `;
  }

  // Mostrar el modal
  modal.classList.add('show');
}

// Función para cerrar el modal
function closeModal(modalId) {
  // Ocultar el modal
  const modal = document.getElementById(modalId);
  modal.classList.remove('show');
}

// Main Navigation
$('#menu-toggle').click(function () {
  $(this).toggleClass('open'), $('.main-nav').toggleClass('show-it');
});
