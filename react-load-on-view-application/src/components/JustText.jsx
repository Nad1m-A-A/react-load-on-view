function JustText({ text, style }) {
  if (!text) return;
  return (
    <p
      className={`${style} max-w-sm md:max-w-max`}
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
  );
}

export default JustText;
