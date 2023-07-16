import { useParams } from 'react-router-dom'
import { results_types } from '../utils/types';


type result_no_catergoy = Omit<results_types, 'Category'>

interface Props {
  csv: results_types[]
}

const FoodCard = (props: result_no_catergoy) => {
  return (
    <div className="card card-compact card-bordered max-w-sm bg-base-200 shadow-md ring-2 ring-accent">
      <figure className='m-0'><img src="indian-sweet.webp" alt={props?.Name} /></figure>
      <div className="card-body ring-2 ring-accent rounded-b-lg hover:bg-secondary-focus">
        <h2 className="card-title">{props?.Name} <br />{props?.Bengali}</h2>
        <p>{props?.Description}</p>
        {/* <div className="card-actions justify-end"> */}
        {/*   <button className="btn btn-primary">Buy Now</button> */}
        {/* </div> */}
      </div>
    </div>

  )
}

//renders the food cards on the router Food Category

export function FoodType(props: Props) {
  const { type } = useParams();
  return (
    <div className="mx-auto w-5/6 mt-12 flex flex-col  items-center" >
      <h1>{type}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-5">
        {props.csv.map(item_object => {
          if (item_object.Category === type) {
            return <FoodCard Name={item_object.Name}
              Description={item_object.Description}
              Image={item_object.Image}
              Half_tray={item_object.Half_tray}
              Full_tray={item_object.Full_tray}
              Bengali={item_object.Bengali}
            />
          }
        })}
      </div>
    </div>
  )
}
