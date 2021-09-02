import './App.css';
import PersonCard from './components/PersonCard'

var people = [
  { firstName: "Flea", lastName: "Just Flea", age: 58, hairColor: "None"},
  {firstName: "Anthony", lastName: "Kiedis", age: 58, hairColor: "Black"},
  {firstName: "John", lastName: "Frusciante", age: 51, hairColor: "Brown"},
  {firstName: "Chad", lastName: "Smith", age: 58, hairColor: "Black"}
]


function App(){
  return (
    <div className="App">
      {people.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      })
      }
    </div>
  );
}

export default App;