const systemEvents = Application('System Events');

const printFrontmost = () => {
  const ap = systemEvents.applicationProcesses().find(ap => ap.frontmost() === true);
  if(!ap) {
    return;
  }
  if(ap.windows.length === 0) {
    return;
  }
  const window = ap.windows[0];
  console.log(window.position());
};

printFrontmost();
