"use client";

import type { GetCharactersQuery } from "@/__generated__/graphql";
import CharacterGrid from "@/components/character/CharacterGrid";
import Pagination from "@/components/ui/Pagination";
import type { ApolloQueryResult } from "@apollo/client";
import { use } from "react";

type CharacterListProps = {
  characterList: Promise<ApolloQueryResult<GetCharactersQuery>>;
  currentPage: number;
};

export default function CharacterList({
  characterList,
  currentPage,
}: CharacterListProps) {
  const { data } = use(characterList);
  const characters = data.characters?.results || [];
  const totalPages = data.characters?.info?.pages || 1;
  return (
    <>
      <CharacterGrid characters={characters} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
