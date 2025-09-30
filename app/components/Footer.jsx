export default function Footer() {
  return (
    <footer className="border-t-2 border-[#8b5cf6] bg-[#050508] mt-20">
      <div className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>
          Criado com 💜 por{" "}
          <a
            href="https://r-labs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5cf6] hover:text-[#06b6d4] transition-colors"
          >
            Renato Alves @ r-labs.dev
          </a>
        </p>
      </div>
    </footer>
  );
}
