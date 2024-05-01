import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Support from './pages/Support';
import NoPage from './pages/NoPage';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import Temp from './components/Temp'

import Professor from './components/Professor';

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="support" element={<Support />} />
                        {professors.map(professor => (
                            <Route key={professor.path} path={professor.path} element={<Professor fullName={professor.fullName} description={professor.description} imageLink={professor.imageLink} credentials={professor.credentials}/>} />
                        ))
                        
                        }
                        {/* <Route path='temp' element={<Temp />} /> */}

                        

                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}


export default App;

const professors = [
    {
        fullName: "Ugur Emre Dogan",
        description: "Computer Engineering Professor. Professor Dogan teaches the Database & Web Development class COMPE561 and Computer Networks class COMPE560. ",
        path:"/ugurdogan",
        imageLink:"/ugurdogan.jpeg",
        credentials:"MSEE"

    },
    {
        fullName: "Parisa Kaveh",
        description: "Electrical Engineering Professor. Professor Kaveh teaches the circuit analysis and control systems classes, EE420 and EE210.",
        path: "/parisakaveh",
        imageLink:"/parisakaveh.jpg",
        credentials:"PhD" 
    },
    {
        fullName: "Barry Dorr", 
        description: "Electrical Engineering Professor. Professor Dorr teaches the Electrical & Computer Engineering Senior Design courses, COMPE491/2 and EE491/2.", 
        path: "/barrydorr", 
        imageLink:"/laser_eyes_dorr.jpeg",
        credentials:"MSEE"
    },
    {
        fullName: "Ying-Khai Teh", 
        description: "Electrical Engineering Profesor. Professor Teh teaches EE330 and COMPE572.", 
        path: "/yingkhaiteh", 
        imageLink:"/jediteh.png",
        credentials:"PhD"
    },
    {
        fullName: "Kenneth Arnold",
        description: "Computer Engineering Professor. Professor Arnold teaches COMPE271 and COMPE 475",
        path: "/kennetharnold",
        imageLink:"arnold.jpg",
        credentials: "MSEE"
    },
    {
        fullName: "Baris Aksanli",
        description: "Computer Engineering Professor. Professor Aksanli teaches COMPE375 and COMPE571",
        path: "/barisaksanli",
        imageLink: "baris.jpg",
        credentials: "PhD"
    },
    {
        fullName: "Ashkan Ashrafi",
        description: "Electrical Engineering Professor. Professor Ashrafi teaches EE410 and EE450",
        path: "/ashkanashrafi",
        imageLink: "ashrafi.jpg",
        credentials: "PhD"
    },
    {
        fullName: "Amir Alimohammad",
        description: "Computer Engineering Professor. Professor Alimohammad teaches COMPE 470",
        path: "/amiralimohammad",
        imageLink: "alimohammad.jpg",
        credentials: "PhD"
    },
    {
        fullName: "Hakan Toreyin",
        description: "Electrical Engineering Professor. Professor Toreyin teaches (not sure)",
        path: "/hakantoreyin",
        imageLink: "toreyin.jpg",
        credentials: "PhD"
    },
    {
        fullName: "Ke Huang",
        description: "Computer Engineering Professor. Professor Huang teaches COMPE270 and COMPE470L",
        path: "/kehuang",
        imageLink: "kehuang.jpg",
        credentials: "PhD"
    }
]