import { getClient } from "@/lib/apollo-client";
import { GET_CHARACTERS } from "@/graphql/queries";
import { Suspense } from "react";
import CharacterList from "@/components/character/CharacterList";
import SearchBar from "@/components/character/SearchBar";
import CharacterFilters from "@/components/character/CharacterFilters";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

type SearchParams = Promise<{ [key: string]: string | undefined }>;
const filterKeys = ["name", "status", "gender"] as const;

// Define the home page component
export default async function Home(props: { searchParams?: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams?.page || "1"); // Get the page number from search params

  // Initialize filter variables
  // This will hold the filter values based on the keys defined above
  const filterVariables: Partial<
    Record<(typeof filterKeys)[number], string | undefined>
  > = {};

  // Loop through the filter keys and assign values from search params
  // If the value exists in search params, it will be added to filterVariables
  for (const key of filterKeys) {
    const value = searchParams ? searchParams[key] : undefined;
    if (value) {
      filterVariables[key] = value;
    }
  }

  // Create a filter object to be used in the GraphQL query
  const filter =
    Object.keys(filterVariables).length > 0 ? filterVariables : null; // Pass filter only if it has keys

  // Fetch characters data from the GraphQL API
  const characterList = getClient().query({
    query: GET_CHARACTERS,
    variables: {
      page,
      filter,
    },
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Rick and Morty Explorer
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Discover characters from the multiverse
        </p>
      </div>

      <div className="mb-8">
        <p className="text-sm md:text-base">
          <span className="font-bold">Welcome!</span> Browse through characters
          from the Rick and Morty show. Click on any character to see more
          details.
        </p>
      </div>
      <SearchBar />
      <CharacterFilters />
      <Suspense fallback={<LoadingIndicator />}>
        <CharacterList characterList={characterList} currentPage={page} />
      </Suspense>
    </main>
  );
}
