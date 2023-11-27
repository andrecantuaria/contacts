export function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }
  
export function select(selector, parent = document) {
    return parent.querySelector(selector);
  }