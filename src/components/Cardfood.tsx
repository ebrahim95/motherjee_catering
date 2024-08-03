import { Link } from 'react-router-dom'


interface Props {
  heading: string,
  image: string,
}


export const Cardfood = (props: Props) => {

  return (
    <div className="card card-compact max-w-sm bg-base-100">
      <figure className='m-0'>
        <img className="w-72 h-28 md:h-64 rounded-2xl" src={props.image} alt={props.heading} />
      </figure>
      <div className="card-body items-center">
        <Link className="card-title m-0 font-bold no-underline" to={`food_category/${props.heading}`}>{props.heading}</Link>
      </div>
    </div >
  )
}

