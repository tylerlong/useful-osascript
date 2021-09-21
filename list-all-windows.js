const systemEvents = Application('System Events');

const printFrontmost = () => {
  for(const process of systemEvents.applicationProcesses()) {
    if(process.frontmost() === true) {
      console.log('process name', process.name());
      const window = process.windows()[0];
      console.log('  window title', window.title());
      console.log('    window position', window.position());
      if(window.focused()) {
        console.log('***************')
      }
    }
  }
};

while(true){
  printFrontmost();
  delay(5);
}
