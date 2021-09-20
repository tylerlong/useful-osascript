const systemEvents = Application('System Events');
systemEvents.processes();
for(const process of systemEvents.processes()) {
  if(process.backgroundOnly() === false) {
    console.log('process name', process.name());
    for(const window of process.windows()) {
      console.log('window title', window.title());
    }
  }
}
