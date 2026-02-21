import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-6 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://github.com/FlashArk271"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-accent-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/aryan10khandelwal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-accent-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:aryankhandelwal243@gmail.com"
            className="p-2 text-gray-400 hover:text-accent-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}
