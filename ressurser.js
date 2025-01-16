const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

// Lager en h1 overskrift
const header = document.querySelector("header")
const h1 = document.createElement("h1")
h1.innerText = "Ressursarkiv - Utvikling av interaktive nettsteder"
header.append(h1)

// Referanser til id'er i html 
const tabs = document.getElementById("tabs")
const resourceContainer = document.getElementById("resource-container")

// Fyller inn elementer i de ulike tabbene
function createTabs() {
    tabs.innerHTML = resources.map(tab => `<li class="tab">${tab.category}</li>`).join('')

    const tabClick = document.querySelectorAll(".tab")
    tabClick.forEach(tab => {
        tab.addEventListener("click", () => {
            // Fjerner active fra alle tabs
            tabClick.forEach(t => t.classList.remove("active"))
            // legger til active på klikket tab
            tab.classList.add("active")

            fillContainer(tab.innerText)
        })
    })
    // Første tab er active når siden lastes inn
    tabClick[0].classList.add("active")
}

// Funksjon for å genere linker 
function createLinks(sources) {
    return sources.map((source) => 
        `<li><a href="${source.url}"target="_blank">${source.title}</a></li>`).join('')
}

// Funksjon for å fylle HTML taggene basert på kategori 
function fillContainer (category) {
    const resource = resources.filter(r => r.category === category)[0]
        if (resource) {
            // Generere HTML kode
            resourceContainer.innerHTML =
            `<section id="resource-container">
            <h2 id ="resource-title">${resource.category}</h2>
            <p id="resource-text">${resource.text}</p>
            <ul id="resource-links">${createLinks(resource.sources)}</ul>
            </section>`
        }
}


createTabs()
fillContainer("HTML")

