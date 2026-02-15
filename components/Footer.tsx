export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-lighter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LYQ / 凌逸清. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
              GitHub
            </a>
            <a href="mailto:contact@lyq017.cn" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
