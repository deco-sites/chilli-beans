const BackToTop = () => {
  return (
    <button
      class="underline text-xs text-white"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      voltar ao topo
    </button>
  );
};

export default BackToTop;
