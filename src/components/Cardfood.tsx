


import { Link } from 'react-router-dom'

interface Props {
  heading: string
}

const Cardfood = (props: Props) => {

  return (
    <div className="card card-compact max-w-sm bg-base-100 shadow-xl">
      <figure>
        <img src="/indian-sweet.webp" alt="indian-sweet" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title m-0"><Link className="card-title m-0" to={`food_category/${props.heading}`}>{props.heading}</Link></h2>
      </div>
    </div >
  )
}

export default Cardfood
