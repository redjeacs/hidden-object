function Footer() {
  return (
    <div className="absolute text-white bottom-0 w-full h-12  flex justify-center items-center gap-2">
      &copy; 2025 Redjeacs
      <a href="https://github.com/redjeacs/hidden-object" target="_blank">
        <img
          src="../src/assets/github-mark-white.svg"
          alt="GitHub"
          className="w-5"
        />
      </a>
    </div>
  );
}

export default Footer;
