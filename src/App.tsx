import { BrowserRouter, Route, Routes } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "./styles/reset.css";
import "./styles/global.css";
import Dashboard from "@/components/Dashboard";
import MainPage from "@/pages/MainPage";
import Api from "@/pages/modules/Api";
import Pager from "@/pages/modules/Pager";
import FileManager from "@/pages/modules/FileManager";
import Form from "@/pages/common/Form";
import Grid from "@/pages/common/Grid";
import Ui from "@/pages/common/Ui";
import Utils from "@/pages/common/Utils";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="modules/api" element={<Api />} />
          <Route path="modules/pager" element={<Pager />} />
          <Route path="modules/file-manager" element={<FileManager />} />
          <Route path="common/form" element={<Form />} />
          <Route path="common/grid" element={<Grid />} />
          <Route path="common/ui" element={<Ui />} />
          <Route path="common/utils" element={<Utils />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
