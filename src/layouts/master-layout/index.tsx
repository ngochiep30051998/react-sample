import { Outlet, useParams } from "react-router-dom";
import {
  ConfigProvider,
} from "antd";

import TopHeader from "./TopHeader";


export default function MasterLayout() {


  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#005baa',
        },
        components: {
          Button: {
            fontSizeIcon: 24
          }
        }
      }}
    >
      <div style={{ minHeight: '100vh' }}>

        <TopHeader />
        <Outlet />

      </div>
    </ConfigProvider >
  );
}
