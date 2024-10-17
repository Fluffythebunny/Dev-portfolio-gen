document.getElementById('portfolioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generatePortfolio();
});

function generatePortfolio() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const bio = document.getElementById('bio').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const github = document.getElementById('github').value;
    const projects = JSON.parse(document.getElementById('projects').value);
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const accentColor = document.getElementById('accentColor').value;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} - ${title}</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/b6ec32c1ab.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="hero">
            <div class="hero-content">
                <h1 class="animate-pop-in">${name}</h1>
                <h2 class="animate-pop-in">${title}</h2>
                <a href="#about" class="btn animate-pop-in">Learn More</a>
            </div>
        </section>
        <section id="about">
            <h3 class="section-title">About Me</h3>
            <p class="animate-fade-in">${bio}</p>
        </section>
        <section id="skills">
            <h3 class="section-title">Skills</h3>
            <ul class="skill-list">
                ${skills.map(skill => `<li class="animate-slide-up">${skill}</li>`).join('')}
            </ul>
        </section>
        <section id="projects">
            <h3 class="section-title">Projects</h3>
            <div class="project-grid">
                ${projects.map((project, index) => `
                    <div class="project-card animate-slide-up" style="animation-delay: ${index * 0.1}s;">
                        <h4>${project.name}</h4>
                        <p>${project.description}</p>
                        <a href="${project.url}" target="_blank" class="btn">View Project</a>
                    </div>
                `).join('')}
            </div>
        </section>
        <section id="contact">
            <h3 class="section-title">Contact</h3>
            <div class="contact-links">
                <a href="${github}" target="_blank" class="social-icon animate-pop-in"><i class="fab fa-github"></i></a>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; ${new Date().getFullYear()} ${name}. All rights reserved.</p>
    </footer>
</body>
</html>
    `;

    const css = `
:root {
    --primary-color: ${primaryColor};
    --secondary-color: ${secondaryColor};
    --accent-color: ${accentColor};
    --text-color: #333;
    --background-color: #f4f4f4;
    --card-background: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
}

header {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: var(--accent-color);
}

main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

section {
    margin-bottom: 6rem;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--primary-color);
}

#hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: #fff;
}

.hero-content {
    text-align: center;
}

#hero h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
}

#hero h2 {
    font-size: 2rem;
    color: var(--accent-color);
    margin-bottom: 2rem;
}

.btn {
    display: inline-block;
    background-color: var(--accent-color);
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: bold;
}

.btn:hover {
    background-color: #fff;
    color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
    justify-content: center;
}

.skill-list li {
    background-color: var(--primary-color);
    color: #fff;
    padding: 0.7rem 1.2rem;
    border-radius: 30px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.skill-list li:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background-color: var(--card-background);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-card h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.project-card p {
    margin-bottom: 1.5rem;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.social-icon {
    font-size: 3rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
}

.social-icon:hover {
    color: var(--accent-color);
    transform: scale(1.2);
}

footer {
    background-color: var(--primary-color);
    color: #fff;
    text-align: center;
    padding: 1.5rem 0;
}

/* Animations */
@keyframes popIn {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-pop-in {
    animation: popIn 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
    opacity: 0;
}

.animate-fade-in {
    animation: fadeIn 1s ease-in-out forwards;
    opacity: 0;
}

.animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
    opacity: 0;
}

/* Delayed animations */
.hero-content > *:nth-child(1) { animation-delay: 0.2s; }
.hero-content > *:nth-child(2) { animation-delay: 0.4s; }
.hero-content > *:nth-child(3) { animation-delay: 0.6s; }

.skill-list li:nth-child(n) {
    animation-delay: calc(0.1s * var(--i));
}

@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        align-items: center;
    }

    nav ul li {
        margin: 0.5rem 0;
    }

    #hero h1 {
        font-size: 3rem;
    }

    #hero h2 {
        font-size: 1.5rem;
    }

    .section-title {
        font-size: 2rem;
    }
}
    `;

    document.getElementById('htmlOutput').value = html;
    document.getElementById('cssOutput').value = css;
    document.getElementById('output').style.display = 'block';
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
