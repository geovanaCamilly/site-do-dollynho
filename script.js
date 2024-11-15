document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) => {
      const sectionId = event.target.getAttribute("data-section");
      const section = document.getElementById(sectionId);
      
      // rolar suavemente até a seção selecionada
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
  