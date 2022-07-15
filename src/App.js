import { Component } from "react";
import TodoList from "./TodoList"

const date1 = new Date ( 2021, 7, 19, 14, 6);
const date2 = new Date ( 2021, 7, 19, 15, 26);

const initialData = [ 
  {
    title: "изучить реакт",
    desc: "да поскорее",
    done:true,
    image: "",
    createdAt: date1.toLocaleString(),
    key: date1.getTime()

  },
  {
    title: "написать приложение",
    desc: "список залпнированных дел",
    done: false,
    image: "",
    createdAt: date2.toLocaleString(),
    key: date2.getTime()

  }

];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: initialData};
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
  }

setDone (key) {
  const deed = this.state.data.find((curent) => curent.key === key);
  if (deed) 
  deed.done = true;
  this.setState((state)=> ({}))
}

delete (key) {
  const newData = this.state.data.filter (
    (curent) => curent.key != key );
this.setState ((state) => ({ data: newData}))
  
}

render() {
  return(
    <div>
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <span className="navbar-item is-uppercase">
            Todos
          </span>
        </div>
      </nav>
      <main className="content px-6 mt-6">
          <TodoList 
          list={this.state.data} 
          setDone = {this.setDone}
          delete = {this.delete}
          />
      </main>
    </div>
  )
}
}