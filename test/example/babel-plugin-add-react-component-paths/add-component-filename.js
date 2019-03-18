export default function logAllUpdates(options) {
  return function wrap(ReactClass, uniqueId) {
    // const displayName = options.components[uniqueId].displayName || '<Unknown>';
    ReactClass.prototype.filename = options.filename;
    ReactClass.filename = options.filename;

    return ReactClass;
  };
}
