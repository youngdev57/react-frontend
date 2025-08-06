import type { PropsWithChildren } from "react";

type Props = {
  emoji?: string;
};

export default function Callout({
  emoji = "📌",
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="callout">
      <p>{emoji}</p>
      <p>{children}</p>
    </div>
  );
}
