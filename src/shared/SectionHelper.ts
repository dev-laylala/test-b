export function getOffset(id: string): number {
  return getOffsetTop(id);
}

function getOffsetTop(id: string): number {
  const container = document.getElementById(id);
  if (container == null) {
    return 0;
  }
  const top = container.offsetTop;
  return top - getHeaderHeight();
}

function getHeaderHeight(): number {
  const header = document.getElementById('header');
  return header == null ? 0 : header.offsetHeight - 1;
}

export function onScreenShown(id: string, offset: number = 100): boolean {
  const element = document.getElementById(id);
  if (element == null) {
    return false;
  }
  const windowBottomEdge = window.pageYOffset + window.innerHeight;

  // element top edge
  const elementTopEdge = element.offsetTop;

  // console.log(`${id}: ${elementTopEdge}, ${windowBottomEdge}`);
  // if element is between window's top and bottom edges
  return elementTopEdge + offset <= windowBottomEdge;
}

export function onSubScreenShown(parent: string, id: string, offset: number = 100): boolean {
  const parentElement = document.getElementById(parent);
  const element = document.getElementById(id);
  if (element == null || parentElement == null) {
    return false;
  }
  const windowBottomEdge = window.pageYOffset + window.innerHeight;

  // element top edge
  const elementTopEdge = parentElement.offsetTop + element.offsetTop;

  // console.log(`${id}: ${elementTopEdge}, ${windowBottomEdge}`);
  // if element is between window's top and bottom edges
  return elementTopEdge + offset <= windowBottomEdge;
}

export function onScreen(id: string): boolean {
  if (id === 'main' && window.pageYOffset < 200) {
    return true;
  }
  const element = document.getElementById(id);
  if (element == null) {
    return false;
  }

  const windowBottomEdge = window.pageYOffset + window.innerHeight;

  const elementTopEdge = element.offsetTop;
  const elementBottomEdge = element.offsetTop + element.offsetHeight;

  return elementBottomEdge <= windowBottomEdge && elementTopEdge >= window.pageYOffset;
}

