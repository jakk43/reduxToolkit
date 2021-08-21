
import './App.css';
import Footer from './components/Footer';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Warning from './components/Warning';

function App() {
    return (
        <div className="App">
            <Input />
            <div className="container text-start">
                <Navbar />
                <Warning />
                <Footer />
            </div>
        </div>
    );
}

export default App;
