import { Link } from 'react-router-dom'


interface Props {
  heading: string
}

export const Cardfood = (props: Props) => {

  return (
    <div className="card card-compact max-w-sm bg-base-100 ">
      <figure className='m-0'>
        <img src="indian-sweet.webp" alt="indian-sweet" />
      </figure>
      <div className="card-body items-center ring-1 ring-accent rounded-b-xl  hover:bg-accent-focus hover:rounded-b-xl">
        <Link className="card-title m-0 font-bold no-underline" to={`food_category/${props.heading}`}>{props.heading}</Link>
      </div>
    </div >
  )
}

