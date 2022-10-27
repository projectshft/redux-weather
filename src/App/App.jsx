import MainContent from '../Components/MainSection/MainContent';
import Sidebar from '../Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="flex h-screen overflow-x-hidden bg-gray-50">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
