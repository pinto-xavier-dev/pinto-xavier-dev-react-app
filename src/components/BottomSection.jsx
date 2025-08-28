export default function BottomSection() {
  return (
    <section className="bg-black text-white p-8">
      <h2 className="text-xl font-bold mb-4">📂 Quick Links</h2>
      <div className="flex flex-wrap gap-6">
        <a href="/resume.pdf" className="underline">
          Download Resume
        </a>
        <a href="mailto:your.email@example.com" className="underline">
          Contact Email
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="underline">
          LinkedIn
        </a>
        <p>Previous Companies: Microsoft, Infosys, TCS</p>
      </div>
    </section>
  );
}
