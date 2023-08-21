
import { Link } from 'react-router-dom'

function Contact() {

  const paragraph_style = "border-amber-500 border-2 p-3 rounded-lg"
  return (
    <section id="about" className="mx-auto text-lg lg:w-3/12 md:w-5/6 w-11/12 mt-12 flex flex-col items-center">
      <div className="text-lg breadcrumbs ">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Contact</li>
        </ul>
      </div>

      <h2>Contact Us
      </h2>
      <p className={paragraph_style}>
        Phone Number - 346-368-4831
      </p>
      <p className={`${paragraph_style} -m-2`}>
        TEXT or CALL To Place an Order!
      </p>

    </section>
  )
}

export default Contact 
