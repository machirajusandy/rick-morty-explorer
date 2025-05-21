import { notFound } from "next/navigation";
import CharacterProfile from "@/components/character/CharacterProfile";
import CharacterEpisodes from "@/components/character/CharacterEpisodes";
import BackButton from "@/components/ui/BackButton";
import { getClient } from "@/lib/apollo-client";
import { GET_CHARACTER_BY_ID, GET_ALL_CHARACTER_IDS } from "@/graphql/queries";

type Params = Promise<{
  id: string;
}>;

// Define the function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  const allIds: { id: string }[] = [];
  const { data } = await getClient().query({
    query: GET_ALL_CHARACTER_IDS,
    variables: { page: 1 },
  });
  if (data.characters?.results) {
    data.characters.results.forEach((character) => {
      if (character?.id) {
        allIds.push({ id: character.id });
      }
    });
  }
  return allIds;
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  // Fetch character data by ID
  const { data } = await getClient().query({
    query: GET_CHARACTER_BY_ID,
    variables: { id },
  });

  // If character is not found, show 404 page
  if (!data.character) {
    notFound();
  }

  const character = data.character;

  return (
    <main className="container mx-auto px-4 py-8">
      <BackButton label="Back to Characters" className="mb-6" />

      <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
        <CharacterProfile character={character} />

        {character.episode && character.episode.length > 0 && (
          <CharacterEpisodes episodes={character.episode} />
        )}
      </div>
    </main>
  );
}

// Generate page metadata dynamically
export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const { data } = await getClient().query({
    query: GET_CHARACTER_BY_ID,
    variables: { id },
  });

  if (!data.character) {
    return {
      title: "Character Not Found",
    };
  }

  return {
    title: `${data.character.name} | Rick and Morty Explorer`,
    description: `Details about ${data.character.name} from Rick and Morty, a ${data.character.species} who is ${data.character.status}`,
    openGraph: {
      images: [data.character.image],
    },
  };
}
