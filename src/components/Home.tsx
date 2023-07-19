import { Cardfood } from "./Cardfood"
import { Link } from "react-router-dom"
interface Props {
    csv: string[]
}

function Home(props: Props) {

    return (
        <div className="mx-auto w-5/6 mt-12 flex flex-col items-center" >
            <div className="text-lg breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
            <h1>
                MotherJee's Catering
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {props.csv.map((value, index) => <Cardfood key={index} heading={value} />)}
            </div>
        </div >
    )
}

export default Home
