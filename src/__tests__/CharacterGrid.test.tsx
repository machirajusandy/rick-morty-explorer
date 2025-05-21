import type { GetCharactersQuery } from "@/__generated__/graphql";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CharacterGrid from "../components/character/CharacterGrid"; // Adjust path as needed

type CharacterResult = NonNullable<
  NonNullable<GetCharactersQuery["characters"]>["results"]
>[number];

describe("CharacterGrid", () => {
  const mockCharacters: CharacterResult[] = [
    {
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        id: "20",
        name: "Earth (Replacement Dimension)",
      },
    },
    {
      id: "2",
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        id: "20",
        name: "Earth (Replacement Dimension)",
      },
    },
  ];

  it("renders a list of CharacterCard components when characters are provided", () => {
    render(<CharacterGrid characters={mockCharacters} />);
    expect(
      screen.getByRole("heading", { name: /Rick Sanchez/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Morty Smith/i })
    ).toBeInTheDocument();
  });
});
