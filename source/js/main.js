document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы один раз
    const searchButton = document.getElementById("search__button");
    const searchLogin = document.querySelector(".search__login");
    const formSearch = document.querySelector(".Form__search");
    
    // Проверяем, что основные элементы существуют
    if (!searchButton || !searchLogin) {
        console.error("Элементы поиска не найдены!");
        return;
    }
    
    // Единый обработчик клика по кнопке поиска
    searchButton.addEventListener("click", function (event) {
        event.stopPropagation(); // предотвращаем всплытие
        searchLogin.classList.toggle("open");
    });
    
    // Обработчик клика по документу для закрытия
    document.addEventListener("click", function (event) {
        // Проверяем, что меню открыто и клик был вне нужной области
        if (searchLogin.classList.contains("open") && 
            !searchLogin.contains(event.target) && 
            event.target !== searchButton &&
            !searchButton.contains(event.target)) {
            searchLogin.classList.remove("open");
        }
    });
    
    // Предотвращаем закрытие при клике внутри формы поиска
    if (formSearch) {
        formSearch.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
    
    // Дополнительно: закрытие по клавише Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && searchLogin.classList.contains('open')) {
            searchLogin.classList.remove("open");
        }
    });
});