//Importe le composant Home
import Home from "./Home";
//Importe render et screen dans library
import {render, screen} from "@testing-library/react"

//Affiche le résulat du test
test("Affiche le résultat", () =>{
const rendered = render(<Home/>);

//Effet visuel
expect(rendered).toMatchSnapshot();

})