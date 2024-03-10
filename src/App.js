import * as React from "react";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  usePlatform,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Filters from "./Components/Filters";
import emulator from "./emulator/emulator.js";

export default function App() {
  const platform = usePlatform();
  const [groups, setGroups] = React.useState(null);

  const requestGroups = () => {
    try {
      emulator.GetGroupsResponse((response) => {
        if (
          response.result === 0 ||
          response.data === null ||
          response.data === undefined
        ) {
          console.log("Error!");
          setTimeout(() => {
            requestGroups();
          }, 1000);
        } else {
          setGroups(response.data);
        }
      });
    } catch (err) {
      console.log("requestGroups: " + err);
      setTimeout(() => {
        requestGroups();
      }, 1000);
    }
  };

  if (groups === null) {
    requestGroups();
  }

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VK</PanelHeader>
              <Filters groups={groups} />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}
