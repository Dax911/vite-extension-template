import { defineManifest } from '@crxjs/vite-plugin'
import semver from 'semver';
import packageJson from '../package.json'
const { version } = packageJson

const IS_PROD = process.env.NODE_ENV === 'production';
const IS_STAGING = process.env.mode === 'staging';

const PLUGIN_NAME = `${IS_STAGING ? '[STAGING]' : !IS_PROD ? '[DEV]' : ''} ACME`;

const { major, minor, patch } = semver.parse(version);

export default defineManifest(async (config, env) => ({
	manifest_version: 3,
	name: PLUGIN_NAME,
	description: 'ACME',
	// up to four numbers separated by dots
	version: `${major}.${minor}.${patch}`,
	// semver is OK in "version_name"
	version_name: version,
	icons: {
		'128': 'logo_purple@128.png',
		'48': 'logo_purple@48.png',
		'32': 'logo_purple@32.png',
		'16': 'logo_purple@16.png'
	},
	action: {
		default_popup: 'popup.html',
	},
	content_scripts: [
		{
			js: ['src/content/index.ts'],
			matches: ['https://www.google.com/*', 'https://www.youtube.com/*'],
			//run_at: 'document_start',
		},
	],
	host_permissions: ['<all_urls>'],
	permissions: ['storage', 'tabs'],
	devtools_page: 'devtools.html',
	web_accessible_resources: [
		{
			resources: ['devtools_panel.html', 'src/index.css'],
			matches: ['<all_urls>']
		}
	]
}));

