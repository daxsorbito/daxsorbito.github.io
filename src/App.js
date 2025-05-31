import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaCertificate, FaTools, FaBriefcase, FaBlog } from 'react-icons/fa';

export default function App() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(dark ? 'light' : 'dark');
    root.classList.add(dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Accent color for badges and icons
  const accent = dark ? 'bg-blue-700' : 'bg-blue-600';

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-100 via-blue-100 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 shadow-lg backdrop-blur-md p-6 flex flex-col sm:flex-row justify-between items-center rounded-b-2xl mb-8 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/C5603AQHPGyL3K8-vjw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629783510372?e=1753920000&v=beta&t=f-1H-sUVdLiPa1DmmwpKX41ho_EvK87MrqQZ-CY_Oyw"
            alt="Avatar"
            className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-md"
          />
          <div>
            <h1 className="text-2xl font-extrabold text-blue-800 dark:text-blue-300 tracking-tight">Gaspar Dax A. Sorbito</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Senior Software Engineer @ Microsoft</p>
          </div>
        </div>
        <nav className="flex gap-6 mt-4 sm:mt-0 items-center">
          <a href="#about" className="font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="#certifications" className="font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Certifications</a>
          <a href="#skills" className="font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
          <a href="#experience" className="font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Experience</a>
          <a href="#blog" className="font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</a>
          <button
            onClick={() => setDark(!dark)}
            className="text-2xl ml-4 text-blue-600 dark:text-yellow-300 hover:scale-110 transition"
            aria-label="Toggle theme"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>
      <main className="p-6 max-w-4xl mx-auto space-y-8 scroll-pt-32">
        <section id="about" className="scroll-mt-32 bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-md p-6 mb-4 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <span>About</span>
            </h2>
            <div className="flex gap-3 text-blue-600 dark:text-blue-400">
              <a href="https://github.com/daxsorbito" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaGithub size={28} /></a>
              <a href="https://linkedin.com/in/daxsorbito" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaLinkedin size={28} /></a>
            </div>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-2">
            Senior Software Engineer with 20+ years of experience in cloud, ML, and full-stack engineering. Passionate about building scalable systems and leading high-performing teams.
          </p>
        </section>

        <section id="certifications" className="scroll-mt-32 bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-md p-6 mb-4 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-3">
            <FaCertificate className="text-yellow-500" /> Certifications
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${accent} shadow`}>Certified Scrum Master</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${accent} shadow`}>AWS Technical Essentials</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${accent} shadow`}>MCSD: Web Applications</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${accent} shadow`}>MongoDB for Node.js Developers</span>
          </div>
        </section>

        <section id="skills" className="scroll-mt-32 bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-md p-6 mb-4 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-3">
            <FaTools className="text-green-500" /> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Golang', 'Python', 'Terraform', 'Databricks', 'Azure DevOps', 'ML Pipelines'].map(skill => (
              <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium shadow">{skill}</span>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-32 bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-md p-6 mb-4 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-3">
            <FaBriefcase className="text-purple-500" /> Experience
          </h2>
          <div className="space-y-8 text-sm">
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">Microsoft</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Senior Software Engineer (Nov 2019 – Present)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li><strong>ISKG-Web:</strong> Internal tool built with NextJs, TypeScript, ReactJS. Includes AAD Auth, Zoom/Pan in graph view.</li>
                <li><strong>Feature Store:</strong> Researched Feast, Databricks FS, Feathr, Kafka streaming. Supported Feathr team.</li>
                <li><strong>GSX:</strong> Implemented Feast-based ML pipeline using Databricks. Led features and team tasks.</li>
                <li><strong>GRAB Vending:</strong> Automated infra via GitLab + CAF templates. Timeline + team + stakeholder coordination.</li>
                <li><strong>Temenos:</strong> AzDO pipeline, JMeter, Gremlin chaos testing. Scrum master responsibilities.</li>
                <li><strong>UBS Knowledge Search:</strong> Built ingestion & API layer for Azure Cognitive Search using Swagger + React.</li>
                <li><strong>Coles MLOps:</strong> Built ML pipeline for data sourcing phase in AzDO.</li>
                <li><strong>OSS Projects:</strong> Terraform provider (azurerm v2.42.0), PublishHTMLReport (multi-file support).</li>
                <li><strong>Tech stack:</strong> AzDO, GitLab, ML Pipelines, Databricks, Airflow, Feast, Feathr, Terraform, React, Flask, Golang.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">Singapore Power – Digital</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Senior Software Engineer 1 (Jun 2018 – Nov 2019)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Aurora: Energy forecasting with GraphQL + React admin/dashboard.</li>
                <li>Energy Live Dashboard: React-based redesign.</li>
                <li>Tech stack: Golang, React, Redux, RoR, Prometheus, Grafana, Kubernetes.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">ANZ</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Quant Engineer (Jun 2017 – May 2018)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Converted Excel models to React/TypeScript + API-powered web app (SkyNet).</li>
                <li>Tech stack: React, TypeScript, Jest, Java, C#.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">Ruckus Wireless</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Senior Software Engineer (Apr 2015 – Jun 2017)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>SPoT: MongoDB API + React frontend for indoor GPS data.</li>
                <li>Smart Analytics: React + ImplyDB API.</li>
                <li>Tech: Spark, Scala, React, AWS ECS, Padrino, Docker.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">AsiaRooms Pte Ltd</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Senior Software Engineer (Feb 2014 – Mar 2015)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Monolith to microservices migration using React + Node.</li>
                <li>Tech: NodeJS, Express, RabbitMQ, Redis, MongoDB, Mocha.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">Credit Agricole – CIB</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Senior Application Consultant (Oct 2012 – Jan 2014)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Silverlight + WCF apps (BMA/EV3). Fitnesse for BDD.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">BMC Group Asia Inc.</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Associate Software Architect (Mar 2008 – Oct 2012)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Led teams, scoped timelines, managed stakeholders. ASP.NET MVC + WCF.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">Exist Global</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Technical Lead (Aug 2007 – Mar 2008)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Architected TheLinkUp.com. Spring.NET + SQL Server.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">Syrinx Incorporated</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Lead Software Developer / OO Architect (Oct 2006 – Aug 2007)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>ASP.NET, C#, SQL Server applications.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">N-Pax Cebu Corporation</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Sr. Software Developer / Supervisor (Sep 2001 – Oct 2006)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Full-stack .NET, Java, Oracle. Led development teams.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-200">AMA Computer College</h3>
              <p className="italic text-slate-600 dark:text-slate-400">Instructor (Oct 2000 – Mar 2001)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                <li>Taught major CS subjects, advised thesis work.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="blog" className="scroll-mt-32 bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-3">
            <FaBlog className="text-pink-500" /> Blog
          </h2>
          <ul className="list-disc list-inside text-blue-600 dark:text-blue-400 space-y-1">
            <li>
              <a href="#" className="hover:underline hover:text-blue-800 dark:hover:text-blue-200 transition">How I Built a Cloud Automation Pipeline</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-800 dark:hover:text-blue-200 transition">Lessons from Open Source Contributions</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-800 dark:hover:text-blue-200 transition">End-to-End ML Ops with Azure</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="text-center text-xs text-slate-500 dark:text-slate-400 py-4 mt-8">
        &copy; {new Date().getFullYear()} Gaspar Dax A. Sorbito. All rights reserved.
      </footer>
    </div>
  );
}