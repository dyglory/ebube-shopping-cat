import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, Footer } from './components';
import { Home, Checkoutpage} from './pages';
import { Navbar } from "./components/navbar/Navbar";

export function App() {
        return (
            <div className="App">
                <BrowserRouter>
                <ToastContainer />
                <Navbar/>
                <Header/>
                <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path="/checkoutpage" exact element={<Checkoutpage/>} />
                </Routes>
                <Footer />
                </BrowserRouter>
            </div>
        );
   }
export default App;

