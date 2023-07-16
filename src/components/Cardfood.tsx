import { Link } from 'react-router-dom'


interface Props {
  heading: string
}

export const Cardfood = (props: Props) => {

  return (
    <div className="card card-compact max-w-sm bg-base-100  shadow-sm shadow-black ">
      <figure className='ring-2 ring-accent  m-0'>
        <img src="indian-sweet.webp" alt="indian-sweet" />
      </figure>
      <div className="card-body bg-secondary items-center rounded-b-lg ring-2 ring-accent hover:bg-accent-focus hover:ring ">
        <Link className="card-title m-0 font-bold no-underline" to={`food_category/${props.heading}`}>{props.heading}</Link>
      </div>
    </div >
  )
}

