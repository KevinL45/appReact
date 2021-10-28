//Importe le composant Login
import Login from "./Login";
//Importe render et screen dans library
import {render, screen} from "@testing-library/react"

//Test
test("Test", () =>{
const rendered = render(<Login/>);

//Effet visuel
expect(rendered).toMatchSnapshot();

})