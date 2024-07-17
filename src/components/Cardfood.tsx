import { Link } from 'react-router-dom'


interface Props {
  heading: string,
  image: string,
}


export const Cardfood = (props: Props) => {

  return (
    <div className="card card-compact max-w-sm bg-base-100 outline outline-3 outline-primary rounded-2xl">
      <figure className='ring-2 ring-accent m-0'>
        <img className="w-72 h-28 md:h-64 " src={props.image} alt={props.heading} />
      </figure>
      <div className="card-body bg-red-50 items-center rounded-b-2xl hover:bg-red-100">
        <Link className="card-title m-0 font-bold no-underline" to={`food_category/${props.heading}`}>{props.heading}</Link>
      </div>
    </div >
  )
}

