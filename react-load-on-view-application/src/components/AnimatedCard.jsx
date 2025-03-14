import { withViewObserver } from "../../../src/index";

function AnimatedCard({ src }) {
  return (
    <div>
      <img
        src={src}
        className="rounded-sm shadow-lg object-contain bg-secondary-100"
      />
    </div>
  );
}

export default withViewObserver(AnimatedCard, {
  animate: true,
  threshold: 0.3,
});
