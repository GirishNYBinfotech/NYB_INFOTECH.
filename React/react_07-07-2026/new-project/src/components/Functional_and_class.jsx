import React,{Component} from 'react'

function Functional() {
  return (
    <div>
      <p>This is Functional Component</p>
    </div>
  );
}

// Class Component
class CLASS extends Component {
  render() {
    return (
      <div>
        <p>This is Class Component</p>
      </div>
    );
  }
}

const Functional_and_class = () => {
  return (
    <div>
      <Functional />
      <CLASS />
    </div>
  )
}
export default Functional_and_class
