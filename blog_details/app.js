const tocLinks = document.querySelectorAll('.toc-link');
const sections = document.querySelectorAll('.blog-content section');
console.log("section", sections)

window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSectionId = section.id;
    }
  });
 
  tocLinks.forEach(link => {
    link.classList.remove('active');
    console.log(link.getAttribute('href'))
     console.log("section", currentSectionId)
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});