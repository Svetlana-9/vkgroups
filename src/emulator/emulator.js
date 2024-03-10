import groups from "./groups.json";
let counter = 0;

const emulator = {
  GetGroupsResponse: (callback) => {
    if (++counter % 5 === 0) throw new Error("service unavailable");
      setTimeout(() => {
        if (counter % 2) {
          return(callback({ result: 1, data: groups }));
        }
        return(callback ({ result: 0 }));
      }, 1000);
  },
};

export default emulator;
