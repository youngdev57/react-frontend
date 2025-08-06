type Props = {
  description: string;
  emoji?: string;
};

export default function Callout({ emoji = "📌", description }: Props) {
  return (
    <div className="callout">
      <p>{emoji}</p>
      <p>{description}</p>
    </div>
  );
}
