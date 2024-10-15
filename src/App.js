import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tapan Hegde</h1>
        <p>Site Reliability Engineer | Cloud & DevOps Specialist</p>
      </header>

      <main>
        {/* About Me Section */}
        <section className="section">
          <h2>About Me</h2>
          <p>Results-driven software engineer with 11+ years of experience in Web development, cloud platforms, CI/CD, automation, and project management. Proficient in Kubernetes, infrastructure as code (IaC), and containerization, with a focus on optimizing workflows to enhance efficiency, scalability, and reliability.</p>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2>Skills</h2>
          <div className="skills">
            <span className="skill">Kubernetes</span>
            <span className="skill">Terraform</span>
            <span className="skill">AWS</span>
            <span className="skill">GCP</span>
            <span className="skill">Azure</span>
            <span className="skill">CI/CD</span>
            <span className="skill">Docker</span>
            <span className="skill">Python</span>
            <span className="skill">Bash</span>
            <span className="skill">Jenkins</span>
            <span className="skill">Ansible</span>
            <span className="skill">Prometheus</span>
            <span className="skill">Grafana</span>
            <span className="skill">EFK Stack</span>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Site Reliability Engineer - Xoriant Technologies</h3>
            <p>Nov 2023 – Present</p>
            <ul>
              <li>Established end-to-end Kubernetes clusters in AWS and GCP environments.</li>
              <li>Optimized cloud resource usage and implemented alert mechanisms.</li>
              <li>Designed migration solutions to GNS-based architecture.</li>
              <li>Developed CI/CD pipelines using GitHub Actions for seamless deployment.</li>
            </ul>
          </div>
          {/* Add more experiences as needed */}
        </section>

        {/* Certifications Section */}
        <section className="section">
          <h2>Certifications</h2>
          <ul>
            <li>IBM Data Science Specialization</li>
            <li>GitLab CI Fundamentals</li>
            <li>Machine Learning with Python</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="section contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:tapanhegde091@gmail.com">tapanhegde091@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/tapanhegde" target="_blank">LinkedIn Profile</a></p>
          <p>GitHub: <a href="https://github.com/sheldon-cooper26" target="_blank">GitHub Profile</a></p>
          <p>Medium: <a href="https://medium.com/@hegdetapan2609" target="_blank">Medium Profile</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;

