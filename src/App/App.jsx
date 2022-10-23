import MainContent from '../Components/MainContent';
import Sidebar from '../Components/Sidebar';

function App() {
  return (
    <div className="flex h-screen overflow-x-hidden bg-blue-100">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
