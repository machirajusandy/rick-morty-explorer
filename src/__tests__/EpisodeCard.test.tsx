import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EpisodeCard from "@/components/episode/EpisodeCard";
import { GetCharacterByIdQuery } from "@/__generated__/graphql";

type Episode = NonNullable<
  GetCharacterByIdQuery["character"]
>["episode"][number];

const mockEpisode: Episode = {
  id: "1",
  name: "Pilot",
  air_date: "December 2, 2013",
  episode: "S01E01",
  characters: [],
  created: "2017-11-10T12:56:33.798Z",
};

describe("EpisodeCard", () => {
  it("renders episode information correctly", () => {
    render(<EpisodeCard episode={mockEpisode} />);

    expect(screen.getByText("Pilot")).toBeInTheDocument();
    expect(screen.getByText("S01E01")).toBeInTheDocument();
    expect(screen.getByText("Air date: December 2, 2013")).toBeInTheDocument();
  });

  it("renders 'Unknown' for air_date if it is null", () => {
    const episodeWithoutAirDate = { ...mockEpisode, air_date: null };
    render(<EpisodeCard episode={episodeWithoutAirDate} />);
    expect(screen.getByText("Air date: Unknown")).toBeInTheDocument();
  });
});
