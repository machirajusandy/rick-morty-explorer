import clsx from "clsx";

type StatusIndicatorProps = {
  status: string;
};
export default function StatusIndicator({ status }: StatusIndicatorProps) {
  // Determine status color class based on character status
  const statusClass =
    status === "Alive"
      ? "status-alive"
      : status === "Dead"
      ? "status-dead"
      : "status-unknown";

  return (
    <span
      className={clsx("inline-block w-3 h-3 rounded-full mr-2", statusClass)}
    ></span>
  );
}
