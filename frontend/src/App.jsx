import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Support from './pages/Support';
import NoPage from './pages/NoPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Barrydorr from './pages/Barrydorr';
import Ugurdogan from './pages/Ugurdogan';
import Parisakaveh from './pages/Parisakaveh';
import Yingkhaiteh from './pages/Yingkhaiteh';
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
        fullName: "Ugur Dogan", description: "Professor", path:"/ugurdogan", imageLink:"/ugurdogan.jpg"
    },
    {
        fullName: "Parisa Kaveh", description: "PhD", path: "/parisakaveh", imageLink:"/parisakaveh.jpg" 
    },
    {
        fullName: "Barry Dorr", description: "PhD", path: "/barrydorr", imageLink:"/laser_eyes_dorr.jpeg"
    },
    {
        fullName: "Ying-Khai Teh", description: "PhD", path: "/yingkhaiteh", imageLink:"/teh.jpg"
    },
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
                            <Route key={professor.path} path={professor.path} element={<Professor fullName={professor.fullName} description={professor.description} imageLink={professor.imageLink} />} />
                        ))
                        
                        }
                        {/* <Route path="Barrydorr" element={<Barrydorr />} /> */}
                        {/* <Route path="Ugurdogan" element={<Professor fullName="Ugur Dogan" description={"PRofessor"} />} /> */}
                        {/* <Route path="Parisakaveh" element={<Parisakaveh />} /> */}
                        {/* <Route path="Yingkhaiteh" element={<Yingkhaiteh />} /> */}
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;