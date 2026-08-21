import { Github, Linkedin, Twitter } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Connect with me on:</h3>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/sidthakkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/woustachemax"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://x.com/woustachemax7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <Twitter size={24} />
        </a>
      </div>
    </div>
  );
}
