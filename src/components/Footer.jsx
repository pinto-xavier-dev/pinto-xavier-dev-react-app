export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6">
      <p className="italic">“Be still and know.”</p>
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} | Last Updated Portfolio
      </p>
    </footer>
  );
}
