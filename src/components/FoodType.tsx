import { useParams } from 'react-router-dom'

const data = [{
  type: "coco",
  foods: ["water", "banana"]
}]


export function FoodType() {

  const { type } = useParams();
  return (
    <>
      <div>
        {type}
      </div>
    </>
  )
}
