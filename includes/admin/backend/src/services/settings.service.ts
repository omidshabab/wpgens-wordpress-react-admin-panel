import apiFetch from '@wordpress/api-fetch';
import { GeneralSettingsRequest } from '@/views/Settings/GeneralSettings';
import { DisplaySettingsRequest } from '@/views/Settings/DisplaySettings';

apiFetch.use(apiFetch.createRootURLMiddleware(window.pluginName?.root));
apiFetch.use(apiFetch.createNonceMiddleware(window.pluginName?.apiNonce));

type Settings = GeneralSettingsRequest | DisplaySettingsRequest;

export const setGeneralSettings = (data: Settings) =>
	apiFetch({ path: '/settings', method: 'POST', data }).then((posts) => {
		console.log(posts);
	});

export const getGeneralSettings = () => apiFetch<Settings>({ path: `/settings/` }).then((response) => response);
