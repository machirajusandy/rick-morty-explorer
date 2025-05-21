import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CharacterCard from "@/components/character/CharacterCard";
import { GetCharactersQuery } from "@/__generated__/graphql";

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="" {...props} />;
  },
}));

// Mock next/link
vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

type Character = NonNullable<
  NonNullable<GetCharactersQuery["characters"]>["results"]
>[number];

const mockCharacter: Character = {
  id: "1",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "Mad Scientist",
  gender: "Male",
  location: { __typename: "Location", name: "Earth (Replacement Dimension)" },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

describe("CharacterCard", () => {
  it("renders character information correctly", () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Alive - Human")).toBeInTheDocument();
    expect(screen.getByText("Type: Mad Scientist")).toBeInTheDocument();
    expect(screen.getByText("Last known location:")).toBeInTheDocument();
    expect(
      screen.getByText("Earth (Replacement Dimension)")
    ).toBeInTheDocument();
    const image = screen.getByAltText("Rick Sanchez") as HTMLImageElement;
    expect(image.src).toBe(
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
    const link = screen.getByRole("link") as HTMLAnchorElement;
    expect(link.href).toContain("/character/1");
  });

  it("renders placeholder image if character image is null", () => {
    const characterWithoutImage = { ...mockCharacter, image: null };
    render(<CharacterCard character={characterWithoutImage} />);
    const image = screen.getByAltText("Rick Sanchez") as HTMLImageElement;
    expect(image.src).toContain("/images/character-placeholder.png");
  });

  it("renders 'Character' as alt text if character name is null", () => {
    const characterWithoutName = { ...mockCharacter, name: null };
    render(<CharacterCard character={characterWithoutName} />);
    const image = screen.getByAltText("Character") as HTMLImageElement;
    expect(image.src).toBe(
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
  });

  it("does not render type if character type is empty", () => {
    const characterWithoutType = { ...mockCharacter, type: "" };
    render(<CharacterCard character={characterWithoutType} />);
    expect(screen.queryByText("Type:")).not.toBeInTheDocument();
  });

  it("renders 'unknown' if location name is null", () => {
    const characterWithoutLocationName = {
      ...mockCharacter,
      location: { ...mockCharacter.location, name: null },
    };
    render(<CharacterCard character={characterWithoutLocationName} />);

    const locationNameElement = screen.queryByText(
      "Earth (Replacement Dimension)"
    );
    expect(locationNameElement).not.toBeInTheDocument();
  });

  it("applies 'status-alive' class for Alive status", () => {
    render(<CharacterCard character={mockCharacter} />);
    const statusIndicator =
      screen.getByText("Alive - Human").previousElementSibling;
    expect(statusIndicator).toHaveClass("status-alive");
  });

  it("applies 'status-dead' class for Dead status", () => {
    const deadCharacter = { ...mockCharacter, status: "Dead" };
    render(<CharacterCard character={deadCharacter} />);
    const statusIndicator =
      screen.getByText("Dead - Human").previousElementSibling;
    expect(statusIndicator).toHaveClass("status-dead");
  });

  it("applies 'status-unknown' class for unknown status", () => {
    const unknownStatusCharacter = { ...mockCharacter, status: "unknown" };
    render(<CharacterCard character={unknownStatusCharacter} />);
    const statusIndicator =
      screen.getByText("unknown - Human").previousElementSibling;
    expect(statusIndicator).toHaveClass("status-unknown");
  });

  it("returns null if character prop is null", () => {
    const { container } = render(<CharacterCard character={null} />);
    expect(container.firstChild).toBeNull();
  });
});
