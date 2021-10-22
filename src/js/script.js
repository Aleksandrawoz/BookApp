
('use strict');
{
    const select = {
        templateOf: {
            bookTemplate: '#template-book',
        },
        containerOf: {
            booksList: '.books-list',
            images: '.books-list .book__image',
        },
        // booksImages:{

        //}
    };
    const templates = {
        bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
    };

    const booksList = document.querySelector('.books-list');

    function render() {
        //const thisBook = this;
        for (let eachBook of dataSource.books) {

            // Generate HTML based on template
            const generatedHTML = templates.bookTemplate(eachBook);
            // Generate DOM element
            const element = utils.createDOMFromHTML(generatedHTML);
            // Adding generated element as child
            const bookListContainer = document.querySelector(select.containerOf.booksList);
            bookListContainer.appendChild(element);
        }

    }
    function initActions() {
        const thisBook = this;
        const favoriteBooks = [];
        const bookImages = document.querySelectorAll(select.containerOf.images);
        for(let image of bookImages){
            image.addEventListener('dblclick', function(event){
                event.preventDefault();
                image.classList.add('favorite');
                const idBook = thisBook.booksList.getAttribute('data-id');
                favoriteBooks.push(idBook);
            });
        } 
    }
    render();
    initActions();
}

