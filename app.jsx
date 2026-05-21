import React, { useState } from 'react';
import { Mail, Linkedin, Github, Award, BookOpen, Terminal, Database, BarChart3, ChevronRight, User, ShieldCheck, MapPin, Code } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const navItems = ['Home', 'Philosophy', 'Expertise', 'Initiatives', 'CodeSamples', 'Credentials'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-widest">JAMES MATOVU</h1>
          <div className="hidden md:flex gap-6">
            {navItems.map(item => (
              <button 
                key={item} 
                onClick={() => setActiveSection(item)}
                className={`text-xs uppercase tracking-wider transition-colors ${activeSection === item ? 'text-blue-400 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <a href="mailto:matovujames193@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">Contact</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {activeSection === 'Home' && (
          <header className="space-y-8 animate-in fade-in duration-700">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-900 bg-blue-950/30 text-blue-300 text-xs font-semibold tracking-widest uppercase">
              Statistician & Database Administrator
            </div>
            <h2 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.9]">
              Data Integrity <br /> as a Foundation.
            </h2>
            <p className="text-2xl text-slate-400 max-w-3xl leading-relaxed">
              Bridging complex data systems with community-led development. BSc Statistics graduate (CGPA 4.24) specialized in health informatics, field-based surveillance, and automated data pipelines for high-impact public health policy.
            </p>
          </header>
        )}

        {activeSection === 'Philosophy' && (
          <section className="space-y-12 animate-in fade-in duration-700">
            <h3 className="text-4xl font-bold text-white flex items-center gap-4"><User className="text-blue-500" size={36} /> Professional Character</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-lg text-slate-400 leading-loose border-l-2 border-blue-900 pl-8">
                I view data as the "source of truth" upon which sustainable policy is built. My work is defined by rigorous analytical foundations, a resilient approach to challenging field logistics, and a commitment to absolute ethical integrity in the handling of public health information. I thrive in high-pressure environments, from national-level Ministry of Health databases to remote rural field implementation.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Rigorous Analytical Foundations", desc: "Systematic doubt, verification, and reproducible analysis." },
                  { title: "Grounded Resilience", desc: "Proven capacity for intensive rural field travel, logistics management, and data collection under constraints." },
                  { title: "Ethical Discipline", desc: "Certified in NIH GCP and MUREC guidelines; ensuring strict confidentiality and data anonymization." }
                ].map(item => (
                  <div key={item.title} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'Expertise' && (
          <section className="space-y-12 animate-in fade-in duration-700">
            <h3 className="text-4xl font-bold text-white">Technical & Field Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Data Engineering & Analytics", icon: <Terminal size={32} />, skills: ["Advanced SQL (ETL/Optimization)", "R (Automated Data Cleaning)", "Python", "STATA"] },
                { title: "Health Informatics", icon: <Database size={32} />, skills: ["DHIS2 (Aggregate & Event)", "REDCap Logic/Architecture", "Data Quality Auditing"] },
                { title: "Mobile Field Architecture", icon: <MapPin size={32} />, skills: ["Kobo Toolbox & ODK Design", "Offline-first protocols", "Complex skip/validation logic"] },
                { title: "Field Operations & Liaison", icon: <BarChart3 size={32} />, skills: ["Multi-district Coordination", "Community 'Baraza' facilitation", "Supply chain auditing", "Linguistic (Luganda/English)"] }
              ].map((group, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                  <div className="text-blue-500 mb-6">{group.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-6">{group.title}</h4>
                  <ul className="space-y-3">
                    {group.skills.map(s => <li key={s} className="text-slate-400 flex items-center gap-2"><ChevronRight size={16} className="text-blue-600"/> {s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'Initiatives' && (
          <section className="space-y-12 animate-in fade-in duration-700">
            <h3 className="text-4xl font-bold text-white">Selected Initiatives & Impact</h3>
            {[
                { title: "Ministry of Health Backlog Resolution", desc: "Systematically cleaned 3,500+ records and automated the longitudinal data pipeline for 136 districts, reducing cleaning workloads by 40%." },
                { title: "Mpox Outbreak Field Response (Africa CDC)", desc: "Deployed to high-risk zones; designed and deployed secure Kobo Toolbox questionnaires to map community transmission pathways under emergency constraints." },
                { title: "Large-Scale Socio-Economic Assessments", desc: "Maintained 100% data submission rates for rural household surveys, facilitating village-level Baraza sessions to validate findings." }
            ].map(proj => (
                <div key={proj.title} className="bg-slate-900 p-10 rounded-3xl border border-slate-800 space-y-4">
                    <h4 className="text-2xl font-bold text-blue-400">{proj.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-lg">{proj.desc}</p>
                </div>
            ))}
          </section>
        )}

        {activeSection === 'CodeSamples' && (
          <section className="space-y-12 animate-in fade-in duration-700">
            <h3 className="text-4xl font-bold text-white flex items-center gap-4"><Code className="text-blue-500" size={36}/> Analytics & Code Samples</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
                <h4 className="text-xl font-bold text-white mb-4">SQL: ETL & Validation</h4>
                <pre className="bg-slate-950 p-4 rounded-xl text-blue-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`SELECT 
  facility_id, 
  reporting_week,
  COUNT(*) as total_records,
  SUM(CASE WHEN clinical_score IS NULL THEN 1 ELSE 0 END) as incomplete_count
FROM surveillance_data
GROUP BY facility_id, reporting_week
HAVING incomplete_count > 0;`}
                </pre>
              </div>
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
                <h4 className="text-xl font-bold text-white mb-4">R: Automated Reporting</h4>
                <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`library(tidyverse)
# Automated data cleaning & trend analysis
clean_data <- raw_data %>%
  filter(!is.na(district_id)) %>%
  group_by(district_name) %>%
  summarise(avg_incidence = mean(incidence_rate))`}
                </pre>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'Credentials' && (
          <section className="space-y-12 animate-in fade-in duration-700">
            <h3 className="text-4xl font-bold text-white flex items-center gap-4"><Award className="text-blue-500" size={36}/> Professional Credentials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                  { title: "DHIS2 Academy Expert", org: "University of Oslo / HISP Centre" },
                  { title: "NIH Good Clinical Practice (GCP)", org: "Clinical Trials & Ethics" },
                  { title: "Ethics and Code of Conduct", org: "African Union (AU Learn)" },
                  { title: "BSc Statistics (CGPA 4.24)", org: "Kyambogo University" }
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                  <div className="p-3 bg-blue-950 text-blue-400 rounded-xl"><BookOpen size={24}/></div>
                  <div>
                    <div className="font-semibold text-white text-lg">{c.title}</div>
                    <div className="text-slate-400 text-sm">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 mt-12 border-t border-slate-900 text-slate-600 text-sm">
        © 2026 James Matovu. Precision in Data Science.
      </footer>
    </div>
  );
}
