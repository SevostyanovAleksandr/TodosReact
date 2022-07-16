import { Component } from "react";
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"
import { HashRouter, Routes, Route, NavLink} from "react-router-dom";

const date1 = new Date ( 2021, 7, 19, 14, 6);
const date2 = new Date ( 2021, 7, 19, 15, 26);
const date3 = new Date ( 2021, 7, 19, 14, 26);
const date4 = new Date ( 2021, 7, 19, 54, 26);
const date5 = new Date ( 2021, 7, 19, 34, 26);
const date6 = new Date ( 2021, 7, 19, 44, 26);

const initialData = [ 
  {
    title: "изучить реакт",
    desc: "да поскорее",
    done: false,
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

  },
  {
    title: "сообщить Игорю про Дронова",
    desc: "список залпнированных дел  ",
    done: false,
    image: "",
    createdAt: date3.toLocaleString(),
    key: date3.getTime()

  },
  {
    title: "сказать Игорю спасибо за книгу",
    desc: "список залпнированных дел",
    done: false,
    image: "",
    createdAt: date3.toLocaleString(),
    key: date4.getTime()

  },
  {
    title: "Помнить про задания Тимошенко",
    desc: "список залпнированных дел",
    done: false,
    image: "",
    createdAt: date3.toLocaleString(),
    key: date5.getTime()

  },
  {
    title: "Начать готовить задания к первому семестру третьего курса",
    desc: "список залпнированных дел",
    done: false,
    image: "",
    createdAt: date3.toLocaleString(),
    key: date6.getTime()

  },
  
  
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: initialData,  showMenu: false};
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.showMenu = this.showMenu.bind(this);

  }

showMenu (evt) {
  evt.preventDefault();
  this.setState((state)=> ({showMenu: !state.showMenu}))
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

add (deed) {
this.state.data.push (deed);
this.setState((state) => ({}))
}

render() {
  return (
    <HashRouter>
      <nav className="navbar is-light">
        <div className="navbar-brand">
        <NavLink
              to="/"
              className={({ isActive }) =>
                'navbar-item is-uppercase' +
                  (isActive ? ' is-active' : '')
              }
            >
              Todos
               </NavLink>
               <a href="/"
               className={this.state.showMenu ?
                          'navbar-burger is-active' :
                          'navbar-burger'}
               onClick={this.showMenu}>
              <span></span>
              <span></span>
              <span></span>
            </a>
        </div>
        <div className={this.state.showMenu ?
                          'navbar-menu is-active' :
                          'navbar-menu'}
               onClick={this.showMenu}>
            <div className="navbat-start">
                <NavLink
                  to="/add"
                  className={({ isActive }) =>
                    'navbar-item' + (isActive ? ' is-active' : '')
                  }
                >
                  Создать дело
                </NavLink>
              </div>
            </div>

      
      </nav>
      <main className="content px-6 mt-6">
        <Routes>
          <Route path="/" element={
          <TodoList list={this.state.data} 
                    setDone = {this.setDone}
                    delete = {this.delete}/>
            } />
            <Route path="/add" element={
               <TodoAdd add = {this.add} />
            } />
          </Routes>
      </main>
      </HashRouter>
  );
}
}