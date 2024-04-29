import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Support from './pages/Support';
import NoPage from './pages/NoPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Professor from './components/Professor';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
        },
    },
});

const professors = [
    {
        fullName: "Ugur Emre Dogan",
        description: "Computer Engineering Professor. Professor Dogan teaches the Database & Web Development class COMPE561 and Computer Networks class COMPE560. ",
        path:"/ugurdogan",
        imageLink:"/ugurdogan.jpg",
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
        imageLink:"/teh.jpg",
        credentials:"PhD"
    },
    {
        fullName: "Kenneth Arnold",
        description: "Computer Engineering Professor. Professor Arnold teaches COMPE271 and COMPE 475",
        path: "/kennetharnold",
        imageLink:"arnold.jpg",
        credentials: "MSEE"
    }
]

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

                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;