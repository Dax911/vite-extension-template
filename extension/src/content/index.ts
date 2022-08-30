import './ACMEShadowRoot';

const root = document.createElement('ACME-shadow-root') as HTMLElement;

root.id = 'ACME-ext-container';
root.style.pointerEvents = 'none';
root.style.position = 'fixed';
root.style.top = '0';
root.style.left = '0';
root.style.width = '100%';
root.style.height = '100%';
root.style.zIndex = '2147483647';
root.style.backgroundColor = 'transparent';

document.body.append(root);
