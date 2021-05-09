import { useState } from "react";

import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />

      <div className="container">
        <Header selectedGenreId={selectedGenreId} />
        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  );
}
