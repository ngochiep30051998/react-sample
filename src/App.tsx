import { LoadingProvider } from './providers/LoadingProvider';
import Router from './routing';
const App = () => {
    return (
            <LoadingProvider>
                <Router />
            </LoadingProvider>
    )
};

export default App
