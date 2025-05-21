import Image from "next/image";
import StatusIndicator from "@/components/ui/StatusIndicator";
import InfoSection from "@/components/ui/InfoSection";
import { GetCharacterByIdQuery } from "@/__generated__/graphql";

interface CharacterProfileProps {
  character: GetCharacterByIdQuery["character"];
}

export default function CharacterProfile({ character }: CharacterProfileProps) {
  if (!character) {
    return (
      <div className="p-6">
        <p>Character not found.</p>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="md:flex">
      {/* Character image */}
      <div className="md:w-1/3 relative">
        <div className="aspect-square relative">
          <Image
            src={
              character.image ||
              `https://via.placeholder.com/300x300?text=${encodeURIComponent(
                character.name || "Character"
              )}`
            }
            alt={character.name || ""}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Character info */}
      <div className="p-6 md:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{character.name}</h1>

        <div className="flex items-center mb-4">
          <StatusIndicator status={character.status || "status-unknown"} />
          <span className="text-lg">
            {character.status} - {character.species}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic info */}
          <InfoSection title="Basic Information">
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-[var(--muted)]">Gender</dt>
                <dd>{character.gender}</dd>
              </div>

              {character.type && (
                <div>
                  <dt className="text-sm text-[var(--muted)]">Type</dt>
                  <dd>{character.type}</dd>
                </div>
              )}

              <div>
                <dt className="text-sm text-[var(--muted)]">
                  First Appearance
                </dt>
                <dd>
                  {character.created
                    ? formatDate(character.created)
                    : "Unknown"}
                </dd>
              </div>
            </dl>
          </InfoSection>

          {/* Location info */}
          <InfoSection title="Location">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-[var(--muted)]">Origin</dt>
                <dd className="font-medium">
                  {character.origin?.name || "Unknown"}
                </dd>
                {character.origin?.type && (
                  <dd className="text-sm">
                    {character.origin.type}, {character.origin.dimension}
                  </dd>
                )}
              </div>

              <div>
                <dt className="text-sm text-[var(--muted)]">
                  Last Known Location
                </dt>
                <dd className="font-medium">
                  {character.location?.name || "Unknown"}
                </dd>
                {character.location?.type && (
                  <dd className="text-sm">
                    {character.location.type}, {character.location.dimension}
                  </dd>
                )}
              </div>
            </dl>
          </InfoSection>
        </div>
      </div>
    </div>
  );
}
