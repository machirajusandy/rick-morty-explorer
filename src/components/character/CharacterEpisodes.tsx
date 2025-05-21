import { GetCharacterByIdQuery } from "@/__generated__/graphql";
import EpisodeCard from "@/components/episode/EpisodeCard";

type CharacterEpisodesProps = {
  episodes: NonNullable<GetCharacterByIdQuery["character"]>["episode"];
};

export default function CharacterEpisodes({
  episodes,
}: CharacterEpisodesProps) {
  return (
    <div className="p-6 border-t border-[var(--border)]">
      <h2 className="text-xl font-semibold mb-4 text-[var(--primary)]">
        Episodes ({episodes.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {episodes.map((episode, index) => (
          <EpisodeCard
            key={episode?.id ?? `episode-index-${index}`}
            episode={episode}
          />
        ))}
      </div>
    </div>
  );
}
