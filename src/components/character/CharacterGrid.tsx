import { GetCharactersQuery } from "@/__generated__/graphql";
import CharacterCard from "@/components/character/CharacterCard";

interface CharacterGridProps {
  characters: NonNullable<GetCharactersQuery["characters"]>["results"];
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  if (!characters || characters?.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-[var(--muted)]">No characters found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters?.map((character, index) => (
        <CharacterCard
          key={character?.id ?? `characte-index-${index}`}
          character={character}
        />
      ))}
    </div>
  );
}
