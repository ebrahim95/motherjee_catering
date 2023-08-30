import { Link } from 'react-router-dom'


interface Props {
  heading: string,
  image: string,
}


export const Cardfood = (props: Props) => {

  return (
    <div className="card card-compact max-w-sm bg-base-100 ring-2 ring-amber-700 outline outline-2 outline-amber-400 outline-offset-4 rounded-2xl">
      <figure className='ring-2 ring-accent m-0'>
        <img className="w-72 h-28 md:h-64 " src={props.image} alt={props.heading} />
      </figure>
      <div className="card-body bg-secondary items-center ring-2 ring-amber-900 rounded-b-2xl hover:bg-accent-focus hover:ring ">
        <Link className="card-title m-0 font-bold no-underline" to={`food_category/${props.heading}`}>{props.heading}</Link>
      </div>
    </div >
  )
}

