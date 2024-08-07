import React, {useState, useEffect} from "react";

interface TileProps {
  name: string;
}

const Tile: React.FC<TileProps> = ({name}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const module = await import(`../../assets/tiles/${name}.svg`);
        setSvgContent(module.default);
      } catch (error) {
        console.error(`Error loading SVG: ${name}`, error);
        setSvgContent(null);
      }
    };

    loadSVG().catch(error => {
      console.error("Unexpected error in loadSVG():", error);
    });
  }, [name]);

  return (
    <div className="tile">
      {svgContent ? (
        <img src={svgContent} alt={name}/>
      ) : (
        <p>Tile Error</p>
      )}
    </div>
  );
};

export default Tile;
