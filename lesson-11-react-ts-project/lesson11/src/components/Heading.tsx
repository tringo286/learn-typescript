import { ReactElement } from "react"

// A custom type with title property of type string
type HeadingProps = { title: string }

// By specifying ReactElement as the return type, we want to make sure that the component returns something that React can handle (like JSX or a React element).
const Heading = ({ title } : HeadingProps): ReactElement => {
  return (
    <h1>
      {title}
    </h1>
  )
}
 
export default Heading
