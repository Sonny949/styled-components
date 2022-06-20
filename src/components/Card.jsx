import Heading from "./styled/Heading";
import { fertButton, fertButtonToo } from "./Fert";

export default function Card() {
    
    return (
        <>
            <Heading color="green" bg="black">What's up Doc?</Heading>
            <p>This heading was styled using the React styled-component add-on package. If you would like to use it in the future, navigate into your app folder from the command line and run the command 'npm i styled-components'</p>
            <span>{fertButton()}</span><span>{fertButtonToo()}</span>
        </>
        
    )
}