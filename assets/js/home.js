import htmx from 'htmx.org'

htmx.onLoad(() => {
    const eventsContainer = document.querySelector('.events-list')
    if (eventsContainer) {
        const eventLeftSlider = document.querySelector('.events-left-slider')
        const eventRightSlider = document.querySelector('.events-right-slider')
        const eventSlide = document.querySelector('.event')

        eventLeftSlider.addEventListener('click', () => {
            const slideWidth = eventSlide.clientWidth
            eventsContainer.scrollLeft -= slideWidth
        })

        eventRightSlider.addEventListener("click", () => {
            const slideWidth = eventSlide.clientWidth
            eventsContainer.scrollLeft += slideWidth
        })
    }

    const newsContainer = document.querySelector('.news-list')
    if (newsContainer) {
        const newsLeftSlider = document.querySelector('.news-left-slider')
        const newsRightSlider = document.querySelector('.news-right-slider')
        const newsSlide = document.querySelector('.new')

        newsLeftSlider.addEventListener('click', () => {
            const slideWidth = newsSlide.clientWidth
            newsContainer.scrollLeft -= slideWidth
        })

        newsRightSlider.addEventListener("click", () => {
            const slideWidth = newsSlide.clientWidth
            newsContainer.scrollLeft += slideWidth
        })
    }
})