import useSound from "use-sound";
import fert from './sounds/fert.mp3';
import Button from "./styled/Button";
import fertToo from './sounds/fert-too.mp3'

const fertButton = () => {
    const [play] = useSound(fert)

    return (<Button onClick={play}>Does This Work?</Button>)
}

const fertButtonToo = () => {
    const [play] = useSound(fertToo)

    return (<Button danger onClick={play}>Sorry, we'll try that again</Button>)
}


export { fertButton, fertButtonToo }
