import {App} from "vue";
import * as components from "./components";

import "./styles/index.scss";

const NDLibrary = {
    install: function (app: App) {
        // Auto import all components
        for (const componentKey in components) {
            app.use((components as any)[componentKey])
        }
    }
};

export default NDLibrary;

// export all components as vue plugin
export * from "./components";