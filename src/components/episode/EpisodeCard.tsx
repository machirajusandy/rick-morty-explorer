import { GetCharacterByIdQuery } from "@/__generated__/graphql";

type EpisodeCardProps = {
  episode: NonNullable<GetCharacterByIdQuery["character"]>["episode"][number];
};

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="p-4 bg-[var(--background)] rounded-md border border-[var(--border)]">
      <h3 className="font-medium">{episode?.name}</h3>
      <p className="text-sm text-[var(--muted)] mt-1">{episode?.episode}</p>
      <p className="text-sm mt-1">Air date: {episode?.air_date || "Unknown"}</p>
    </div>
  );
}
