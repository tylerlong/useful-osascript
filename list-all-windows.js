const systemEvents = Application('System Events');
systemEvents.processes();
for(const process of systemEvents.processes()) {
  if(process.backgroundOnly() === false) {
    console.log('process name', process.name());
    console.log('process visible', process.visible());
    for(const window of process.windows()) {
      console.log('  window title', window.title());
      console.log('    window position', window.position());
      console.log('    window size', window.size());
    }
  }
}
