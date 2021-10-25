//Importe le composant Header
import Header from "./Header";
//Importe render et screen dans library
import {render, screen} from "@testing-library/react"

//Affiche le résulat du test
test("Affiche le résultat", () =>{
const rendered = render(<Header/>);

//Effet visuel
expect(rendered).toMatchSnapshot();

})