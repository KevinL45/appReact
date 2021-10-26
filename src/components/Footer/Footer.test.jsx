//Importe le composant Footer 
import Footer from "./Footer";
//Importe render et screen dans library
import {render, screen} from "@testing-library/react"

//Test
test("Test", ()=>{
const rendered = render(<Footer/>);

//Effet visuel
expect(rendered).toMatchSnapshot();
}
)