import { BrowserRouter, Route, Routes } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "@/styles/reset.css";
import "@/styles/global.css";
import Dashboard from "@/components/Dashboard";
import MainPage from "@/pages/MainPage";
import Api from "@/pages/modules/Api";
import Pager from "@/pages/modules/Pager";
import FileManager from "@/pages/modules/FileManager";
import ThumbnailManager from "@/pages/modules/ThumbnailManager";
import Region from "@/pages/modules/Region";
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
          <Route
            path="modules/thumbnail-manager"
            element={<ThumbnailManager />}
          />
          <Route path="modules/region" element={<Region />} />
          <Route path="modules/region-manager" element={<Region />} />
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
