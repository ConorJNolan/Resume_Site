import logo from './logo.svg';
import './App.css';

function App() {
  return (
<body>
    <header>
        <h1>Your Name</h1>
        <nav>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section id="introduction">
            <h2>Introduction</h2>
            <p>Your brief introduction goes here.</p>
        </section>

        <section id="about">
            <h2>About Me</h2>
            <p>Your detailed overview goes here.</p>
        </section>

        <section id="experience">
            <h2>Experience</h2>
            <ul>
                <li>
                    <h3>Job Title</h3>
                    <p>Company Name | Dates of Employment</p>
                    <p>Brief description of responsibilities and achievements.</p>
                </li>
            </ul>
        </section>

        <section id="education">
            <h2>Education</h2>
            <ul>
                <li>
                    <h3>Degree Obtained</h3>
                    <p>Institution Name | Dates Attended</p>

                </li>
            </ul>
        </section>

        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>Technical Skill 1</li>
                <li>Technical Skill 2</li>
            </ul>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Project Title</h3>
                    <p>Brief description of the project and your role.</p>

                </li>

            </ul>
        </section>

        <section id="contact">
            <h2>Contact</h2>

            <p>Email: your.email@example.com</p>
            <p>Phone: +1 123-456-7890</p>
        </section>
    </main>


    <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
</body>
  );
}

export default App;
