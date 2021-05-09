import { useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreResponse {
  title: string;
}

interface HeaderProps {
  selectedGenreId: number;
}

export function Header({ selectedGenreId }: HeaderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponse>(
    {} as GenreResponse
  );

  useEffect(() => {
    api.get<GenreResponse>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
