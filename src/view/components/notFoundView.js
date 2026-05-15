import notFoundTemplate from '../templates/notFoundTemplate.html';

export function renderNotFound(){
    let html = notFoundTemplate;
    const div = document.createElement('div');
    div.innerHTML = html;
    const notFoundElement = div.firstElementChild;

    let notFoundContainer = document.querySelector('.not-found-container');
    notFoundContainer.innerHTML = '';
    notFoundContainer.appendChild(notFoundElement);

    let currentConditionsContainer = document.querySelector('.current-conditions-container');
    currentConditionsContainer.innerHTML = '';
    let nextDaysContainer = document.querySelector('.next-days-container');
    nextDaysContainer.innerHTML = '';

}

export function deleteNotFound() {
    let notFoundContainer = document.querySelector('.not-found-container');
    notFoundContainer.innerHTML = '';
}