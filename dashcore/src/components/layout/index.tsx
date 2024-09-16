import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import React, { Children } from "react";
import { Header } from "@refinedev/antd";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedLayoutV2 {...titleProps} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
