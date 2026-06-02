
const SkillsSection = () => {
  const skills = ["Laravel", "React", "TypeScript", "Next.js", "Git/GitHub"];
  return (
    <section id="skills" className="bg-slate-100 h-screen">
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 border border-slate-500 shadow-lg rounded-lg bg-green-100/50 font-bold">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection