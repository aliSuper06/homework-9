import { useRef, useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Login } from "./Login/Login";
import { User } from "./User/User";

const productData = [
  {
    title: "Alma",
    price: 120,
    date: "01.25.23",
    id: "1",
  },

  {
    title: "Food",
    price: 380,
    date: "11.07.23",
    id: "2",
  },

  {
    title: "Juice",
    price: 80,
    date: "05.15.23",
    id: "3",
  },
];

function App() {
  const [newProduct, setNewProduct] = useState(
    JSON.parse(localStorage.getItem("key")) || productData
  );
  const [isLogin, setIsLogin] = useState(false);
  const someRef = useRef("ali");

  const [user, setUser] = useState();

  useEffect(() => {
    const login = localStorage.getItem("Auth");
    setIsLogin(login);
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  function addExpenseHandler(data) {
    setNewProduct([...newProduct, data]);
  }

  function deleteExpense(id) {
    const newData = newProduct.filter((el) => el.id !== id);
    setNewProduct(newData);
  }

  const loginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("Auth", !isLogin);
  };

  const logoutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("Auth");
  };

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(newProduct));
  }, [newProduct]);

  function showUser() {
    setUser(true);
    localStorage.setItem("user", !user);
  }

  function showExpenses() {
    setUser(false);
    localStorage.removeItem('user')
  }

  return (
    <div className="App">
      <Header
        isLogin={isLogin}
        LogoutHandler={logoutHandler}
        showExpenses={showExpenses}
        showUser={showUser}
      />
      <>
        {isLogin ? (
          user ? (
            <User />
          ) : (
            <div>
              <NewExpense addExpenseHandler={addExpenseHandler} ref={someRef} />
              <Expenses
                data={newProduct}
                setNewProduct={setNewProduct}
                onDelete={deleteExpense}
              />
            </div>
          )
        ) : (
          <>
            <Login onLogin={loginHandler} />
          </>
        )}
      </>
    </div>
  );
}

export default App;
