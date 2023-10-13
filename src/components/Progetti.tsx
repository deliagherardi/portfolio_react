import { useEffect, useState } from "react";

//useState per agigornare l'interfaccia quando cambia valore
const Progetti = () => {
  const [progetti, setProgetti] = useState<
    {
      name: string;
      html_url: string;
    }[]
  >([]);

  //useEffect per fare la chiamata all'API e aggiornare il valore di progetti
  useEffect(() => {
    fetch("https://api.github.com/users/deliagherardi/repos")
      .then((response) => response.json())
      .then((data) => setProgetti(data));
  }, []);

  return (
    <>
      {progetti.map((progetto) => (
        <div>
          <a className="github" href={progetto.html_url} target="_blank">
            {/* target="_blank" per aprire il link in un'altra pagina */}
            <h1>{progetto.name}</h1>
          </a>
        </div>                                  
      ))}
    </>
  );
};

export default Progetti;
