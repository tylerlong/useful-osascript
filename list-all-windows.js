const systemEvents = Application('System Events');
systemEvents.processes();
const names = [];
for(const process of systemEvents.processes()) {
  names.push(process.name());
}
console.log(names);
