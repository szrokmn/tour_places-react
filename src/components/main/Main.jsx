import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
    console.log(data)
    return(
        <div className="main">
            {data.map((item, id)=>
                <Card {...item} key={id}/>
            )}
        </div>
    )
}
export default Main;