const tabs = document.querySelectorAll('.menu__link');
const all_content = document.querySelectorAll('.story__item');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('menu__link--active')})
        tab.classList.add('menu__link--active');

        all_content.forEach(content=>{content.classList.remove('story__item--active')});
        all_content[index].classList.add('story__item--active')
    })
});