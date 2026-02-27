import { getImageUrl } from "./Utils"

const Avatar = ({person}) => {
  return (
    <img src={getImageUrl(person)} alt={person.name} />
  )
}

export default Avatar