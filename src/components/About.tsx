
import { Link } from 'react-router-dom'

function About() {

  const paragraph_style = "border-amber-500 border-2 p-3 rounded-lg"
  return (
    <section id="about" className="mx-auto text-lg lg:w-3/12 md:w-5/6 w-11/12 mt-12 flex flex-col items-center">
      <div className="text-lg breadcrumbs ">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
        </ul>
      </div>

      <h2>About Us
      </h2>
      <p className={paragraph_style}>
        Once upon a time, a family embarked on an extraordinary culinary journey. It all began five years ago when they decided to start a home-based catering business called Motherjee's Catering. What started as a simple joke for the family quickly became their beloved business
        name.
      </p>
      <p className={paragraph_style}>
        The heart and soul of Motherjee's Catering was their talented Mom, who expertly whipped up delicious dishes in the kitchen. Assisting her were daughters, who each played a vital role in the success of their enterprise. Brother Saad took care of the invoicing and deliveries, ensuring every customer received their orders with a smile. Sister Miriam curated unique and mouthwatering recipes, infusing their offerings with a touch of
        creativity.
      </p>
      <p className={paragraph_style}>
        To ensure the highest quality ingredients, their devoted father took charge of sourcing groceries. Their commitment to excellence extended to paying three times the price for hand-cut meat, guaranteeing tender and flavorful dishes that left customers craving for
        more.
      </p>
      <p className={paragraph_style}>
        Motherjee's Catering became a go-to choice for various events, catering to joyous occasions such as weddings, graduations, engagements, and vibrant mehndi parties. They even provided convenient meal prep boxes for those seeking wholesome, ready-to-eat meals. Their delectable dishes were infused with the rich and vibrant flavors of their Bangladeshi heritage, leaving a lasting impression on every
        palate.
      </p>
      <p className={paragraph_style}>
        Word of mouth played a crucial role in spreading the magic of Motherjee's Catering. Family members joined forces to share their culinary creations with friends, neighbors, and the community at large. Their passion and dedication resonated with everyone who tasted their delectable offerings, making Motherjee's Catering a household name known for its exceptional food and warm family
        spirit.
      </p>
      <p className={paragraph_style}>
        And so, their journey continued, fueled by the love for their craft and the desire to provide unforgettable dining experiences. Motherjee's Catering served as a shining example of a family coming together, transforming a humble idea into a thriving business that filled not only their pockets but also the hearts of all who experienced their flavorful creations.
      </p>
    </section>
  )
}

export default About
