import { ChangeEventHandler } from 'react'

import './search-box-styles.css'

// Type
type SearchBoxProps = {
  className: string
  placeholder?: string
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler
}: SearchBoxProps) => (
  <input
    className={`search--box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
)

export default SearchBox

// class SeacrchBox extends Component {
//   render () {
//     const { onChangeHandler } = this.props
//     return (
//       <input
//         className='search--box'
//         type='search'
//         placeholder='search pizza'
//         onChange={onChangeHandler}
//       />
//     )
//   }
// }

// export default SeacrchBox
