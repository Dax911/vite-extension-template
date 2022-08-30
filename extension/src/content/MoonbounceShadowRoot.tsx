import React from 'react';
import { createRoot } from 'react-dom/client';
import GameRoot from './GameRoot';
import css from '../index.css?url';

class ACMEShadowRoot extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'closed' });

		const html = document.createElement('html') as HTMLElement;
		const head = document.createElement('head') as HTMLElement;
		const body = document.createElement('body') as HTMLBodyElement;
		const root = document.createElement('div') as HTMLDivElement;
		root.id = 'crx-root';

		const style = document.createElement('style') as HTMLStyleElement;
		style.innerHTML = 'html { font-size: initial; font-size: 16px; } #crx-root { background: white; }';
		head.appendChild(style);

		const globalStyle = document.createElement('link') as HTMLLinkElement;
		globalStyle.rel = 'stylesheet';
		globalStyle.href = chrome.runtime.getURL(css);
		head.appendChild(globalStyle);

		body.appendChild(root);
		html.appendChild(head);
		html.appendChild(body);

		shadowRoot.append(html);
		this.__reactRoot = root;
	}

	connectedCallback() {
		createRoot(this.__reactRoot).render(<GameRoot />);
	}
}

customElements.define('ACME-shadow-root', ACMEShadowRoot, { extends: 'div' });

export default ACMEShadowRoot;
