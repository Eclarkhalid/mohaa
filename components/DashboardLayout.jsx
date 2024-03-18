import { Children } from "react";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = ({ children }) => {
  return <>
    <DashboardHeader />
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed h-screen rounded-lg dark:border-gray-700">
        {children}
      </div>
    </div>
  </>;
}

export default DashboardLayout;