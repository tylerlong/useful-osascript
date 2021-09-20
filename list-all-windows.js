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
      console.log('    window focused', window.focused());
      console.log('    window selected', window.selected());
      console.log('    window enabled', window.enabled());
      console.log('    window value', window.value());
      if(window.focused()) {
        console.log('***************')
      }
    }
  }
}
