const blogContainer = document.getElementById('blog-container');
const pagination = document.getElementById('pagination');
const pagination_numbers = document.querySelector('.pagination-numbers');
const itemsPerPage = 12;
let currentPage = 1;

function displayBlogs(page) {
  blogContainer.innerHTML = ""; 
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = blogData.slice(start, end);

  paginatedItems.forEach(blog => {
    const card = document.createElement('div');
    card.classList.add('blog-card');
    card.onclick = () => {
      window.location.href = './blog_details/blog-detail.html';
  };
    card.innerHTML = `
    <img src=${blog.image_url} alt="Blog image"/>
             <div>
              <div class="blog-meta"><i class="bi bi-calendar-event"></i>${blog.date}</div>
              <div>
                <h3 class="blog-heading">
                ${blog.title}
              </h3>
              <p class="blog-summary">
                ${blog.summary}
              </p>
              </div>
              <div class="blog-author">
                <div class="author-info">
                    <img src=${blog.author_profile} alt="profile">
                    <div class="author-name" >${blog.author}</div>
                </div>
                <i class="bi bi-arrow-right-circle"></i>
              </div>
            </div>
    `;



    blogContainer.appendChild(card);
  });
}

function setupPagination() {
    pagination_numbers.innerHTML = "";
  const pageCount = Math.ceil(blogData.length / itemsPerPage);
    console.log(pageCount)
  const prev = document.querySelector('.prev');
  prev.disabled = currentPage === 1;
    
     prev.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            }
    };
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.classList.add('pagination-btn', 'number', `number-${i}`);
    if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => {
        currentPage = i;
        updatePage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    pagination_numbers.appendChild(btn);
  }

    const next = document.querySelector('.next');
    next.disabled = currentPage === pageCount;
    // console.log("hello", next)
    next.onclick = () => {
    if (currentPage < pageCount) {
      currentPage++;
      updatePage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // console.log("click me")
    };
    
}

function updatePage() {
  displayBlogs(currentPage);
  setupPagination();
}

// Initialize
updatePage();



c
